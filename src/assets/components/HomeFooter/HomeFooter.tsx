const HomeFooter = () => {
  return (
    <div className="bg-[#DDDDDD]">
      <div className="w-[60%] m-auto grid grid-cols-3 py-6">
        <div>
          <p className="text-sm font-bold text-[#666]">САВА осигурување а.д.</p>
          <p className="text-sm text-[#3ca082] mt-1">Профил на компанијата</p>
          <p className="text-sm text-[#3ca082] mt-1">Контактирајте нé</p>
          <p className="text-sm text-[#3ca082] mt-1">Мрежа</p>
          <p className="text-sm text-[#3ca082] mt-1">Sava Station</p>
          <p className="text-sm text-[#3ca082] mt-4">Политика за приватност</p>
          <p className="text-sm text-[#3ca082] mt-1">
            Ресетирајте ги поставките за колачиња
          </p>
          <img src="/images/so-transparentna-pozadina.png.png" alt="image" />
        </div>
        <div>
          <p className="text-sm text-[#666]">Социјални мрежи</p>
          <div className="flex ">
            <img
              className="mr-3 self-center"
              src="/images/facebook.png"
              alt="image"
            />
            <p className="mt-1 text-sm text-[#3ca082]">Facebook</p>
          </div>
          <div className="flex ">
            <img
              className="mr-3 self-center"
              src="/images/youtube.png"
              alt="image"
            />
            <p className="mt-1 text-sm text-[#3ca082]">Youtube</p>
          </div>
          <div className="flex ">
            <img
              className="mr-3 self-center"
              src="/images/twitter.png"
              alt="image"
            />
            <p className="mt-1 text-sm text-[#3ca082]">Twitter</p>
          </div>
          <div className="flex ">
            <img
              className="mr-3 self-center"
              src="/images/instagram.png"
              alt="image"
            />
            <p className="mt-1 text-sm text-[#3ca082]">Instagram</p>
          </div>
        </div>
        <div>
          <p className="text-sm text-[#666]">
            24/7 Контакт центар на бесплатниот број:
          </p>
          <div className="flex">
            <img
              className="mr-3 self-center"
              src="/images/phone.png"
              alt="phone"
            />
            <p className="mt-1 text-sm text-[#3ca082]">0800 80 000</p>
          </div>
          <p className="mt-1 text-sm text-left text-[#666]">
            Деловен соработник
          </p>
          <p className="mt-1 text-sm text-[#3ca082]">
            Сава пензиско друштво а.д. Скопје
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
