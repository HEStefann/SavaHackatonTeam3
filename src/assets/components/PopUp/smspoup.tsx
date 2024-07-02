export const smspoup = () => {
  return (
    <div className="flex bg-[#000] w-full h-screen items-center justify-center bg-opacity-50">
      <div className="rounded-[62px] bg-[#f0f0f0] px-[177px] pb-[138px] relative flex flex-col items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute right-[92px] top-[63px]"
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
          <img src={require(`../../images/phone2.png`).default} alt="" />
        </div>
        <div className="flex flex-col gap-[35px]">
          <p className="w-[707px] text-[25px] text-center text-black">
            Секогаш кога ќе се најавите, ќе користите лозинка и СМС код за
            потврда.
          </p>
          <button className="flex justify-center items-center px-[130px] py-[22px] rounded-[50px] bg-[#3ca082] border-2 border-[#d6d6d6] text-[25px] font-semibold text-neutral-100">
            Започни
          </button>
        </div>
      </div>
    </div>
  );
};
