import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isAuthenticated } from "../../user/atoms";

type AuthenticatedProps = {
  children: ReactNode;
};

const Authenticated = ({ children }: AuthenticatedProps) => {
  const isAuthed = useRecoilValue(isAuthenticated);
  const location = useLocation();

  if (isAuthed === false)
    return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

export default Authenticated;
