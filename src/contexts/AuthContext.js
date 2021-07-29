import { createContext, useState, useEffect } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from "next/router";

import connectionApi from "../services/connectionApi";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "repu-token": token } = parseCookies();

    token ? recoverUserInformation({ token }) : router.push("/");
  }, []);

  async function recoverUserInformation({ token }) {
    const response = await connectionApi.get("userDetail");

    setUser(response.data);
  }

  async function signIn({ email, password }) {
    console.log(email);
    console.log(password);

    const response = await connectionApi.get("/signIn");

    setCookie(undefined, "repu-token", response.data.token, {
      maxAge: 60 * 60 * 720, // 30 dias
    });

    connectionApi.defaults.headers[
      "Authorization"
    ] = `Bearer ${response.data.token}`;

    setUser(response.data.user);

    router.push("/dashboard");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
