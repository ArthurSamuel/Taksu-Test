import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthState, setUser } from "../store/User/User";
import { useNavigate } from "react-router";

interface IPrivateRoute {
  children: JSX.Element | JSX.Element[];
}

export default function PrivateRoute({ children }: IPrivateRoute) {
  const navigate = useNavigate();
  const user = useSelector((state: AuthState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user?.activeUser) {
      const key = process.env.REACT_APP_KEY;
      const temp = localStorage.getItem(key || "");
      if (temp) {
        const tempData = JSON.parse(temp);
        dispatch(setUser(tempData));
      } else {
        navigate("/login");
      }
    }
  }, [dispatch, navigate, user?.activeUser]);

  return <React.Fragment>{children}</React.Fragment>;
}
