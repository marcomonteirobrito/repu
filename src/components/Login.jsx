import React, { useState, useEffect } from "react";
import { MdEmail, MdLock, MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRouter } from "next/router";

import styles from "../styles/components/Login.module.scss";

import Button from "../components/Button";
import connectionApi from "../services/connectionApi";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonDisable, setButtonDisable] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [email, password]);

  useEffect(() => {
    handleGetLocalStorage();
  }, []);

  const handleGetLocalStorage = () => {
    const userToken = localStorage.getItem("token");

    userToken && router.push("dashboard");
  };
  const handleSubmitLogin = async () => {
    try {
      setIsLoading(true);

      const response = await connectionApi.get("/login");
      handleSaveLocalStorage(response.data);
      console.log(response);
      response.status === 200 && router.push("/dashboard");
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveLocalStorage = async ({ token, userName, userId }) => {
    try {
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userId", userId);
    } catch (err) {
      console.log("Erro ao salvar no localStorage");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <MdEmail />
        <input
          type="email"
          placeholder="E-mail"
          className="input-email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div className={styles.input}>
        <MdLock />
        <input
          type={passwordVisible ? "text" : "password"}
          placeholder="Senha"
          className="input=password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {passwordVisible ? (
          <MdVisibilityOff onClick={() => setPasswordVisible(false)} />
        ) : (
          <MdVisibility onClick={() => setPasswordVisible(true)} />
        )}
      </div>

      <a>Esqueci minha senha</a>

      <Button
        label="Entrar"
        onClick={handleSubmitLogin}
        isLoading={isLoading}
        isDisable={buttonDisable}
      />

      <span>
        Não tem uma conta? <a>Registre-se</a>
      </span>
    </div>
  );
}
