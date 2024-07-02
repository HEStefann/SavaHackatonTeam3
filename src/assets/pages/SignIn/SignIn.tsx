import { useEffect, useState } from "react";
import { UserInterface } from "../../context/UserContext/UserContextInterfaces";
import { useUserContext } from "../../context/UserContext/UserContext";
import axios from "axios";
import { signInWithGooglePopup } from "../../lib/firebase";
import { Link } from "react-router-dom";

interface SignInUserProps {
  email: string;
  password: string;
}

export const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<UserInterface[]>();
  const { setUser } = useUserContext();
  const usersAPI = "http://localhost:5001/users/";
  const [defaultState, setDefaultState] = useState(true);
  const [firstPopUpState, setFirstPopUpState] = useState(false);
  const [sndPopUpState, setSndPopUpState] = useState(false);
  const [thirdPopUpState, setThirdPopUpState] = useState(false);
  const [fourPopUpState, setFourPopUpState] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    axios
      .get(usersAPI)
      .then((res: any) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    // Only start the countdown if timeLeft is greater than 0
    if (timeLeft > 0) {
      // Set up the interval to decrement timeLeft every second
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // Clear the interval when the component unmounts or timeLeft reaches 0
      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);
  const formatTimeLeft = () => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  const onSumbmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user: SignInUserProps = {
      email: email,
      password: password,
    };
    axios
      .post(`https://e5e3-77-28-131-181.ngrok-free.app/api/login`, user)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(user));
          window.location.reload();
        }
      })
      .catch((err) => {
        const errorMessage =
          err.response && err.response.data && err.response.data.message
            ? err.response.data.message
            : "An unexpected error occurred. Please try again.";
        setErrorMessage(errorMessage);
        console.log(err);
      });
  };

  const handlePopUp = () => {
    setFirstPopUpState(!firstPopUpState);
  };
  const handleSndPopUp = () => {
    setSndPopUpState(!sndPopUpState);
    setFirstPopUpState(!firstPopUpState);
  };
  const handleThirdPopUp = () => {
    setThirdPopUpState(!thirdPopUpState);
    setSndPopUpState(!sndPopUpState);
    fetch(`https://e5e3-77-28-131-181.ngrok-free.app/api/send-sms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((error) => {
        console.error("Error fetching policies:", error);
      });
    
  };
  const handleFourPopUp = () => {
    setFourPopUpState(!fourPopUpState);
    setThirdPopUpState(!thirdPopUpState);
    localStorage.setItem("user", JSON.stringify("wqeqq@sa.com"));
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithGooglePopup();
      if (users && result.user.email) {
        const correctUser = users.find(
          (user) => user.email === result.user.email
        );
        if (correctUser) {
          localStorage.setItem("user", JSON.stringify(correctUser));
          setUser(correctUser);
        }
      }
    } catch (e) {
      setErrorMessage(
        "An error occurred during Google sign-in. Please try again."
      );
      console.log("ERROR", e);
    }
  };
  return (
    <>
      <div
        className={`${
          firstPopUpState ? "flex" : "hidden"
        } bg-[#000] w-full h-screen items-center justify-center bg-opacity-50`}
      >
        <div className="rounded-[62px] bg-[#f0f0f0] px-[177px] pb-[138px] relative flex flex-col items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute right-[92px] top-[63px]"
            onClick={handlePopUp}
          >
            <path
              d="M19.5786 17.5581C19.8469 17.8263 19.9976 18.1902 19.9976 18.5696C19.9976 18.9489 19.8469 19.3128 19.5786 19.581C19.3104 19.8493 18.9465 20 18.5671 20C18.1877 20 17.8238 19.8493 17.5556 19.581L10 12.0235L2.44206 19.5787C2.17378 19.8469 1.80992 19.9976 1.43052 19.9976C1.05113 19.9976 0.687267 19.8469 0.418991 19.5787C0.150716 19.3104 3.99761e-09 18.9466 0 18.5672C-3.99762e-09 18.1878 0.150716 17.824 0.418991 17.5557L7.97693 10.0006L0.421371 2.4431C0.153095 2.17484 0.00238013 1.81101 0.00238013 1.43163C0.00238014 1.05225 0.153095 0.688415 0.421371 0.420156C0.689646 0.151897 1.05351 0.00118977 1.4329 0.00118977C1.8123 0.00118977 2.17616 0.151897 2.44444 0.420156L10 7.97765L17.5579 0.418966C17.8262 0.150706 18.1901 -6.32041e-09 18.5695 0C18.9489 6.32041e-09 19.3127 0.150706 19.581 0.418966C19.8493 0.687225 20 1.05106 20 1.43044C20 1.80982 19.8493 2.17365 19.581 2.44191L12.0231 10.0006L19.5786 17.5581Z"
              fill="black"
            ></path>
          </svg>
          <p className="w-[715px] mt-[132px] text-[32px] font-medium text-center text-black">
            Рационализирајте го процесот на најавување со СМС код за
            автентикација!
          </p>
          <div className="pt-[13px]">
            <img src={require(`../../images/phone2.png`)} alt="" />
          </div>
          <div className="flex flex-col gap-[35px]">
            <p className="w-[707px] text-[25px] text-center text-black">
              Секогаш кога ќе се најавите, ќе користите лозинка и СМС код за
              потврда.
            </p>
            <button
              onClick={handleSndPopUp}
              className="flex justify-center items-center px-[130px] py-[22px] rounded-[50px] bg-[#3ca082] border-2 border-[#d6d6d6] text-[25px] font-semibold text-neutral-100"
            >
              Започни
            </button>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#000] w-full h-screen items-center justify-center bg-opacity-50 z-[1] ${
          sndPopUpState ? "flex" : "hidden"
        }`}
      >
        <div className="w-[1077px] h-[904px] pt-[83px] pb-[70px] pl-[149px] pr-[156px] rounded-[62px] bg-[#f0f0f0] relative">
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute top-[43px] left-[61px]"
          >
            <path
              d="M3.07158 11.6414L1.53579 13.0836L0 11.6414L1.53579 10.1992L3.07158 11.6414ZM40 27.9602C40 28.5012 39.7711 29.02 39.3638 29.4025C38.9564 29.7851 38.4039 30 37.8277 30C37.2516 30 36.6991 29.7851 36.2917 29.4025C35.8843 29.02 35.6555 28.5012 35.6555 27.9602H40ZM12.3971 23.2828L1.53579 13.0836L4.60736 10.1992L15.4687 20.3984L12.3971 23.2828ZM1.53579 10.1992L12.3971 0L15.4687 2.88434L4.60736 13.0836L1.53579 10.1992ZM3.07158 9.60155H24.7942V13.6812H3.07158V9.60155ZM40 23.8805V27.9602H35.6555V23.8805H40ZM24.7942 9.60155C28.827 9.60155 32.6947 11.1059 35.5463 13.7837C38.398 16.4616 40 20.0935 40 23.8805H35.6555C35.6555 21.1755 34.5112 18.5812 32.4743 16.6685C30.4374 14.7558 27.6748 13.6812 24.7942 13.6812V9.60155Z"
              fill="black"
            ></path>
          </svg>
          <p className="text-[32px] font-medium text-center text-black">
            Поставување на вашиот телефон
          </p>
          <div className="flex flex-col gap-[10px] items-start mt-[46px]">
            <p className="text-2xl text-center text-black">
              Внесете го вашиот телефонски број
            </p>
            <div className="relative">
              <div className="w-[102px] h-[72px] flex gap-[7px] justify-center items-center bg-[#d9d9d9] border border-[#636363] absolute">
                <svg
                  width="46"
                  height="29"
                  viewBox="0 0 46 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[46px] h-[28.89px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M44.2341 1.10889L40.8889 1.11111L38.9722 0H25.5556L23 1.11111L20.4444 0H7.02778L5.11111 1.11111L1.76589 1.10889C1.2135 1.5221 0.769879 2.03387 0.465173 2.60943C0.160466 3.18498 0.00181478 3.81083 0 4.44444L0 11.6667L1.27778 14.4444L0 17.2222V24.4444C0 25.7811 0.692556 26.9656 1.76589 27.78L5.11111 27.7778L7.02778 28.8889H20.4444L23 27.7778L25.5556 28.8889H38.9722L40.8889 27.7778L44.2341 27.78C44.7865 27.3668 45.2301 26.855 45.5348 26.2795C45.8395 25.7039 45.9982 25.0781 46 24.4444V17.2222L44.7222 14.4444L46 11.6667V4.44444C45.9982 3.81083 45.8395 3.18498 45.5348 2.60943C45.2301 2.03387 44.7865 1.5221 44.2341 1.10889Z"
                    fill="#D20000"
                  ></path>
                  <path
                    d="M46 17.2222V11.6667L28.5187 13.7778C28.3971 12.9929 28.0553 12.2462 27.5233 11.6033L44.2507 1.09778C43.3208 0.388721 42.1257 -0.00152922 40.8889 4.5036e-06H38.9722L26.6251 10.7678C25.7644 10.1247 24.6976 9.72679 23.5686 9.62778L25.5556 4.5036e-06H20.4444L22.4314 9.62778C21.3023 9.72657 20.2354 10.1245 19.3749 10.7678L7.02778 4.5036e-06H5.11111C3.87395 -0.00139206 2.67851 0.388823 1.748 1.09778L18.4767 11.6033C17.9447 12.2462 17.6029 12.9929 17.4813 13.7778L0 11.6667V17.2222L17.4813 15.1111C17.6103 15.9156 17.9528 16.6567 18.4767 17.2856L1.748 27.7911L1.74928 27.7922C2.67946 28.5008 3.8745 28.8906 5.11111 28.8889H7.02778L19.3749 18.1211C20.2356 18.7642 21.3024 19.1621 22.4314 19.2611L20.4444 28.8889H25.5556L23.5686 19.2611C24.6977 19.1623 25.7646 18.7644 26.6251 18.1211L38.9722 28.8889H40.8889C42.1261 28.8905 43.3216 28.5002 44.252 27.7911L27.5233 17.2856C28.0472 16.6567 28.3897 15.9156 28.5187 15.1111L46 17.2222Z"
                    fill="#FFE600"
                  ></path>
                  <path
                    d="M23 9C19.8296 9 17.25 11.4675 17.25 14.5C17.25 17.5325 19.8296 20 23 20C26.1704 20 28.75 17.5325 28.75 14.5C28.75 11.4675 26.1704 9 23 9ZM23 18.7154C20.57 18.7154 18.593 16.8243 18.593 14.5C18.593 12.1757 20.57 10.2846 23 10.2846C25.43 10.2846 27.407 12.1757 27.407 14.5C27.407 16.8243 25.43 18.7154 23 18.7154Z"
                    fill="#D20000"
                  ></path>
                </svg>
                <svg
                  width="19"
                  height="12"
                  viewBox="0 0 19 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M9.14067 7.9846L9.5 8.35598L9.85933 7.9846L16.8892 0.719058L18.3043 2.18154L9.5 11.2809L0.695733 2.18154L2.11078 0.719058L9.14067 7.9846Z"
                    fill="black"
                    stroke="#636363"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                className="w-[772px] h-[72px] pl-[115px] bg-[#f4f4f4] border border-[#636363] text-2xl text-[#000]"
                placeholder="+389 77 777 777"
              />
            </div>
          </div>
          <div className="mt-[67px] flex flex-col gap-[10px]">
            <p className="text-2xl text-black">
              Селектирај која било опција за да добиете код
            </p>
            <div className="w-full bg-[#f4f4f4] border border-[#636363]">
              <div className="flex items-center gap-[55px] p-[32px]">
                <svg
                  width="62"
                  height="49"
                  viewBox="0 0 62 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[61.78px] h-[49px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 18.1094V42.8224C0 44.461 0.650922 46.0325 1.80957 47.1911C2.96822 48.3498 4.53968 49.0007 6.17826 49.0007H55.6044C57.2429 49.0007 58.8144 48.3498 59.973 47.1911C61.1317 46.0325 61.7826 44.461 61.7826 42.8224V18.1094L30.8913 30.4659L0 18.1094Z"
                    fill="#01A180"
                  ></path>
                  <path
                    d="M6.17826 0C4.53968 0 2.96822 0.64531 1.80957 1.79397C0.650922 2.94263 0 4.50055 0 6.125L0 12.25L30.8913 24.5L61.7826 12.25V6.125C61.7826 4.50055 61.1317 2.94263 59.973 1.79397C58.8144 0.64531 57.2429 0 55.6044 0H6.17826Z"
                    fill="#01A180"
                  ></path>
                </svg>
                <div>
                  <p className="text-[32px] font-bold text-black">Е-маил</p>
                  <p className="text-2xl text-black">Примање код преку мејл</p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={handleThirdPopUp}
            className="w-full flex items-center justify-center mt-[60px] cursor-pointer"
          >
            <svg
              width="152"
              height="152"
              viewBox="0 0 152 152"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[152px] h-[152px]"
              preserveAspectRatio="none"
            >
              <circle cx="76" cy="76" r="76" fill="#01A180"></circle>
              <path
                d="M42.1061 82.0232L50.768 73.235L62.5623 85.2367L63.6311 86.3243L64.701 85.2377L101.231 48.1374L109.894 56.9266L63.6321 103.863L42.1061 82.0232Z"
                fill="white"
                stroke="#01A180"
                stroke-width="3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div
        className={`bg-[#000] w-full h-screen items-center justify-center bg-opacity-50 ${
          thirdPopUpState ? "flex" : "hidden"
        }`}
      >
        <div className="flex flex-col justify-center items-center w-[1077px] h-[904px] pt-[83px] pb-[70px] pl-[149px] pr-[156px] rounded-[62px] bg-[#f0f0f0] relative">
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="absolute top-[43px] left-[61px]"
          >
            <path
              d="M3.07158 11.6414L1.53579 13.0836L0 11.6414L1.53579 10.1992L3.07158 11.6414ZM40 27.9602C40 28.5012 39.7711 29.02 39.3638 29.4025C38.9564 29.7851 38.4039 30 37.8277 30C37.2516 30 36.6991 29.7851 36.2917 29.4025C35.8843 29.02 35.6555 28.5012 35.6555 27.9602H40ZM12.3971 23.2828L1.53579 13.0836L4.60736 10.1992L15.4687 20.3984L12.3971 23.2828ZM1.53579 10.1992L12.3971 0L15.4687 2.88434L4.60736 13.0836L1.53579 10.1992ZM3.07158 9.60155H24.7942V13.6812H3.07158V9.60155ZM40 23.8805V27.9602H35.6555V23.8805H40ZM24.7942 9.60155C28.827 9.60155 32.6947 11.1059 35.5463 13.7837C38.398 16.4616 40 20.0935 40 23.8805H35.6555C35.6555 21.1755 34.5112 18.5812 32.4743 16.6685C30.4374 14.7558 27.6748 13.6812 24.7942 13.6812V9.60155Z"
              fill="black"
            ></path>
          </svg>
          <p className="w-[480px] text-center text-black">
            <span className="w-[480px] text-[32px] font-medium text-center text-black">
              Здраво, Емилија!
            </span>
            <br />
            <br />
            <span className="w-[480px] text-2xl text-center text-black">
              Потребна е автентикација за пристап до вашата сметка!
            </span>
            <br />
          </p>
          <p className="text-[32px] text-center text-black my-[40px]">{formatTimeLeft()}</p>
          <div className="flex gap-[25px]">
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
            <input maxLength={1} className="flex items-center justify-center w-[118px] h-[180px] rounded-[15px] bg-[#f4f4f4] border-2 border-[#636363] text-[70px] text-center text-black">
            </input>
          </div>
          <div className="flex gap-[5px] mt-[30px] items-center">
            <svg
              width="38"
              height="26"
              viewBox="0 0 38 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[38px] h-[26px]"
              preserveAspectRatio="none"
            >
              <path
                d="M19 7.8C17.6257 7.8 16.3077 8.34785 15.3359 9.32304C14.3641 10.2982 13.8182 11.6209 13.8182 13C13.8182 14.3791 14.3641 15.7018 15.3359 16.677C16.3077 17.6521 17.6257 18.2 19 18.2C20.3743 18.2 21.6923 17.6521 22.6641 16.677C23.6359 15.7018 24.1818 14.3791 24.1818 13C24.1818 11.6209 23.6359 10.2982 22.6641 9.32304C21.6923 8.34785 20.3743 7.8 19 7.8ZM19 21.6667C16.7095 21.6667 14.5128 20.7536 12.8932 19.1283C11.2735 17.5029 10.3636 15.2985 10.3636 13C10.3636 10.7015 11.2735 8.49706 12.8932 6.87174C14.5128 5.24643 16.7095 4.33333 19 4.33333C21.2905 4.33333 23.4872 5.24643 25.1068 6.87174C26.7265 8.49706 27.6364 10.7015 27.6364 13C27.6364 15.2985 26.7265 17.5029 25.1068 19.1283C23.4872 20.7536 21.2905 21.6667 19 21.6667ZM19 0C10.3636 0 2.98818 5.39067 0 13C2.98818 20.6093 10.3636 26 19 26C27.6364 26 35.0118 20.6093 38 13C35.0118 5.39067 27.6364 0 19 0Z"
                fill="black"
              ></path>
            </svg>
            <p className="text-2xl text-center text-black">Види код</p>
          </div>
          <svg
            width="152"
            height="152"
            viewBox="0 0 152 152"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[152px] h-[152px] mt-[43px] cursor-pointer "
            onClick={handleFourPopUp}
            preserveAspectRatio="none"
          >
            <circle cx="76" cy="76" r="76" fill="#01A180"></circle>
            <path
              d="M42.1061 82.0232L50.768 73.235L62.5623 85.2367L63.6311 86.3243L64.701 85.2377L101.231 48.1374L109.894 56.9266L63.6321 103.863L42.1061 82.0232Z"
              fill="white"
              stroke="#01A180"
              stroke-width="3"
            ></path>
          </svg>
          <p className="text-2xl text-center text-[#6b6b6b] mt-[23px]">
            Дали ви е потребна помош?
          </p>
        </div>
      </div>
      <div className={`bg-[#000] w-full h-screen items-center justify-center bg-opacity-50 ${fourPopUpState ? "flex" : "hidden"}`}>
      {/* on click refresh page */}
      <div onClick={() => window.location.reload()} className="w-[1077px] h-[904px] rounded-[62px] bg-white relative DSADASDSAFASFA">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-[81px] right-[104px]"
        >
          <path
            d="M19.5786 17.5581C19.8469 17.8263 19.9976 18.1902 19.9976 18.5696C19.9976 18.9489 19.8469 19.3128 19.5786 19.581C19.3104 19.8493 18.9465 20 18.5671 20C18.1877 20 17.8238 19.8493 17.5556 19.581L10 12.0235L2.44206 19.5787C2.17378 19.8469 1.80992 19.9976 1.43052 19.9976C1.05113 19.9976 0.687267 19.8469 0.418991 19.5787C0.150716 19.3104 3.99761e-09 18.9466 0 18.5672C-3.99762e-09 18.1878 0.150716 17.824 0.418991 17.5557L7.97693 10.0006L0.421371 2.4431C0.153095 2.17484 0.00238013 1.81101 0.00238013 1.43163C0.00238014 1.05225 0.153095 0.688415 0.421371 0.420156C0.689646 0.151897 1.05351 0.00118977 1.4329 0.00118977C1.8123 0.00118977 2.17616 0.151897 2.44444 0.420156L10 7.97765L17.5579 0.418966C17.8262 0.150706 18.1901 -6.32041e-09 18.5695 0C18.9489 6.32041e-09 19.3127 0.150706 19.581 0.418966C19.8493 0.687225 20 1.05106 20 1.43044C20 1.80982 19.8493 2.17365 19.581 2.44191L12.0231 10.0006L19.5786 17.5581Z"
            fill="black"
          ></path>
        </svg>
        <p className="text-[40px] font-bold text-center text-black absolute top-[550px] left-[432px]">
          Честитки!
        </p>
        <div className="absolute top-[608px] left-[338px] flex gap-[21px]">
          <svg
            width="31"
            height="31"
            viewBox="0 0 31 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[31px] h-[31px]"
            preserveAspectRatio="none"
          >
            <circle cx="15.5" cy="15.5" r="15.5" fill="#01A180"></circle>
            <path
              d="M9.10613 16.0058L9.69081 15.4126L11.8382 17.5977L12.907 18.6853L13.9769 17.5987L22.3082 9.1374L22.8939 9.73166L12.908 19.8632L9.10613 16.0058Z"
              fill="white"
              stroke="white"
              stroke-width="3"
            ></path>
          </svg>
          <p className="text-2xl text-center text-black">
            Верифицирани на 20.06.2024
          </p>
        </div>
      </div>
    </div>

      <div className={`w-full flex`}>
        <div className="flex w-full flex-col lg:flex px-[18px] py-[18px] lg:w-[50%] lg:pl-[57px] lg:pt-[42px]">
          <Link to={"/LandingPage"}>
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
          <svg
            width="12"
            height="21"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            className="flex lg:hidden"
          >
            <path
              d="M11.5411 0.462242C11.8349 0.758305 12 1.1598 12 1.57843C12 1.99707 11.8349 2.39856 11.5411 2.69462L3.78308 10.5095L11.5411 18.3244C11.8266 18.6222 11.9846 19.021 11.981 19.4349C11.9774 19.8489 11.8126 20.2449 11.522 20.5376C11.2314 20.8303 10.8383 20.9963 10.4274 20.9999C10.0165 21.0035 9.62058 20.8444 9.32499 20.5568L0.458878 11.6257C0.165059 11.3297 0 10.9282 0 10.5095C0 10.0909 0.165059 9.6894 0.458878 9.39334L9.32499 0.462242C9.6189 0.166269 10.0175 0 10.4331 0C10.8486 0 11.2472 0.166269 11.5411 0.462242Z"
              fill="black"
            ></path>
          </svg>
          <div className="flex flex-col items-center w-full">
            <div className="w-[247px] h-[247px]">
              <img
                src={require(`../../images/zelenkapa1.png`)}
                className="w-full h-full"
                alt="Logo"
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 p-4 bg-red-100 rounded-lg border border-red-400 mb-4">
                <strong>Error:</strong> {errorMessage}
              </div>
            )}
            <form
              onSubmit={onSumbmitHandler}
              action="submit"
              className="w-full flex flex-col gap-[27px] mb-[28px]"
            >
              <div className="flex flex-col gap-[11px]">
                <div className="flex flex-col">
                  <div className="relative">
                    <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                      <p className="text-xs lg:text-3xl text-black">Е-маил</p>
                    </div>
                    <div className="h-[28px]"></div>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="w-full h-[56.3px] lg:w-full lg:h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[5%] text-[30px]"
                    />
                  </div>
                  <div className="relative">
                    <div className="ml-[32px] gap-2.5 p-2.5 bg-[#fff] absolute">
                      <p className="text-xs lg:text-3xl text-black">Лозинка</p>
                    </div>
                    <div className="h-[28px]"></div>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="********"
                      required
                      className="w-full h-[56.3px] lg:w-full lg:h-20 rounded-[20px] border-2 border-[#5b5b5b] pl-[5%] text-[30px]"
                    />
                  </div>
                </div>
                <p className="text-xs text-black lg:text-lg font-semibold text-left lg:text-black lg:font-normal font-['Helvetica'] underline w-fit">
                  Заборави лозинка?
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[27px]">
                <button
                  typeof="submit"
                  className="w-[172px] h-[46px] lg:w-auto lg:h-auto text-lg font-semibold flex justify-center items-center rounded-[50px] border-2 border-[#d6d6d6] bg-[#3ca082] lg:px-[130px] lg:py-[22px] lg:text-[25px] lg:font-bold text-neutral-100"
                >
                  Најави се
                </button>
                <p className="text-2xl">
                  <span className="text-xs lg:text-2xl text-black">
                    Немаш профил?{" "}
                  </span>
                  {/* a tag do register */}
                  <Link
                    to={"/Register"}
                    className="text-xs lg:text-2xl text-[#3ca082] cursor-pointer"
                  >
                    Регистрирај се овде.
                  </Link>
                  {/* end a tag */}
                </p>
              </div>
            </form>
            <p className="hidden lg:flex text-2xl text-left text-black mb-[32px]">
              или
            </p>
            <div className="flex flex-col gap-[11px] mb-[55px] w-[80%] lg:w-fit">
              <button
                onClick={handleGoogleLogin}
                className="w-full h-12 lg:w-[550px] lg:h-[70px] flex justify-center items-center gap-[20px] rounded-[20px] border border-black text-xs lg:text-[22px] text-black"
              >
                <svg
                  width="31"
                  height="31"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="hidden lg:flex"
                >
                  <path
                    d="M30.7252 12.7067C30.9098 13.747 31.0017 14.801 31 15.857C31 20.5727 29.2804 24.5599 26.2879 27.2588H26.2919C23.6749 29.6283 20.0776 31 15.8123 31C11.6186 31 7.59669 29.367 4.63131 26.4603C1.66593 23.5536 0 19.6112 0 15.5005C0 11.3897 1.66593 7.44736 4.63131 4.54064C7.59669 1.63391 11.6186 0.000926102 15.8123 0.000926102C19.7371 -0.0419184 23.5271 1.40328 26.3907 4.03468L21.8763 8.4598C20.2441 6.93552 18.0664 6.1006 15.8123 6.13487C11.6873 6.13487 8.18285 8.86279 6.93368 12.5362C6.27252 14.4612 6.27252 16.5455 6.93368 18.4706H6.93961C8.19471 22.1381 11.6932 24.8661 15.8182 24.8661C17.9489 24.8661 19.7792 24.3313 21.1983 23.3859H21.1924C22.0166 22.8509 22.7216 22.1577 23.2648 21.3482C23.808 20.5387 24.1782 19.6296 24.3529 18.6759H15.8123V12.7086L30.7252 12.7067Z"
                    fill="black"
                  ></path>
                </svg>
                <svg
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="flex lg:hidden"
                >
                  <path
                    d="M12.8848 5.7385C12.9622 6.20831 13.0007 6.68434 13 7.1612C13 9.29089 12.2789 11.0916 11.024 12.3104H11.0256C9.9282 13.3805 8.41966 14 6.63096 14C4.87232 14 3.18571 13.2625 1.94216 11.9498C0.698617 10.6371 0 8.85667 0 7.00021C0 5.14375 0.698617 3.36332 1.94216 2.05061C3.18571 0.737894 4.87232 0.00041824 6.63096 0.00041824C8.27687 -0.0189309 9.86622 0.633739 11.0671 1.82211L9.17393 3.82055C8.48945 3.13217 7.57623 2.75511 6.63096 2.77059C4.90111 2.77059 3.43152 4.00255 2.90767 5.6615C2.63041 6.53087 2.63041 7.47217 2.90767 8.34154H2.91016C3.43649 9.99787 4.90359 11.2298 6.63344 11.2298C7.52696 11.2298 8.2945 10.9883 8.88963 10.5614H8.88714C9.23277 10.3198 9.52841 10.0067 9.75621 9.64113C9.98401 9.27553 10.1392 8.86499 10.2125 8.43429H6.63096V5.73937L12.8848 5.7385Z"
                    fill="black"
                  ></path>
                </svg>
                Логирај се преку G-mail
              </button>
              <button className="w-full h-12 lg:w-[550px] lg:h-[70px] flex justify-center items-center gap-[20px] rounded-[20px] border border-black text-xs lg:text-[22px] text-black">
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="hidden lg:flex"
                >
                  <path
                    d="M12.2778 0V12.2778H0V0H12.2778ZM12.2778 26H0V13.7222H12.2778V26ZM13.7222 0H26V12.2778H13.7222V0ZM26 13.7222V26H13.7222V13.7222H26Z"
                    fill="black"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="flex lg:hidden"
                >
                  <path
                    d="M7.08333 0V6.61111H0V0H7.08333ZM7.08333 14H0V7.38889H7.08333V14ZM7.91667 0H15V6.61111H7.91667V0ZM15 7.38889V14H7.91667V7.38889H15Z"
                    fill="black"
                  ></path>
                </svg>
                Логирај се преку Microsoft
              </button>
              <button
                onClick={handlePopUp}
                className="w-full h-12 lg:w-[550px] lg:h-[70px] flex justify-center items-center gap-[20px] rounded-[20px] border border-black text-xs lg:text-[22px] text-black"
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden lg:flex"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M26 13C25.9993 9.5524 24.6294 6.2462 22.1916 3.80837C19.7538 1.37055 16.4476 0.000689314 13 0V2.6C15.0567 2.60047 17.0672 3.21053 18.7773 4.3531C20.4875 5.49567 21.8206 7.11949 22.6083 9.0194C23.1311 10.2814 23.4001 11.634 23.4 13H26ZM0 10.4V3.9C0 3.55522 0.136964 3.22456 0.380761 2.98076C0.624558 2.73696 0.955218 2.6 1.3 2.6H7.8C8.14478 2.6 8.47544 2.73696 8.71924 2.98076C8.96304 3.22456 9.1 3.55522 9.1 3.9V9.1C9.1 9.44478 8.96304 9.77544 8.71924 10.0192C8.47544 10.263 8.14478 10.4 7.8 10.4H5.2C5.2 13.1583 6.29571 15.8035 8.24609 17.7539C10.1965 19.7043 12.8417 20.8 15.6 20.8V18.2C15.6 17.8552 15.737 17.5246 15.9808 17.2808C16.2246 17.037 16.5552 16.9 16.9 16.9H22.1C22.4448 16.9 22.7754 17.037 23.0192 17.2808C23.263 17.5246 23.4 17.8552 23.4 18.2V24.7C23.4 25.0448 23.263 25.3754 23.0192 25.6192C22.7754 25.863 22.4448 26 22.1 26H15.6C6.9849 26 0 19.0151 0 10.4Z"
                    fill="black"
                  ></path>
                  <path
                    d="M20.2059 10.0144C20.5983 10.9606 20.8002 11.9749 20.8 12.9992H18.46C18.4602 12.2822 18.3191 11.5721 18.0447 10.9096C17.7704 10.2471 17.3682 9.64508 16.8612 9.13804C16.3541 8.63099 15.7522 8.22882 15.0897 7.95449C14.4271 7.68016 13.7171 7.53905 13 7.53922V5.19922C14.5426 5.1993 16.0506 5.65682 17.3333 6.51391C18.6159 7.37101 19.6156 8.58919 20.2059 10.0144Z"
                    fill="black"
                  ></path>
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  className="flex lg:hidden"
                >
                  <path
                    d="M16 8C15.9996 5.8784 15.1566 3.84381 13.6564 2.34361C12.1562 0.843415 10.1216 0.000424193 8 0V1.6C9.26568 1.60029 10.5029 1.97571 11.5553 2.67883C12.6077 3.38195 13.4281 4.38122 13.9128 5.5504C14.2345 6.32701 14.4 7.15939 14.4 8H16ZM0 6.4V2.4C0 2.18783 0.0842854 1.98434 0.234315 1.83431C0.384344 1.68429 0.587827 1.6 0.8 1.6H4.8C5.01217 1.6 5.21566 1.68429 5.36569 1.83431C5.51571 1.98434 5.6 2.18783 5.6 2.4V5.6C5.6 5.81217 5.51571 6.01566 5.36569 6.16569C5.21566 6.31571 5.01217 6.4 4.8 6.4H3.2C3.2 8.09739 3.87428 9.72525 5.07452 10.9255C6.27475 12.1257 7.90261 12.8 9.6 12.8V11.2C9.6 10.9878 9.68429 10.7843 9.83432 10.6343C9.98434 10.4843 10.1878 10.4 10.4 10.4H13.6C13.8122 10.4 14.0157 10.4843 14.1657 10.6343C14.3157 10.7843 14.4 10.9878 14.4 11.2V15.2C14.4 15.4122 14.3157 15.6157 14.1657 15.7657C14.0157 15.9157 13.8122 16 13.6 16H9.6C4.2984 16 0 11.7016 0 6.4Z"
                    fill="black"
                  ></path>
                </svg>
                Логирај се преку телефон
              </button>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center h-screen m-auto">
          <img src={require(`../../images/signincrop.png`)} alt="Logo" />
        </div>
      </div>
    </>
  );
};
