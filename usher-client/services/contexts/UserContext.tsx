import * as React from 'react';
import { createContext, useContext, useState } from 'react';
import { getUser } from '../api/user';

type UserContextType = {
  user: User | null;
  populateUser: () => void;
};

const defaultValue: UserContextType = {
  user: null,
  populateUser: () => {},
};

export const UserContext = createContext<UserContextType>(defaultValue);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  const populateUser = async () => {
    const fetchedUser = await getUser();
    setUser(fetchedUser);
  };

  return (
    <UserContext.Provider value={{ user, populateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
