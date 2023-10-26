import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, setUser } from "../store/User/User";

interface IPrivateRoute {
  children: JSX.Element | JSX.Element[];
}

export default function PrivateRoute({ children }: IPrivateRoute) {
  const user = useSelector((state: AuthState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.activeUser) {
      const temp = localStorage.getItem("kunci");
      if (temp) {
        const tempData = JSON.parse(temp);
        dispatch(setUser(tempData));
      }
    }
  }, []);

  return <React.Fragment>{children}</React.Fragment>;
}
