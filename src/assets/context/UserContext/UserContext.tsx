import { createContext, useContext } from "react";
import { UserContextInterface, UserInterface } from "./UserContextInterfaces";

const setUser = () => console.log("seted!");
const setUsername = () => console.log("seted!");
const setEmail = () => console.log("seted!");
const setPhone = () => console.log("seted!");
const setPassword = () => console.log("seted!");
const setConfirmedPassword = () => console.log("seted!");
const setPolicies = () => console.log("seted!");

const userContextState: UserContextInterface = {
  user: undefined as undefined,
  username: "" as string,
  email: "" as string,
  phone: "" as string,
  password: "" as string,
  confirmedPassword: "" as string,
  policies: [],

  setUser: setUser,
  setUsername: setUsername,
  setEmail: setEmail,
  setPhone: setPhone,
  setPassword: setPassword,
  setConfirmedPassword: setConfirmedPassword,
  setPolicies: setPolicies,
};

export const UserContext = createContext({
  user: undefined,
  username: "",
  email: "",
  phone: "",
  password: "",
  confirmedPassword: "",
  policies: [],
  setUser: () => {},
  setUsername: () => {},
  setEmail: () => {},
  setPhone: () => {},
  setPassword: () => {},
  setConfirmedPassword: () => {},
  setPolicies: () => {},
} as UserContextInterface);

export const useUserContext = () => useContext(UserContext);
