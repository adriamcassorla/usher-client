import * as React from "react";

import MainStack from "./navigation/MainStack";
import { useState } from "react";
import { UserContext } from "../services/contexts/UserContext";
import { Auth } from "./pages";
import { getUserProfile } from "../services/api/user";

const index = () => {
  const { user, populateUser } = React.useContext(UserContext);
  const [status, setStatus] = useState<"loading" | "loaded">("loading");

  React.useEffect(() => {
    getUserProfile().then((user) => {
      populateUser(user);
      setStatus("loaded");
    });
  }, []);

  if (status === "loading") return null;
  if (!user) return <Auth setUser={populateUser}></Auth>;
  else return <MainStack></MainStack>;
};

export default index;
