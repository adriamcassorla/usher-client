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
      .then((user) => {
        setIsCheckingUser(false);
        if (typeof user === "string") {
          changeStatus("error", user);
        } else {
          populateUser(user);
        }
      })
      .catch((error) => changeStatus("error", error));
  }, []);

  if (isCheckingUser) return null;
  if (!user) return <Auth setUser={populateUser}></Auth>;
  else return <MainStack></MainStack>;
};

export default index;
