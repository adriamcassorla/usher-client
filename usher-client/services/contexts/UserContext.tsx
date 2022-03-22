import * as React from "react";
import { createContext, useContext, useState } from "react";

type UserContextType = {
  user: User | null;
  populateUser: (newUser: User | null) => void;
};

const defaultValue: UserContextType = {
  user: null,
  populateUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const populateUser = (newUser: User | null) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, populateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
