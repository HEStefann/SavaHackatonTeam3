import HomeCard from "../../components/HomeCard/HomeCard";
import HomeFooter from "../../components/HomeFooter/HomeFooter";
import HomeNavbar from "../../components/HomeNavbar/HomeNavbar";

export const HomePage = () => {
  return (
    <>
      <div className="bg-[#F2F2F2]">
        <HomeNavbar />
        <div>
          <img
            className="w-[100%]"
            src="/images/Landing 2 (1) 1.png"
            alt="landing"
          />
        </div>
        <div className="w-[60%] m-auto">
          <div className="flex gap-[35px] justify-center py-6">
            <div className="w-[205px] h-[46.16px] cursor-pointer relative rounded-[1px] bg-[#3ca082] border border-[#358d73]">
              <p className="w-[114.86px] h-[20.16px] absolute left-[45.25px] top-[12.42px] text-[14.399999618530273px] text-center text-white">
                Онлајн плаќање
              </p>
            </div>
            <div className="w-[205px] h-[46.16px] cursor-pointer relative rounded-[1px] bg-[#3ca082] border border-[#358d73]">
              <p className="w-[175.14px] h-[20.16px] absolute left-[15.09px] top-[12.42px] text-[14.399999618530273px] text-center text-white">
                Онлајн пријава на штета
              </p>
            </div>
            <div className="w-[205px] h-[46.16px] cursor-pointer relative rounded-[1px] bg-[#3ca082] border border-[#358d73]">
              <p className="w-[176.01px] h-[20.16px] absolute left-[14.66px] top-[12.42px] text-[14.399999618530273px] text-center text-white">
                Онлајн купување полиси
              </p>
            </div>
            <div className="w-[205px] h-[46.16px] cursor-pointer relative rounded-[1px] bg-[#3ca082] border border-[#358d73]">
              <p className="w-[103.55px] h-[20.16px] absolute left-[50.91px] top-[12.42px] text-[14.399999618530273px] text-center text-white">
                Онлајн понуда
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-6">
          <div className="flex flex-wrap m-auto w-[60%] justify-around gap-6">
            <div className="relative w-fit mt-3">
              <img
                src="\images\sava-osiguruvanje-na-velosipedi-i-velosipedisti.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>
            <div className="relative w-fit mt-3">
              <img
                src="\images\sava-osiguruvanje-od-nezgoda-onlajn.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>
            <div className="relative w-fit mt-3">
              <img
                src="/images/sava-domakjinsko-osiguruvanje-na-stan-kukja-onlajn.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>

            <div className="relative w-fit mt-3">
              <img
                src="\images\Sava-osiguruvanje-na-motorni-vozila-onlajn.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>

            <div className="relative w-fit mt-3">
              <img
                src="\images\sava-osiguruvanje-na-pravni-lica.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>

            <div className="relative w-fit mt-3">
              <img
                src="/images/sava-dobrovolno-privatno-zdravstveno-osiguruvanje.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>
            <div className="relative w-fit mt-3">
              <img
                src="\images\sava-patnicko-zdravstveno-osiguruvanje-onlajn.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>
            <div className="relative w-fit mt-3">
              <img
                src="/images\sava-zdravstveno-osiguruvanje-na-milenici.png.png"
                alt="item"
              />
              <img
                className="absolute top-0 right-0 basis[30%]"
                src="/images/shopping-cart.png"
                alt="shopping cart"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] m-auto py-12">
          <div className="flex justify-between">
            <div className="grid place-items-center">
              <img src="\images\Artboard 1 copy 6 rework2 1.png" alt="image" />
              <div className="w-[205px] h-[46.16px] relative rounded-[1px] bg-[#3ca082] border border-[#358d73]">
                <p className="w-[103.55px] h-[20.16px] absolute left-[50.91px] top-[12.42px] text-[14.399999618530273px] text-center text-white">
                  Моја Савa
                </p>
              </div>
            </div>
            <div>
              <img src="/images/phone 2.png" alt="phone" />
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <div className="basis-[47%]">
              <p className="mb-3 text-[28px] text-left text-[#3ca082]">
                Блог Никогаш сами
              </p>
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
            </div>
            <div className="basis-[47%]">
              <p className="mb-3 text-[28px] text-left text-[#3ca082]">
                Новини
              </p>
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
              <HomeCard
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non maiores iure quisquam tempora similique neque? Praesentium ipsa iure eveniet."
                image="https://picsum.photos/200"
                date="date"
              />
            </div>
          </div>
        </div>
        <HomeFooter />
      </div>
    </>
  );
};
