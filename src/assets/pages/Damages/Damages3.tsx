interface DamageProps {
  title: string;
}

export const Damages3: React.FC<DamageProps> = ({ title }) => {
  return (
    <div className="w-[100%]">
      <div className="w-auto pb-24 border-2 border-[#01A180] rounded-3xl">
        <div className="w-auto h-[88px] rounded-tr-3xl rounded-tl-2xl bg-gradient-to-r from-[#01a180] to-white">
          <div className="w-52 ml-10 flex justify-center items-center gap-2 p-2 border-t-0 border-r-0 border-b border-l-0 border-white">
            <p className="flex-grow-0 flex-shrink-0 text-[32px] font-medium  text-white">
              {title}
            </p>
          </div>
        </div>

        <div className="flex pl-40 pt-32">
          <svg
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            preserveAspectRatio="none"
          >
            <circle cx={32} cy={32} r={32} fill="#01A180" />
            <path
              d="M20.334 33.666L27.0007 40.3327L43.6673 23.666"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex  items-center">
            <div className="w-[162px] h-1 bg-[#01a180]" />
          </div>

          <svg
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            preserveAspectRatio="none"
          >
            <circle cx={32} cy={32} r={32} fill="#01A180" />
            <path
              d="M20.334 33.666L27.0007 40.3327L43.6673 23.666"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <div className="flex   items-center">
            <div className="w-[165px] h-1 bg-gradient-to-r from-[#01a180] to-red-500" />
          </div>

          <svg
            width={64}
            height={64}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16"
            preserveAspectRatio="none"
          >
            <circle cx={32} cy={32} r={32} fill="#EF4444" />
            <path
              d="M24 24 L40 40 M24 40 L40 24"
              stroke="white"
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="flex pl-36 gap-32 pt-5">
          <p className="text-lg font-semibold text-left text-[#01a180]">
            Пријавена
          </p>
          <p className="pl text-lg font-semibold text-left text-[#01a180]">
            Во процес
          </p>
          <p className=" text-lg font-semibold text-left text-[#01a180]">
            Одбиена
          </p>
        </div>
      </div>
    </div>
  );
};
