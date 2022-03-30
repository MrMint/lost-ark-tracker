import { isNil } from "ramda";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { activeUserId } from "../../user/atoms";

type AuthenticatedProps = {
  children: ReactNode;
};

const Authenticated = ({ children }: AuthenticatedProps) => {
  const id = useRecoilValue(activeUserId);
  const location = useLocation();

  if (isNil(id))
    return <Navigate to="/login" state={{ from: location }} replace />;
  return <>{children}</>;
};

export default Authenticated;
