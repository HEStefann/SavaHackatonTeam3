import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <div className="w-full h-screen relative">
      <img
        src={require("../../images/lp.png")}
        alt=""
        className="w-full h-full absolute z-[-1]"
      />
      <div className="pt-[42px] pl-[57px]">
        <Link to={"/"}>
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M3.07158 11.6414L1.53579 13.0836L0 11.6414L1.53579 10.1992L3.07158 11.6414ZM40 27.9602C40 28.5012 39.7711 29.02 39.3638 29.4025C38.9564 29.7851 38.4039 30 37.8277 30C37.2516 30 36.6991 29.7851 36.2917 29.4025C35.8843 29.02 35.6555 28.5012 35.6555 27.9602H40ZM12.3971 23.2828L1.53579 13.0836L4.60736 10.1992L15.4687 20.3984L12.3971 23.2828ZM1.53579 10.1992L12.3971 0L15.4687 2.88434L4.60736 13.0836L1.53579 10.1992ZM3.07158 9.60155H24.7942V13.6812H3.07158V9.60155ZM40 23.8805V27.9602H35.6555V23.8805H40ZM24.7942 9.60155C28.827 9.60155 32.6947 11.1059 35.5463 13.7837C38.398 16.4616 40 20.0935 40 23.8805H35.6555C35.6555 21.1755 34.5112 18.5812 32.4743 16.6685C30.4374 14.7558 27.6748 13.6812 24.7942 13.6812V9.60155Z"
              fill="black"
            ></path>
          </svg>
        </Link>
        <Link
          to={"/SignIn"}
          className="flex w-[379px] h-[74px] justify-center absolute top-[663px] left-[480px] items-center rounded-[50px] bg-[#3ca082] border-2 border-[#d6d6d6] text-2xl font-semibold text-neutral-100"
        >
          Најави се
        </Link>
        <Link
          to={"/Register"}
          className="flex w-[379px] h-[74px] justify-center absolute top-[773px] left-[480px] items-center rounded-[50px] bg-[#3ca082] border-2 border-[#d6d6d6] text-2xl font-semibold text-neutral-100"
        >
          Регистрирај се
        </Link>
      </div>
    </div>
  );
};
