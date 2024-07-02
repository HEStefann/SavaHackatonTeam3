import { useEffect, useState } from "react";
import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";
import TopNav from "../../components/TopNav/TopNav";
import { Damages2 } from "./Damages2";
import { Damages3 } from "./Damages3";

type DamageProps = {
  policy: {
    policy_number: string;
  };
};

export const Damages = () => {
  const [allDamages, setAllDamages] = useState<DamageProps[]>([]);
  const [selectedDamage, setSelectedDamage] = useState<string>("none");

  const damagesApi = `https://e5e3-77-28-131-181.ngrok-free.app/api/damages`;

  useEffect(() => {
    fetch(damagesApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllDamages(data.data);
        console.log(data.data);
      })
      .catch((error) => {
        console.error("Error fetching policies:", error);
      });
  }, []);

  const renderSelectedDamageComponent = () => {
    if (selectedDamage === "example1") {
      return <Damages2 title="PO-96132770" />;
    } else if (selectedDamage === "example2") {
      return <Damages3 title="PO-57386187" />;
    } else {
      return (
        <div className="w-[100%] h-96 border-2 border-[#01A180] rounded-3xl"></div>
      );
    }
  };

  return (
    <div className="flex">
      <ProfileNavbar />
      <div className="w-[100%] bg-[#d9d9d9]">
        <TopNav />
        <div className="flex justify-center content-center py-3">
          <div className="bg-white w-[95%] p-6 rounded-3xl">
            <div className="rounded-[24px] overflow-hidden">
              <div className="bg-[#01A180] text-center p-3 text-white text-3xl font-bold">
                Штети
              </div>

              <div className="py-6 flex justify-between">
                <div className="border border-[#01A180] text-black px-32 py-2 rounded-xl">
                  Сите
                </div>
                <div className="bg-[#01A180] text-white px-8 py-2 rounded-xl flex justify-between gap-3">
                  <div className="flex">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2.5">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0"
                        preserveAspectRatio="none"
                      >
                        <circle cx={12} cy={12} r={12} fill="white" />
                      </svg>
                      <svg
                        width={16}
                        height={14}
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M14.8571 5.5H9.71429V1C9.71429 0.447812 9.2025 0 8.57143 0H7.42857C6.7975 0 6.28571 0.447812 6.28571 1V5.5H1.14286C0.511786 5.5 0 5.94781 0 6.5V7.5C0 8.05219 0.511786 8.5 1.14286 8.5H6.28571V13C6.28571 13.5522 6.7975 14 7.42857 14H8.57143C9.2025 14 9.71429 13.5522 9.71429 13V8.5H14.8571C15.4882 8.5 16 8.05219 16 7.5V6.5C16 5.94781 15.4882 5.5 14.8571 5.5Z"
                          fill="#01A180"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex">Пријави штета</div>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex flex-col space-y-5 pl-5 w-[20%]">
                  <p className="w-[276px] text-[32px] font-semibold text-left text-[#01a180]">
                    Пријавени штети
                  </p>
                  {allDamages.map((el, index) => (
                    <button
                      key={el.policy.policy_number}
                      onClick={() =>
                        setSelectedDamage(index === 0 ? "example1" : "example2")
                      }
                    >
                      <div className="flex flex-col justify-start items-start relative gap-2.5">
                        <svg
                          width={240}
                          height={52}
                          viewBox="0 0 240 52"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex-grow-0 flex-shrink-0"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M1 16C1 7.71573 7.71573 1 16 1H224C232.284 1 239 7.71573 239 16V36C239 44.2843 232.284 51 224 51H16C7.71573 51 1 44.2843 1 36V16Z"
                            fill="#C3DCD7"
                            stroke="#C3DCD7"
                            strokeWidth={2}
                          />
                        </svg>
                        <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 absolute left-[35px] top-3.5 gap-[37px]">
                          <p className="flex-grow-0 flex-shrink-0 text-lg font-medium text-left text-black">
                            {el.policy.policy_number}
                          </p>
                          <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M5.00038 3.00057L5.00038 21.0006C5.00095 21.1828 5.05122 21.3614 5.14576 21.5172C5.2403 21.673 5.37555 21.8001 5.53693 21.8848C5.69832 21.9694 5.87974 22.0085 6.06167 21.9977C6.24359 21.9869 6.41913 21.9267 6.56938 21.8236L19.5694 12.8236C20.1084 12.4506 20.1084 11.5526 19.5694 11.1786L6.56938 2.17857C6.41944 2.0744 6.24381 2.01331 6.06159 2.00194C5.87936 1.99057 5.6975 2.02936 5.53578 2.11409C5.37405 2.19882 5.23863 2.32625 5.14424 2.48254C5.04985 2.63883 5.0001 2.81799 5.00038 3.00057Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
                <div className="w-[80%]">{renderSelectedDamageComponent()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
