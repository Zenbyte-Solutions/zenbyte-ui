import React, { ReactNode } from "react";
interface RoleContextType {
    roles: string[];
    setRoles: (roles: string[]) => void;
}
export declare const useRoles: () => RoleContextType;
export declare const RoleProvider: React.FC<{
    children: ReactNode;
}>;
export {};
