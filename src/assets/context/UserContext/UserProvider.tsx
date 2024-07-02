import { useEffect, useState } from "react";
import {
  UserChild,
  UserContextInterface,
  UserInterface,
} from "./UserContextInterfaces";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }: UserChild) => {
  const [user, setUser] = useState<UserInterface>();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [policies, setPolicies] = useState<string[]>([]);

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user !== null) {
      setUser(JSON.parse(user));
    } else {
      user = null;
    }
  }, []);

  const userValue: UserContextInterface = {
    user: user,
    username: username,
    email: email,
    phone: phone,
    password: password,
    confirmedPassword: confirmedPassword,
    policies: policies,
    setUser: setUser,
    setUsername: setUsername,
    setEmail: setEmail,
    setPhone: setPhone,
    setPassword: setPassword,
    setConfirmedPassword: setConfirmedPassword,
    setPolicies: setPolicies,
  };

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};
