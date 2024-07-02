export const Portal = () => {
  return (
    <>
      <div className="flex justify-between content-center">
        <img className="self-center ml-3" src="logo-mk-mk.png.png" alt="logo" />
        <div>
          <div className="w-[446.95px] h-[66.41px] relative">
            <div className="w-[67.53px] h-[53px] absolute left-[135px] top-0 border-t-0 border-r-0 border-b-[3px] border-l-0 border-[#d6d6d6]">
              <p className="w-[57.73px] h-5 absolute left-[5px] top-[14.5px] text-[14.07656192779541px] text-center text-black">
                Почеток
              </p>
            </div>
            <div className="w-[105.11px] h-[53px] absolute left-[222.53px] top-0 border-t-0 border-r-0 border-b-[3px] border-l-0 border-[#d6d6d6]">
              <p className="w-[95.31px] h-5 absolute left-[5px] top-[14.5px] text-[14.196874618530273px] text-center text-black">
                Осигурувања
              </p>
            </div>
            <div className="w-[84px] h-[53px] absolute left-[347.95px] top-0 border-t-0 border-r-0 border-b-[3px] border-l-0 border-[#d6d6d6]">
              <p className="w-[74px] h-5 absolute left-[5px] top-[17px] text-[14.67812442779541px] text-center text-[#01a180]">
                Моја Сава
              </p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-[100%]" src="/images/banner 1.png" alt="banner" />
      <div className="bg-[#F2F2F2]">
        <div className="w-[60%] m-auto">
          <div className="grid grid-cols-3 gap-6">
            <div className="py-6">
              <img
                src="\images\sava-patnicko-zdravstveno-osiguruvanje-onlajn.png.png"
                alt="image"
              />
              <p className="text-2xl text-center text-[#343a40]">
                <span className="text-2xl text-center text-[#343a40]">
                  Патничко
                </span>
                <br />
                <span className="text-2xl text-center text-[#343a40]">
                  осигурување
                </span>
              </p>
              <button className="mt-3 bg-[#3CA082] py-3 w-[100%] rounded-[25px] text-white">
                placeholder
              </button>
            </div>
            <div className="py-6">
              <img
                src="\images\sava-osiguruvanje-na-velosipedi-i-velosipedisti.png.png"
                alt="image"
              />
              <p className="text-2xl text-center text-[#343a40]">
                <span className="text-2xl text-center text-[#343a40]">
                  Патничко
                </span>
                <br />
                <span className="text-2xl text-center text-[#343a40]">
                  осигурување
                </span>
              </p>
              <button className="mt-3 bg-[#3CA082] py-3 w-[100%] rounded-[25px] text-white">
                placeholder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-3 text-sm text-center">© 2024 - FoxIT</div>
    </>
  );
};
