import React, { useContext } from "react";

import SEO from "../components/SEO";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <SEO
        title="Repu, organize as contas da sua republica"
        shouldExcludeTitleSuffix
      />

      <h1>{user?.name}</h1>
    </div>
  );
}
