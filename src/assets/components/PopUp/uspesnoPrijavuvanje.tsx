export const uspesnoPrijavuvanje = () => {
  return (
    <div className="flex bg-[#000] w-full h-screen items-center justify-center bg-opacity-50">
      <div className="w-[736px] h-[556px] rounded-[62px] bg-white relative flex flex-col items-center">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute top-[74px] right-[88px]"
        >
          <path
            d="M19.5786 17.5581C19.8469 17.8263 19.9976 18.1902 19.9976 18.5696C19.9976 18.9489 19.8469 19.3128 19.5786 19.581C19.3104 19.8493 18.9465 20 18.5671 20C18.1877 20 17.8238 19.8493 17.5556 19.581L10 12.0235L2.44206 19.5787C2.17378 19.8469 1.80992 19.9976 1.43052 19.9976C1.05113 19.9976 0.687267 19.8469 0.418991 19.5787C0.150716 19.3104 3.99761e-09 18.9466 0 18.5672C-3.99762e-09 18.1878 0.150716 17.824 0.418991 17.5557L7.97693 10.0006L0.421371 2.4431C0.153095 2.17484 0.00238013 1.81101 0.00238013 1.43163C0.00238014 1.05225 0.153095 0.688415 0.421371 0.420156C0.689646 0.151897 1.05351 0.00118977 1.4329 0.00118977C1.8123 0.00118977 2.17616 0.151897 2.44444 0.420156L10 7.97765L17.5579 0.418966C17.8262 0.150706 18.1901 -6.32041e-09 18.5695 0C18.9489 6.32041e-09 19.3127 0.150706 19.581 0.418966C19.8493 0.687225 20 1.05106 20 1.43044C20 1.80982 19.8493 2.17365 19.581 2.44191L12.0231 10.0006L19.5786 17.5581Z"
            fill="black"
          ></path>
        </svg>
        <svg
          width="138"
          height="138"
          viewBox="0 0 138 138"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[138px] h-[138px] mt-[74px]"
          preserveAspectRatio="none"
        >
          <path
            d="M56.6321 99L33 75.0232L43.7696 64.0965L56.6321 77.1853L94.2304 39L105 49.9266L56.6321 99Z"
            fill="#01A180"
          ></path>
          <circle
            cx="69"
            cy="69"
            r="59"
            stroke="#01A180"
            stroke-width="20"
          ></circle>
        </svg>
        <div className="flex flex-col mt-[21px] justify-start items-center gap-2.5">
          <div className="flex flex-col justify-start items-center relative gap-5">
            <p className="text-3xl font-medium text-left text-black">
              Успешно пријавување!
            </p>
            <p className="w-[643px] text-2xl font-medium text-center text-[#797979]">
              <span className="w-[643px] text-2xl font-medium text-center text-[#797979]">
                Успешно се најавивте на Sava.{" "}
              </span>
              <br />
              <span className="w-[643px] text-2xl font-medium text-center text-[#797979]">
                Сега можете да управувате со вашите полиси, да поднесувате
                побарувања и да истражувате нови планови за осигурување.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
