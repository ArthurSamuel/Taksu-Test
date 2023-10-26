import { useDispatch } from "react-redux";
import { IAuthData } from "../Login.type";
import { setUser } from "../../../store/User/User";
import { useNavigate } from "react-router";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = ({ user }: { user: string }) => {
    const key = "kunci";
    const temp = localStorage.getItem(key);
    let data = {} as IAuthData;
    data.activeUser = user;
    data.records = [];
    if (temp) {
      const tempData = JSON.parse(temp) as IAuthData;
      data.records = tempData.records;
    }
    if (
      !data.records.find(
        (item) => item.key.toLowerCase() === user.toLocaleUpperCase()
      )
    ) {
      data.records.push({
        key: user,
        data: [],
      });
    }
    localStorage.setItem(key, JSON.stringify(data));
    dispatch(setUser(data));
    navigate("/");
  };

  return {
    login,
  };
};

export default useAuth;
