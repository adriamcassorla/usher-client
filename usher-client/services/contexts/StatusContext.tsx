import * as React from "react";
import { createContext, useContext, useState } from "react";
import { Modal } from "native-base";
import { Loader } from "../../components/Animations/Loader";

type StatusContextType = {
  status: "loading" | "loaded" | "error";
  changeStatus: (newStatus: "loading" | "loaded" | "error") => void;
};

const defaultValue: StatusContextType = {
  status: "loading",
  changeStatus: () => {},
};

export const StatusContext = createContext<StatusContextType>(defaultValue);

export const StatusProvider = ({ children }: any) => {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );

  const changeStatus = (newStatus: "loading" | "loaded" | "error") => {
    setStatus(newStatus);
  };

  return (
    <StatusContext.Provider value={{ status, changeStatus }}>
      <Modal isOpen={status === "loading"}>
        <Loader />
      </Modal>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatusContext = () => useContext(StatusContext);
