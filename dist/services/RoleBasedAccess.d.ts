import React from "react";
interface RoleBasedAccessProps {
    roles: string[];
    fallbackComponent?: React.ReactNode;
    children: React.ReactNode;
}
declare const RoleBasedAccess: React.FC<RoleBasedAccessProps>;
export default RoleBasedAccess;
