import { useEffect, useState } from "react";
import { UserInterface } from "../../context/UserContext/UserContextInterfaces";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import React from "react"; // Ensure React is imported if not already

export const Register = () => {
  const navigate = useNavigate();
  // const { email, password, setEmail, setPassword } = useUserContext();
  const [username, setUsername] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmedPassword, setConfirmedPassword] = useState<string>("");
  const [users, setUsers] = useState<UserInterface[]>([]);
  const [emailAlert, setEmailAlert] = useState(false);

  // New state variable for error message
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const usersAPI = "http://localhost:5001/users";

  useEffect(() => {
    axios
      .get(usersAPI)
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const setUserHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser: UserInterface = {
      username: username,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: confirmedPassword,
    };

    axios
      .post(`https://e5e3-77-28-131-181.ngrok-free.app/api/register`, newUser)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(newUser.email));
          setErrorMessage(null);
          window.location.reload();
        }
      })
      .catch((err) => {
        // Assuming the error message is in the response body under a 'message' field
        const errorMessage =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : "An unexpected error occurred. Please try again.";

        setErrorMessage(errorMessage);
        console.log(err);
      });
  };

  return (
    <>
      <div className={`w-full flex`}>
        <div className="flex w-full flex-col lg:flex px-[18px] py-[18px] lg:w-[50%] lg:pl-[57px] lg:pt-[42px]">
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="lg:hidden"
          >
            <path
              d="M11.5411 0.462242C11.8349 0.758305 12 1.1598 12 1.57843C12 1.99707 11.8349 2.39856 11.5411 2.69462L3.78308 10.5095L11.5411 18.3244C11.8266 18.6222 11.9846 19.021 11.981 19.4349C11.9774 19.8489 11.8126 20.2449 11.522 20.5376C11.2314 20.8303 10.8383 20.9963 10.4274 20.9999C10.0165 21.0035 9.62058 20.8444 9.32499 20.5568L0.458878 11.6257C0.165059 11.3297 0 10.9282 0 10.5095C0 10.0909 0.165059 9.6894 0.458878 9.39334L9.32499 0.462242C9.6189 0.166269 10.0175 0 10.4331 0C10.8486 0 11.2472 0.166269 11.5411 0.462242Z"
              fill="black"
            ></path>
          </svg>
          <Link to={"/SignIn"}>
            {" "}
            <svg
              width="40"
              height="30"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="hidden lg:flex"
            >
              <path
                d="M3.07158 11.6414L1.53579 13.0836L0 11.6414L1.53579 10.1992L3.07158 11.6414ZM40 27.9602C40 28.5012 39.7711 29.02 39.3638 29.4025C38.9564 29.7851 38.4039 30 37.8277 30C37.2516 30 36.6991 29.7851 36.2917 29.4025C35.8843 29.02 35.6555 28.5012 35.6555 27.9602H40ZM12.3971 23.2828L1.53579 13.0836L4.60736 10.1992L15.4687 20.3984L12.3971 23.2828ZM1.53579 10.1992L12.3971 0L15.4687 2.88434L4.60736 13.0836L1.53579 10.1992ZM3.07158 9.60155H24.7942V13.6812H3.07158V9.60155ZM40 23.8805V27.9602H35.6555V23.8805H40ZM24.7942 9.60155C28.827 9.60155 32.6947 11.1059 35.5463 13.7837C38.398 16.4616 40 20.0935 40 23.8805H35.6555C35.6555 21.1755 34.5112 18.5812 32.4743 16.6685C30.4374 14.7558 27.6748 13.6812 24.7942 13.6812V9.60155Z"
                fill="black"
              ></path>
            </svg>
          </Link>

          <div className="flex w-[111px] h-[111px] lg:hidden self-center">
            <img
              src={require(`../../images/zelenkapa1.png`)}
              className="w-full h-full"
              alt=""
            />
          </div>
          <form
            onSubmit={setUserHandler}
            className="flex flex-col items-center w-full gap-[53px]"
          >
            {errorMessage && (
              <div className="text-red-500 p-4 bg-red-100 rounded-lg border border-red-400 mb-4">
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
            <p className="text-[42px] lg:text-[70px] text-black">
              Регистрирај се
            </p>
            <div className="flex flex-col gap-[40px] w-full">
              <div className="relative">
                <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                  <p className="text-xs lg:text-3xl text-black">
                    Име и Презиме
                  </p>
                </div>
                <div className="h-[28px]"></div>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[3%] text-[30px]"
                  type="text"
                  placeholder="Џон Доу"
                  required
                />
              </div>
              <div className="relative">
                <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                  <p className="text-xs lg:text-3xl text-black">Телефон</p>
                </div>
                <div className="h-[28px]"></div>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[3%] text-[30px]"
                  type="tel"
                  placeholder="+70100200"
                  required
                />
              </div>
              <div className="relative">
                <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                  <p className="text-xs lg:text-3xl text-black">Е-маил</p>
                </div>
                <div className="h-[28px]"></div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[3%] text-[30px]"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="relative">
                <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                  <p className="text-xs lg:text-3xl text-black">Лозинка</p>
                </div>
                <div className="h-[28px]"></div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[3%] text-[30px]"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
              <div className="relative">
                <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                  <p className="text-xs lg:text-3xl text-black">
                    Потврди лозинка
                  </p>
                </div>
                <div className="h-[28px]"></div>
                <input
                  onChange={(e) => setConfirmedPassword(e.target.value)}
                  className="w-full h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[3%] text-[30px]"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-[190px] h-[50px] sm:text-base font-semibold lg:w-[316px] lg:h-[77px] rounded-[50px] bg-[#1ea282] border-2 border-[#d9d9d9] lg:text-2xl text-white"
            >
              Регистрирај се
            </button>
          </form>
        </div>
        <div className="hidden lg:flex justify-center items-center h-screen m-auto">
          <img src={require(`../../images/signincrop.png`)} alt="Logo" />
        </div>
      </div>
    </>
  );
};
