/* import React, { createContext, useState, ReactNode } from "react";

// Definindo o tipo do contexto
type UserContextType = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
};

// Criando o contexto com um valor inicial como undefined (opcional)
const UserContext = createContext<UserContextType | undefined>(undefined);

// Componente UserProvider que irá envolver outros componentes e prover o valor do contexto
const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState("Achelton");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
 */