import * as React from "react";
import MainStack from "./navigation/MainStack";
import { useUserContext } from "../services/contexts/UserContext";
import { Auth } from "./pages";
import { getUserProfile } from "../services/api/user";
import { useEffect, useState } from "react";
import { useStatusContext } from "../services/contexts/StatusContext";

const index = () => {
  const { user, populateUser } = useUserContext();
  const [isCheckingUser, setIsCheckingUser] = useState(true);
  const { changeStatus } = useStatusContext();

  useEffect(() => {
    getUserProfile()
      .then((res) => {
        if (typeof res === "string") {
          changeStatus("error", res);
        } else {
          populateUser(res);
        }
        setIsCheckingUser(false);
      })
      .catch((error) => changeStatus("error", error));
  }, []);

  if (isCheckingUser) return null;
  else {
    if (!user) {
      return <Auth setUser={populateUser}></Auth>;
    } else return <MainStack></MainStack>;
  }
};

export default index;
