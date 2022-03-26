import * as React from "react";
import MainStack from "./navigation/MainStack";
import { useUserContext } from "../services/contexts/UserContext";
import { Auth } from "./pages";
import { getUserProfile } from "../services/api/user";
import { useState } from "react";

const index = () => {
  const { user, populateUser } = useUserContext();
  const [isCheckingUser, setIsCheckingUser] = useState(true);
  React.useEffect(() => {
    getUserProfile().then((user) => {
      populateUser(user);
      setIsCheckingUser(false);
    });
  }, []);
  if (isCheckingUser) return null;
  if (!user) return <Auth setUser={populateUser}></Auth>;
  else return <MainStack></MainStack>;
};

export default index;
