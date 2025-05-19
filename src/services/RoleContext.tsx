import React, { createContext, useContext, ReactNode, useState, useEffect } from "react";
import Cookies from "js-cookie";

interface RoleContextType {
  roles: string[];
  setRoles: (roles: string[]) => void;
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const useRoles = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error("useRoles must be used within a RoleProvider");
  }
  return context;
};

export const RoleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [roles, setRoles] = useState<string[]>([]);

  useEffect(() => {
    const storedRoles = Cookies.get("user_roles")?.split(",");
    if (storedRoles) setRoles(storedRoles);
  }, []);

  return (
    <RoleContext.Provider value={{ roles, setRoles }}>
      {children}
    </RoleContext.Provider>
  );
};
