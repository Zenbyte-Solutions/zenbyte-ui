import React from "react";
import { useRoles } from "./RoleContext";

interface RoleBasedAccessProps {
  roles: string[]; 
  fallbackComponent?: React.ReactNode; 
  children: React.ReactNode; 
}

const RoleBasedAccess: React.FC<RoleBasedAccessProps> = ({
  roles,
  children,
  fallbackComponent = <div>Access Denied</div>,
}) => {
  const { roles: userRoles } = useRoles();
  
  const hasAccess = roles.some(role => userRoles.includes(role));

  if (!hasAccess) {
    return <>{fallbackComponent}</>;
  }

  return <>{children}</>; 
};

export default RoleBasedAccess;
