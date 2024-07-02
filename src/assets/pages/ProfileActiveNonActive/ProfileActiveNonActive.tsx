import Calendar from "../../components/Calendar/Calendar";
import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";

export const ProfileActiveNonActive = () => {
  return (
    <div className="flex">
      <ProfileNavbar />
      <div className="w-full h-screen p-[40px] bg-[#e6e6e6]">
        {/* Mobile number */}
        <div className="flex gap-[18px] items-center">
          <svg
            width={37}
            height={37}
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[37px] h-[37px]"
            preserveAspectRatio="none"
          >
            <path
              d="M37 18.5C36.999 13.5938 35.0496 8.88882 31.5804 5.41961C28.1112 1.9504 23.4062 0.000980947 18.5 0V3.7C21.4269 3.70067 24.2879 4.56882 26.7216 6.19479C29.1553 7.82076 31.0524 10.1316 32.1734 12.8353C32.9173 14.6312 33.3001 16.5561 33.3 18.5H37ZM0 14.8V5.55C0 5.05935 0.19491 4.5888 0.541852 4.24185C0.888795 3.89491 1.35935 3.7 1.85 3.7H11.1C11.5907 3.7 12.0612 3.89491 12.4081 4.24185C12.7551 4.5888 12.95 5.05935 12.95 5.55V12.95C12.95 13.4407 12.7551 13.9112 12.4081 14.2581C12.0612 14.6051 11.5907 14.8 11.1 14.8H7.4C7.4 18.7252 8.95928 22.4896 11.7348 25.2652C14.5104 28.0407 18.2748 29.6 22.2 29.6V25.9C22.2 25.4093 22.3949 24.9388 22.7419 24.5919C23.0888 24.2449 23.5593 24.05 24.05 24.05H31.45C31.9407 24.05 32.4112 24.2449 32.7581 24.5919C33.1051 24.9388 33.3 25.4093 33.3 25.9V35.15C33.3 35.6407 33.1051 36.1112 32.7581 36.4581C32.4112 36.8051 31.9407 37 31.45 37H22.2C9.94005 37 0 27.0599 0 14.8Z"
              fill="#01A180"
            />
            <path
              d="M28.7545 14.2508C29.313 15.5973 29.6003 17.0407 29.6 18.4984H26.27C26.2702 17.478 26.0694 16.4675 25.679 15.5247C25.2886 14.5819 24.7163 13.7252 23.9948 13.0037C23.2732 12.2821 22.4165 11.7098 21.4737 11.3194C20.5309 10.929 19.5204 10.7282 18.5 10.7284V7.39844C20.6953 7.39855 22.8413 8.04963 24.6666 9.26934C26.4919 10.4891 27.9145 12.2226 28.7545 14.2508Z"
              fill="#01A180"
            />
          </svg>
          <p className="w-[142px] text-[22px] text-black">0800 80 000</p>
        </div>
        {/* End mobile number */}
        {/* search notifications languages */}
        <div className="flex gap-[13px] justify-end items-center">
          <input
            className="w-[490px] h-[53px] rounded-[220px] bg-white/[0.63] text-xl pl-[32px] text-[#676767]"
            placeholder="Пребрарувај"
          />
          <svg
            width={28}
            height={32}
            viewBox="0 0 28 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M10.8889 28.9524H17.1111C17.1111 30.6286 15.7111 32 14 32C12.2889 32 10.8889 30.6286 10.8889 28.9524ZM28 25.9048V27.4286H0V25.9048L3.11111 22.8571V13.7143C3.11111 8.99048 6.22222 4.87619 10.8889 3.50476V3.04762C10.8889 1.37143 12.2889 0 14 0C15.7111 0 17.1111 1.37143 17.1111 3.04762V3.50476C21.7778 4.87619 24.8889 8.99048 24.8889 13.7143V22.8571L28 25.9048ZM21.7778 13.7143C21.7778 9.44762 18.3556 6.09524 14 6.09524C9.64444 6.09524 6.22222 9.44762 6.22222 13.7143V24.381H21.7778V13.7143Z"
              fill="#01A180"
            />
          </svg>
          <svg
            width={32}
            height={32}
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M25.44 24.624C25.024 23.344 23.824 22.4 22.4 22.4H20.8V17.6C20.8 17.1757 20.6314 16.7687 20.3314 16.4686C20.0313 16.1686 19.6243 16 19.2 16H9.6V12.8H12.8C13.2243 12.8 13.6313 12.6314 13.9314 12.3314C14.2314 12.0313 14.4 11.6243 14.4 11.2V8H17.6C18.4487 8 19.2626 7.66286 19.8627 7.06274C20.4629 6.46263 20.8 5.64869 20.8 4.8V4.144C22.7144 4.91578 24.4132 6.13996 25.7511 7.71174C27.089 9.28351 28.0261 11.1561 28.4822 13.1691C28.9382 15.1822 28.8997 17.2758 28.3699 19.2707C27.8401 21.2657 26.8348 23.1025 25.44 24.624ZM14.4 28.688C8.08 27.904 3.2 22.528 3.2 16C3.2 15.008 3.328 14.048 3.536 13.136L11.2 20.8V22.4C11.2 23.2487 11.5371 24.0626 12.1373 24.6627C12.7374 25.2629 13.5513 25.6 14.4 25.6M16 0C13.8989 0 11.8183 0.413852 9.87706 1.21793C7.93586 2.022 6.17203 3.20055 4.68629 4.68629C1.68571 7.68687 0 11.7565 0 16C0 20.2435 1.68571 24.3131 4.68629 27.3137C6.17203 28.7994 7.93586 29.978 9.87706 30.7821C11.8183 31.5861 13.8989 32 16 32C20.2435 32 24.3131 30.3143 27.3137 27.3137C30.3143 24.3131 32 20.2435 32 16C32 13.8989 31.5861 11.8183 30.7821 9.87706C29.978 7.93586 28.7994 6.17203 27.3137 4.68629C25.828 3.20055 24.0641 2.022 22.1229 1.21793C20.1817 0.413852 18.1012 0 16 0Z"
              fill="#01A080"
            />
          </svg>
        </div>
        {/* end search notifications languages */}
        <div className="mt-[54px] flex gap-[7px]">
          {/* left main section */}
          <div className="p-[22px] rounded-[40px] bg-white w-[80%]">
            <div className="flex gap-[150px] justify-between">
              <div className="w-[50%]">
                <div className="flex items-center gap-[28px]">
                  <div className="">
                    <img
                      src={require(`../../images/ProfilePic.png`)}
                      alt="Profile"
                      className="w-[95px] h-[95px] rounded-[282px] object-cover"
                    />
                  </div>
                  <p className="text-2xl font-bold text-black">
                    Емилија Василева
                  </p>
                </div>
                <div className="flex justify-between items-center mt-[38px]">
                  <select
                    className="w-[200px] h-[29px] flex items-center justify-center text-center pr-[17px] rounded-[50px] bg-[#d9d9d9] text-[11px] text-black"
                    name="select"
                    id="select"
                  >
                    <option value="option1">Статистика на полиси</option>
                  </select>
                  <select
                    className="w-[97px] h-[29px] rounded-[50px] text-center bg-[#d9d9d9] text-[11px] text-black"
                    name="select2"
                    id="select2"
                  >
                    <option value="option2">Апр-Авг</option>
                  </select>
                </div>
                <div className="ml-[70px] mt-[50px]">
                  <img
                    className="w-full h-full object-cover pt-10"
                    src={require(`../../images/Group196.png`)}
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[5px] mt-[60px]">
                <div
                  className="w-[159px] px-[20px] py-[9px] flex flex-col gap-[5px] rounded-[15px]"
                  style={{
                    background:
                      "linear-gradient(46.29deg, rgba(242,242,242,0.5) 23.02%, #55d1b9 89.48%)",
                  }}
                >
                  <p className="text-[32px] font-bold text-[#01a180]">12</p>
                  <p className="text-base text-black">Завршени</p>
                </div>
                <div
                  className="w-[159px] px-[20px] py-[9px] flex flex-col gap-[5px] rounded-[15px]"
                  style={{
                    background:
                      "linear-gradient(46.29deg, rgba(242,242,242,0.5) 23.02%, #55d1b9 89.48%)",
                  }}
                >
                  <p className="text-[32px] font-bold text-[#01a180]">9</p>
                  <p className="text-base text-black">Претстојни</p>
                </div>
                <div
                  className="w-[159px] px-[20px] py-[9px] flex flex-col gap-[5px] rounded-[15px]"
                  style={{
                    background:
                      "linear-gradient(46.29deg, rgba(242,242,242,0.5) 23.02%, #55d1b9 89.48%)",
                  }}
                >
                  <p className="text-[32px] font-bold text-[#01a180]">8</p>
                  <p className="text-base text-black">Во тек</p>
                </div>
              </div>
            </div>
          </div>
          {/* end left main section */}
          {/* right main section */}
          <div className="rounded-[40px] pt-[50px] bg-white flex flex-col gap-[10px] w-[40%]">
            <div className="flex gap-[10px] justify-center h-[92px]">
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px]">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M43.5 23C43.5 34.3584 34.596 43.5 23.2 43.5C11.7473 43.5 2.5 34.3015 2.5 23C2.5 11.6985 11.7473 2.5 23.2 2.5C34.596 2.5 43.5 11.6416 43.5 23Z"
                        stroke="url(#paint0_linear_105_62)"
                        stroke-width={5}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_105_62"
                          x1="43.4312"
                          y1="0.00000265129"
                          x2="2.81876"
                          y2="46.2196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#9E9E9E" />
                          <stop offset="0.552704" stop-color="#839E99" />
                          <stop offset={1} stop-color="#01A180" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="pb-[18px]">
                      <p className="text-[25px] font-light text-black">2</p>
                      <p className="text-xs font-light text-black">
                        Активни полиси
                      </p>
                      <div className="flex gap-[4px] absolute right-10">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx={5}
                            cy={5}
                            r="4.5"
                            stroke="url(#paint0_linear_105_75)"
                            stroke-dasharray="1 1"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_105_75"
                              x1={5}
                              y1={0}
                              x2={5}
                              y2={10}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#01A180" />
                              <stop
                                offset={1}
                                stop-color="#6E6E6E"
                                stop-opacity="0.42"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="text-[8px] italic text-black">Во тек</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px] flex">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <div>
                      <img src={require(`../../images/1321.png`)} alt="1321" />
                    </div>
                    <div className="">
                      <p className="text-xs font-medium text-black">30 Јуни</p>
                      <p className="text-xs font-light text-black">
                        Следна уплата
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] justify-center h-[92px]">
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px]">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M43.5 23C43.5 34.3584 34.596 43.5 23.2 43.5C11.7473 43.5 2.5 34.3015 2.5 23C2.5 11.6985 11.7473 2.5 23.2 2.5C34.596 2.5 43.5 11.6416 43.5 23Z"
                        stroke="url(#paint0_linear_105_62)"
                        stroke-width={5}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_105_62"
                          x1="43.4312"
                          y1="0.00000265129"
                          x2="2.81876"
                          y2="46.2196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#9E9E9E" />
                          <stop offset="0.552704" stop-color="#839E99" />
                          <stop offset={1} stop-color="#01A180" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="pb-[18px]">
                      <p className="text-[25px] font-light text-black">2</p>
                      <p className="text-xs font-light text-black">
                        Активни полиси
                      </p>
                      <div className="flex gap-[4px] absolute right-10">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx={5}
                            cy={5}
                            r="4.5"
                            stroke="url(#paint0_linear_105_75)"
                            stroke-dasharray="1 1"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_105_75"
                              x1={5}
                              y1={0}
                              x2={5}
                              y2={10}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#01A180" />
                              <stop
                                offset={1}
                                stop-color="#6E6E6E"
                                stop-opacity="0.42"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="text-[8px] italic text-black">Во тек</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px] flex">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <div>
                      <img src={require(`../../images/1321.png`)} alt="1321" />
                    </div>
                    <div className="">
                      <p className="text-xs font-medium text-black">
                        PO-12345678
                      </p>
                      <p className="text-xs font-light text-black">
                        Полиса за плаќање
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] justify-center h-[92px]">
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px]">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <svg
                      width={50}
                      height={50}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <path
                        d="M43.5 23C43.5 34.3584 34.596 43.5 23.2 43.5C11.7473 43.5 2.5 34.3015 2.5 23C2.5 11.6985 11.7473 2.5 23.2 2.5C34.596 2.5 43.5 11.6416 43.5 23Z"
                        stroke="url(#paint0_linear_105_62)"
                        stroke-width={5}
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_105_62"
                          x1="43.4312"
                          y1="0.00000265129"
                          x2="2.81876"
                          y2="46.2196"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#9E9E9E" />
                          <stop offset="0.552704" stop-color="#839E99" />
                          <stop offset={1} stop-color="#01A180" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="pb-[18px]">
                      <p className="text-[25px] font-light text-black">2</p>
                      <p className="text-xs font-light text-black">
                        Активни полиси
                      </p>
                      <div className="flex gap-[4px] absolute right-10">
                        <svg
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className=""
                          preserveAspectRatio="xMidYMid meet"
                        >
                          <circle
                            cx={5}
                            cy={5}
                            r="4.5"
                            stroke="url(#paint0_linear_105_75)"
                            stroke-dasharray="1 1"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_105_75"
                              x1={5}
                              y1={0}
                              x2={5}
                              y2={10}
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stop-color="#01A180" />
                              <stop
                                offset={1}
                                stop-color="#6E6E6E"
                                stop-opacity="0.42"
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <p className="text-[8px] italic text-black">Во тек</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-[7px] min-w-[215px] h-[92px]">
                <div className="w-[215px] rounded-2xl relative h-[92px] flex">
                  <div className="absolute w-[215px]">
                    <img
                      src={require(`../../images/Rectangle 96.png`)}
                      className="w-[215px]"
                      alt="rounded"
                    />
                  </div>
                  <div className="flex gap-[8px] items-center pl-[11px] h-[92px]">
                    <div>
                      <img src={require(`../../images/1321.png`)} alt="1321" />
                    </div>
                    <div className="">
                      <p className="text-xs font-medium text-black">
                        0.00 ден.
                      </p>
                      <p className="text-xs font-light text-black">
                        Исплатени штети
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-[440px]">
                <div className="flex justify-between items-center min-w-[241px]">
                  <svg
                    width={42}
                    height={33}
                    viewBox="0 0 42 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[42px] h-[33px] relative"
                    preserveAspectRatio="none"
                  >
                    <g clip-path="url(#clip0_376_1786)">
                      <path
                        d="M7.63553 32.8369V30.6527C7.63553 29.8153 7.1312 29.2694 6.26676 29.2694C5.83462 29.2694 5.36638 29.415 5.0422 29.8882C4.7902 29.4878 4.43008 29.2694 3.88982 29.2694C3.52954 29.2694 3.16959 29.3785 2.88133 29.779V29.3422H2.125V32.8369H2.88133V30.9074C2.88133 30.2887 3.20552 29.9974 3.70984 29.9974C4.21384 29.9974 4.46617 30.325 4.46617 30.9074V32.8369H5.2225V30.9074C5.2225 30.2887 5.58245 29.9974 6.05069 29.9974C6.55502 29.9974 6.80702 30.325 6.80702 30.9074V32.8369H7.63553ZM18.8362 29.3422H17.6118V28.2865H16.8555V29.3422H16.1712V30.0337H16.8554V31.6356C16.8554 32.4365 17.1795 32.9096 18.044 32.9096C18.3682 32.9096 18.7281 32.8005 18.9805 32.6549L18.7642 31.9996C18.5481 32.1452 18.2961 32.1817 18.116 32.1817C17.7559 32.1817 17.6118 31.9633 17.6118 31.5991V30.0337H18.8362V29.3422ZM25.2471 29.2692C24.815 29.2692 24.5269 29.4878 24.3468 29.779V29.3422H23.5904V32.8369H24.3468V30.8711C24.3468 30.2887 24.5988 29.961 25.067 29.961C25.2111 29.961 25.3912 29.9975 25.5352 30.0338L25.7513 29.3059C25.6073 29.2694 25.3912 29.2694 25.2471 29.2694M15.5589 29.6335C15.1986 29.3786 14.6945 29.2695 14.1542 29.2695C13.2899 29.2695 12.7138 29.7063 12.7138 30.398C12.7138 30.9806 13.1459 31.3081 13.9022 31.4174L14.2623 31.4538C14.6586 31.5265 14.8746 31.6357 14.8746 31.8178C14.8746 32.0725 14.5865 32.2546 14.0822 32.2546C13.5779 32.2546 13.1818 32.0725 12.9297 31.8906L12.5695 32.473C12.9658 32.7642 13.506 32.9098 14.0461 32.9098C15.0546 32.9098 15.631 32.4367 15.631 31.7813C15.631 31.1625 15.1627 30.8348 14.4423 30.7257L14.0822 30.6892C13.758 30.6527 13.506 30.5801 13.506 30.3617C13.506 30.1068 13.758 29.9612 14.1542 29.9612C14.5865 29.9612 15.0187 30.1431 15.2347 30.2524L15.5589 29.6335ZM35.6558 29.2695C35.2235 29.2695 34.9354 29.4879 34.7552 29.7791V29.3423H33.9989V32.837H34.7552V30.8713C34.7552 30.2889 35.0074 29.9612 35.4755 29.9612C35.6197 29.9612 35.7998 29.9977 35.9439 30.034L36.1599 29.306C36.0159 29.2695 35.7998 29.2695 35.6558 29.2695ZM26.0035 31.0897C26.0035 32.1453 26.7237 32.9098 27.8403 32.9098C28.3445 32.9098 28.7046 32.8007 29.0647 32.5095L28.7046 31.8906C28.4165 32.109 28.1284 32.2181 27.8042 32.2181C27.1919 32.2181 26.7598 31.7813 26.7598 31.0897C26.7598 30.4345 27.1919 29.9975 27.8042 29.9612C28.1284 29.9612 28.4165 30.0703 28.7046 30.2889L29.0647 29.67C28.7046 29.3786 28.3445 29.2695 27.8403 29.2695C26.7237 29.2695 26.0035 30.034 26.0035 31.0897ZM32.9906 31.0897V29.3423H32.2342V29.7791C31.9821 29.4516 31.622 29.2695 31.1537 29.2695C30.1813 29.2695 29.425 30.034 29.425 31.0897C29.425 32.1453 30.1813 32.9098 31.1537 32.9098C31.6579 32.9098 32.0182 32.7279 32.2342 32.4002V32.837H32.9906V31.0897ZM30.2173 31.0897C30.2173 30.4708 30.6135 29.9612 31.2617 29.9612C31.874 29.9612 32.3063 30.4345 32.3063 31.0897C32.3063 31.7085 31.874 32.2181 31.2617 32.2181C30.6135 32.1817 30.2173 31.7085 30.2173 31.0897ZM21.1774 29.2695C20.1689 29.2695 19.4485 29.9975 19.4485 31.0897C19.4485 32.1818 20.1688 32.9098 21.2133 32.9098C21.7175 32.9098 22.2218 32.7642 22.618 32.4367L22.2578 31.8906C21.9697 32.109 21.6096 32.2546 21.2494 32.2546C20.7812 32.2546 20.313 32.0362 20.2049 31.4172H22.7621V31.1262C22.7982 29.9975 22.15 29.2695 21.1774 29.2695ZM21.1773 29.9247C21.6453 29.9247 21.9697 30.2161 22.0415 30.7622H20.2408C20.3128 30.2889 20.637 29.9247 21.1773 29.9247ZM39.9414 31.0897V27.959H39.1851V29.7791C38.9329 29.4516 38.5728 29.2695 38.1046 29.2695C37.1322 29.2695 36.3758 30.034 36.3758 31.0897C36.3758 32.1453 37.1322 32.9098 38.1046 32.9098C38.6089 32.9098 38.969 32.7279 39.1851 32.4002V32.837H39.9414V31.0897ZM37.1683 31.0897C37.1683 30.4708 37.5643 29.9612 38.2127 29.9612C38.825 29.9612 39.2571 30.4345 39.2571 31.0897C39.2571 31.7085 38.825 32.2181 38.2127 32.2181C37.5643 32.1817 37.1683 31.7085 37.1683 31.0897ZM11.8851 31.0897V29.3423H11.1287V29.7791C10.8766 29.4516 10.5165 29.2695 10.0482 29.2695C9.07584 29.2695 8.31951 30.034 8.31951 31.0897C8.31951 32.1453 9.07584 32.9098 10.0482 32.9098C10.5526 32.9098 10.9127 32.7279 11.1287 32.4002V32.837H11.8851V31.0897ZM9.07584 31.0897C9.07584 30.4708 9.47205 29.9612 10.1203 29.9612C10.7325 29.9612 11.1648 30.4345 11.1648 31.0897C11.1648 31.7085 10.7325 32.2181 10.1203 32.2181C9.47205 32.1817 9.07584 31.7085 9.07584 31.0897Z"
                        fill="black"
                      />
                      <path
                        d="M15.3066 2.80273H26.6516V23.4072H15.3066V2.80273Z"
                        fill="#FF5F00"
                      />
                      <path
                        d="M16.0271 13.1053C16.0271 8.91895 17.9719 5.20571 20.9611 2.80301C18.7643 1.05567 15.9912 0 12.9659 0C5.79846 0 0 5.8609 0 13.1053C0 20.3497 5.79846 26.2106 12.9657 26.2106C15.991 26.2106 18.7642 25.155 20.9611 23.4074C17.9719 21.0412 16.0271 17.2917 16.0271 13.1053Z"
                        fill="#EB001B"
                      />
                      <path
                        d="M41.9582 13.1053C41.9582 20.3496 36.1597 26.2106 28.9925 26.2106C25.9672 26.2106 23.194 25.155 20.9971 23.4074C24.0224 21.0049 25.9312 17.2917 25.9312 13.1053C25.9312 8.91895 23.9863 5.20571 20.9971 2.80301C23.1939 1.05567 25.9672 0 28.9925 0C36.1597 0 41.9582 5.89738 41.9582 13.1053Z"
                        fill="#F79E1B"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_376_1786">
                        <rect width={42} height={33} fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-xs font-medium text-black">
                    **** **** **** 1234
                  </p>
                  <p className="text-xs font-medium text-black">06/2024</p>
                </div>
                <p className="text-black text-xs font-medium font-['Helvetica Neue'] underline">
                  Примарна
                </p>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6.9036 9.07251C6.9036 8.58 6.97917 8.16933 7.1303 7.84051C7.28106 7.51169 7.59158 7.14159 8.06183 6.73021C8.3885 6.43441 8.6344 6.15387 8.79953 5.88859C8.96465 5.62331 9.04722 5.32428 9.04722 4.99151C9.04722 4.513 8.88245 4.11454 8.55291 3.79613C8.22337 3.47808 7.77304 3.31905 7.20191 3.31905C6.7374 3.31905 6.36729 3.4271 6.0916 3.64321C5.81591 3.85931 5.59424 4.12818 5.4266 4.44982L4.84668 4.17844C5.07678 3.72146 5.38442 3.35962 5.7696 3.0929C6.15478 2.82654 6.63222 2.69336 7.20191 2.69336C7.99883 2.69336 8.61304 2.92131 9.04453 3.37721C9.47601 3.8331 9.6914 4.3669 9.69068 4.97859C9.69068 5.37239 9.60471 5.7319 9.43276 6.05713C9.26045 6.38272 9.00917 6.69215 8.67891 6.98544C8.18424 7.42123 7.87247 7.77662 7.7436 8.05159C7.61509 8.32656 7.55083 8.66669 7.55083 9.07198L6.9036 9.07251ZM7.20299 12.0131C7.05868 12.0131 6.93286 11.9594 6.82553 11.8521C6.71783 11.7447 6.66399 11.6189 6.66399 11.4746C6.66399 11.3303 6.71783 11.2045 6.82553 11.0971C6.93322 10.9898 7.05886 10.9361 7.20245 10.9361C7.34604 10.9361 7.47204 10.9898 7.58045 11.0971C7.68886 11.2045 7.74253 11.3303 7.74145 11.4746C7.74037 11.6189 7.68653 11.7447 7.57991 11.8521C7.4733 11.9594 7.34765 12.0131 7.20299 12.0131Z"
                    fill="black"
                  />
                  <circle cx={7} cy={7} r="6.5" stroke="black" />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="flex justify-between items-center w-[440px]">
                <div className="flex justify-between items-center min-w-[241px]">
                  <svg
                    width={53}
                    height={17}
                    viewBox="0 0 53 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M27.4103 5.41261C27.3801 7.7713 29.5351 9.08747 31.1584 9.87009C32.8263 10.673 33.3865 11.1879 33.3799 11.906C33.3674 13.0048 32.0495 13.4899 30.8162 13.5087C28.6645 13.5417 27.4134 12.934 26.4188 12.4744L25.6437 16.0626C26.6416 16.5175 28.4894 16.9142 30.4054 16.9316C34.9032 16.9316 37.8457 14.7352 37.8617 11.3296C37.8793 7.00753 31.8188 6.7683 31.8602 4.83645C31.8745 4.25067 32.4395 3.62556 33.6776 3.46662C34.2904 3.38633 35.982 3.32488 37.9 4.19864L38.6527 0.726955C37.6213 0.355413 36.2957 -0.000358582 34.6452 -0.000358582C30.4119 -0.000358582 27.4343 2.22603 27.4103 5.41261ZM45.886 0.298677C45.0647 0.298677 44.3726 0.772629 44.0637 1.49994L37.6389 16.6766H42.1333L43.0277 14.2313H48.5198L49.0387 16.6766H53L49.5432 0.298677H45.886ZM46.5147 4.72298L47.8118 10.8731H44.2596L46.5147 4.72298ZM21.961 0.298883L18.4183 16.6764H22.7012L26.2422 0.298473L21.961 0.298883ZM15.6253 0.298883L11.1675 11.4462L9.36423 1.96775C9.15264 0.909655 8.31707 0.298677 7.38915 0.298677H0.102066L0 0.774267C1.49601 1.09542 3.19573 1.61341 4.22551 2.16765C4.85571 2.50622 5.03541 2.80218 5.24245 3.60671L8.65784 16.6766H13.1838L20.1226 0.298677L15.6253 0.298883Z"
                      fill="url(#paint0_linear_376_1795)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_376_1795"
                        x1="2436.62"
                        y1="50.8972"
                        x2="2485.11"
                        y2="-1688.07"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#222357" />
                        <stop offset={1} stop-color="#254AA5" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <p className="text-xs font-medium text-black">
                    **** **** **** 1234
                  </p>
                  <p className="text-xs font-medium text-black">06/2024</p>
                </div>
                <p className="text-black text-xs font-medium font-['Helvetica Neue'] underline">
                  Секундарна
                </p>
                <svg
                  width={14}
                  height={14}
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3.5 h-3.5"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M6.9036 9.07251C6.9036 8.58 6.97917 8.16933 7.1303 7.84051C7.28106 7.51169 7.59158 7.14159 8.06183 6.73021C8.3885 6.43441 8.6344 6.15387 8.79953 5.88859C8.96465 5.62331 9.04722 5.32428 9.04722 4.99151C9.04722 4.513 8.88245 4.11454 8.55291 3.79613C8.22337 3.47808 7.77304 3.31905 7.20191 3.31905C6.7374 3.31905 6.36729 3.4271 6.0916 3.64321C5.81591 3.85931 5.59424 4.12818 5.4266 4.44982L4.84668 4.17844C5.07678 3.72146 5.38442 3.35962 5.7696 3.0929C6.15478 2.82654 6.63222 2.69336 7.20191 2.69336C7.99883 2.69336 8.61304 2.92131 9.04453 3.37721C9.47601 3.8331 9.6914 4.3669 9.69068 4.97859C9.69068 5.37239 9.60471 5.7319 9.43276 6.05713C9.26045 6.38272 9.00917 6.69215 8.67891 6.98544C8.18424 7.42123 7.87247 7.77662 7.7436 8.05159C7.61509 8.32656 7.55083 8.66669 7.55083 9.07198L6.9036 9.07251ZM7.20299 12.0131C7.05868 12.0131 6.93286 11.9594 6.82553 11.8521C6.71783 11.7447 6.66399 11.6189 6.66399 11.4746C6.66399 11.3303 6.71783 11.2045 6.82553 11.0971C6.93322 10.9898 7.05886 10.9361 7.20245 10.9361C7.34604 10.9361 7.47204 10.9898 7.58045 11.0971C7.68886 11.2045 7.74253 11.3303 7.74145 11.4746C7.74037 11.6189 7.68653 11.7447 7.57991 11.8521C7.4733 11.9594 7.34765 12.0131 7.20299 12.0131Z"
                    fill="black"
                  />
                  <circle cx={7} cy={7} r="6.5" stroke="black" />
                </svg>
              </div>
            </div>
            {/* <div className="mt-[26px] w-[373px] h-[313px] rounded-[20px] bg-[#efefef]/[0.76] p-[26px] flex flex-col gap-[18px]">
              <div className="flex justify-between">
                <svg
                  width={11}
                  height={21}
                  viewBox="0 0 11 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M10.2273 1.68725C10.3176 1.59178 10.3881 1.47947 10.4349 1.35674C10.4817 1.23401 10.5039 1.10327 10.5002 0.971965C10.4965 0.840663 10.4669 0.711378 10.4133 0.591492C10.3596 0.471606 10.2828 0.363467 10.1873 0.273249C10.0919 0.183031 9.97956 0.112501 9.85684 0.0656852C9.73411 0.0188697 9.60336 -0.00331434 9.47206 0.000400002C9.34076 0.00411435 9.21147 0.0336542 9.09159 0.0873329C8.9717 0.141012 8.86356 0.217778 8.77334 0.313249L0.273343 9.31325C0.0978063 9.49892 0 9.74474 0 10.0002C0 10.2558 0.0978063 10.5016 0.273343 10.6872L8.77334 19.6882C8.86296 19.7858 8.97108 19.8646 9.09141 19.92C9.21173 19.9754 9.34187 20.0064 9.47427 20.0111C9.60666 20.0158 9.73867 19.9942 9.86263 19.9474C9.98659 19.9007 10.1 19.8298 10.1963 19.7388C10.2927 19.6479 10.3699 19.5387 10.4237 19.4176C10.4775 19.2965 10.5067 19.166 10.5095 19.0335C10.5124 18.9011 10.489 18.7694 10.4405 18.6461C10.3921 18.5228 10.3196 18.4103 10.2273 18.3153L2.37534 10.0002L10.2273 1.68725Z"
                    fill="black"
                  />
                </svg>
                <p className="text-xl text-[#01a180]">Јуни</p>
                <svg
                  width={12}
                  height={21}
                  viewBox="0 0 12 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.792189 1.68725C0.70197 1.59178 0.631441 1.47947 0.584625 1.35674C0.537809 1.23401 0.515625 1.10327 0.51934 0.971965C0.523054 0.840663 0.552594 0.711378 0.606273 0.591492C0.659951 0.471606 0.736717 0.363467 0.832189 0.273249C0.92766 0.183031 1.03997 0.112501 1.16269 0.0656852C1.28542 0.0188697 1.41617 -0.00331434 1.54747 0.000400002C1.67877 0.00411435 1.80806 0.0336542 1.92795 0.0873329C2.04783 0.141012 2.15597 0.217778 2.24619 0.313249L10.7462 9.31325C10.9217 9.49892 11.0195 9.74474 11.0195 10.0002C11.0195 10.2558 10.9217 10.5016 10.7462 10.6872L2.24619 19.6882C2.15657 19.7858 2.04845 19.8646 1.92812 19.92C1.8078 19.9754 1.67766 20.0064 1.54526 20.0111C1.41287 20.0158 1.28086 19.9942 1.1569 19.9474C1.03295 19.9007 0.919512 19.8298 0.823192 19.7388C0.726871 19.6479 0.649583 19.5387 0.595817 19.4176C0.54205 19.2965 0.512878 19.166 0.509994 19.0335C0.507109 18.9011 0.53057 18.7694 0.579014 18.6461C0.627458 18.5228 0.699919 18.4103 0.792189 18.3153L8.64419 10.0002L0.792189 1.68725Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <div className="w-[43px] h-[43px] rounded-[10px] bg-[#d9d9d9]">
                  <p className="text-xs text-[#626262]">1</p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center mb-[31px]">
            <Calendar />
            </div>
          </div>
          {/* end right main section */}
        </div>
      </div>
    </div>
  );
};
