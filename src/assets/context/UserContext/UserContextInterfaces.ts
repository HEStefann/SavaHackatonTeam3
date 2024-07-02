export interface UserInterface {
  username: string;
  phone: string;
  email: string;
  password: string;
  password_confirmation?: string;
  policies?: string[];
}

export interface UserContextInterface {
  user: undefined | UserInterface;
  username: string;
  phone: string;
  email: string;
  password: string;
  confirmedPassword?: string;
  policies: string[];
  setUser: (user: UserInterface) => void;
  setUsername: (username: string) => void;
  setPhone: (phone: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmedPassword: (password: string) => void;
  setPolicies: (policies: string[]) => void;
}

export interface UserChild {
  children: React.ReactNode;
}
