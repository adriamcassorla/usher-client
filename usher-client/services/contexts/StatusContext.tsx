import * as React from "react";
import { createContext, useContext, useState } from "react";
import { Modal, useToast } from "native-base";
import { Loader } from "../../components/Animations/Loader";

type Status = "loading" | "loaded" | "error";
type StatusContextType = {
  status: Status;
  changeStatus: (newStatus: Status, error?: string) => void;
};

const defaultValue: StatusContextType = {
  status: "loading",
  changeStatus: () => {},
};

const StatusContext = createContext<StatusContextType>(defaultValue);

export const StatusProvider = ({ children }: any) => {
  const toast = useToast();
  const [status, setStatus] = useState<Status>(defaultValue.status);

  const changeStatus = (newStatus: Status, error?: string) => {
    setStatus(newStatus);
    if (newStatus === "error") {
      toast.show({
        status: "error",
        title: "Oups... there has been an error! 🤔",
        description: error,
        mb: 8,
        mx: 5,
      });
    }
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
