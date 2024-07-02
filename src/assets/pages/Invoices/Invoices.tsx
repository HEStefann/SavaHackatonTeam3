import { useEffect, useState } from "react";
import { ProfileNavbar } from "../../components/ProfileNavbar/ProfileNavbar";
import InvoiceItem from "../../components/InvoiceItem/InvoiceItem";
import TopNav from "../../components/TopNav/TopNav";
import { InvoiceProps } from "../../../types/InvoiceProps";

const PaginationDots = ({ currentPage, totalPages, onPageClick }: any) => {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
            index === currentPage ? "bg-[#01A180]" : "bg-gray-400"
          }`}
          onClick={() => onPageClick(index)}
        ></div>
      ))}
    </div>
  );
};

export const Invoices = () => {
  const [allInvoices, setAllInvoices] = useState<InvoiceProps[]>([]);
  const [filteredInvoices, setFilteredInvoices] = useState<InvoiceProps[]>([]);
  const [selectedInvoice, setSelectedInvoice] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);
  const [popUpTrue, setPopUpTrue] = useState(false);
  const itemsPerPage = 15;

  const invoicesApi = `https://e5e3-77-28-131-181.ngrok-free.app/api/invoices`;

  useEffect(() => {
    fetch(invoicesApi, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllInvoices(data.data);
        setFilteredInvoices(data.data.slice(0, itemsPerPage));
      })
      .catch((error) => {
        console.error("Error fetching invoices:", error);
      });
  }, []);

  const handlePolicyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedInvoice(value);
    setCurrentPage(0);

    if (value === "all") {
      setFilteredInvoices(allInvoices.slice(0, itemsPerPage));
    } else {
      const filtered = allInvoices.filter(
        (invoice) => invoice.invoice_number === value
      );
      setFilteredInvoices(filtered.slice(0, itemsPerPage));
    }
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => {
      const newPage = prevPage + 1;
      const start = newPage * itemsPerPage;
      const end = start + itemsPerPage;

      if (selectedInvoice === "all") {
        setFilteredInvoices(allInvoices.slice(start, end));
      } else {
        const filtered = allInvoices.filter(
          (invoice) => invoice.invoice_number === selectedInvoice
        );
        setFilteredInvoices(filtered.slice(start, end));
      }

      return newPage;
    });
  };

  const handlePageClick = (pageIndex: any) => {
    setCurrentPage(pageIndex);
    const start = pageIndex * itemsPerPage;
    const end = start + itemsPerPage;

    if (selectedInvoice === "all") {
      setFilteredInvoices(allInvoices.slice(start, end));
    } else {
      const filtered = allInvoices.filter(
        (invoice) => invoice.invoice_number === selectedInvoice
      );
      setFilteredInvoices(filtered.slice(start, end));
    }
  };

  const totalPages = Math.ceil(
    selectedInvoice === "all"
      ? allInvoices.length / itemsPerPage
      : allInvoices.filter(
          (invoice) => invoice.invoice_number === selectedInvoice
        ).length / itemsPerPage
  );

  return (
    <>
      {popUpTrue && (
        <div className="flex bg-[#000] w-full h-screen items-center justify-center bg-opacity-50">
          <div className="w-[1507px] rounded-[20px] bg-[#eaeaea] pl-[110px] pr-[60px]">
            <svg
              onClick={() => setPopUpTrue(false)}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="absolute top-[44px] right-[57px]"
            >
              <path
                d="M19.5786 17.5581C19.8469 17.8263 19.9976 18.1902 19.9976 18.5696C19.9976 18.9489 19.8469 19.3128 19.5786 19.581C19.3104 19.8493 18.9465 20 18.5671 20C18.1877 20 17.8238 19.8493 17.5556 19.581L10 12.0235L2.44206 19.5787C2.17378 19.8469 1.80992 19.9976 1.43052 19.9976C1.05113 19.9976 0.687267 19.8469 0.418991 19.5787C0.150716 19.3104 3.99761e-09 18.9466 0 18.5672C-3.99762e-09 18.1878 0.150716 17.824 0.418991 17.5557L7.97693 10.0006L0.421371 2.4431C0.153095 2.17484 0.00238013 1.81101 0.00238013 1.43163C0.00238014 1.05225 0.153095 0.688415 0.421371 0.420156C0.689646 0.151897 1.05351 0.00118977 1.4329 0.00118977C1.8123 0.00118977 2.17616 0.151897 2.44444 0.420156L10 7.97765L17.5579 0.418966C17.8262 0.150706 18.1901 -6.32041e-09 18.5695 0C18.9489 6.32041e-09 19.3127 0.150706 19.581 0.418966C19.8493 0.687225 20 1.05106 20 1.43044C20 1.80982 19.8493 2.17365 19.581 2.44191L12.0231 10.0006L19.5786 17.5581Z"
                fill="black"
              ></path>
            </svg>
            <p className="text-[40px] font-bold text-black mt-[48px]">
              Плаќање на фактура #F-123456/24
            </p>
            <div className="mt-[30px] flex">
              <div>
                <p className="text-[32px] font-medium text-black">
                  Краток преглед
                </p>
                <div className="flex flex-col mt-[42px] gap-[26px]">
                  <div className="flex flex-col gap-[24px]">
                    <div className="flex justify-between">
                      <p className="text-2xl font-light text-black">Износ:</p>
                      <p className="text-2xl font-light text-black">
                        0.00 ден.
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-2xl font-light text-black">Данок:</p>
                      <p className="text-2xl font-light text-black">
                        0.00 ден.
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-2xl font-light text-black">Попуст:</p>
                      <p className="text-2xl font-light text-black">
                        0.00 ден.
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      width="595"
                      height="1"
                      viewBox="0 0 595 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <line y1="0.5" x2="595" y2="0.5" stroke="black"></line>
                    </svg>
                    <div className="mt-[17px] mb-[12px] flex justify-between">
                      <p className="text-2xl text-black">Вкупна сума:</p>
                      <p className="text-2xl font-light text-black">
                        0.00 ден.
                      </p>
                    </div>
                    <svg
                      width="595"
                      height="1"
                      viewBox="0 0 595 1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      <line y1="0.5" x2="595" y2="0.5" stroke="black"></line>
                    </svg>
                  </div>
                  <div className="pt-[9px] pb-[39px]">
                    <div className="pl-[11px] pr-[28px] flex justify-between">
                      <p className="text-2xl font-medium text-black">
                        Метод на плаќање
                      </p>
                      <div className="flex gap-[24px]">
                        <div className="flex gap-[5px] items-center">
                          <div className="w-[19px] h-[19px] rounded-[5px] border border-[#a5a5a5]"></div>
                          <p className="text-base text-black">Зачувани</p>
                        </div>
                        <div className="flex gap-[5px] items-center">
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[19px] h-[19px]"
                            preserveAspectRatio="none"
                          >
                            <rect
                              width="19"
                              height="19"
                              rx="5"
                              fill="#01A180"
                            ></rect>
                            <path
                              d="M1.04767 11.6062L2.84117 9.76736L5.69858 12.7056L6.23574 13.258L6.77343 12.7062L16.1583 3.07442L17.9523 4.91377L6.23626 16.9259L1.04767 11.6062Z"
                              fill="white"
                              stroke="#01A180"
                              stroke-width="1.5"
                            ></path>
                          </svg>
                          <p className="text-base text-black">Ново</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[49px] rounded-[15px] border border-[#bcbcbc] px-[18px] py-[15px] mt-[22px] flex gap-[12px] items-center">
                      <svg
                        width="23"
                        height="19"
                        viewBox="0 0 23 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M20.9091 4.22222V2.11111H6.27273V4.22222H20.9091ZM20.9091 12.6667V7.38889H6.27273V12.6667H20.9091ZM20.9091 0C21.4636 0 21.9955 0.22242 22.3876 0.61833C22.7797 1.01424 23 1.55121 23 2.11111V12.6667C23 13.2266 22.7797 13.7635 22.3876 14.1594C21.9955 14.5554 21.4636 14.7778 20.9091 14.7778H6.27273C5.71818 14.7778 5.18635 14.5554 4.79423 14.1594C4.40211 13.7635 4.18182 13.2266 4.18182 12.6667V2.11111C4.18182 0.939444 5.11227 0 6.27273 0H20.9091ZM2.09091 16.8889H17.7727V19H2.09091C1.53637 19 1.00453 18.7776 0.612413 18.3817C0.220292 17.9858 0 17.4488 0 16.8889V5.27778H2.09091V16.8889Z"
                          fill="black"
                        ></path>
                      </svg>
                      <p className="text-base text-black">
                        Кредитна/Дебитна картичка
                      </p>
                    </div>
                    <div className="mt-[26px] flex flex-col gap-[20px]">
                      <p className="h-6 pl-[22px] text-2xl font-medium text-black">
                        Информации за картичката
                      </p>
                      <div className="w-full rounded-[15px] border border-[#bcbcbc]">
                        <div className="w-full className flex justify-between items-center pt-[17px] mb-[11px]">
                          <p className="text-xl font-light text-black pl-[47px]">
                            5245 0078 2258 4978
                          </p>
                          <svg
                            width="24"
                            height="12"
                            viewBox="0 0 24 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            className="mr-[22px]"
                          >
                            <path
                              d="M2.02351 0.32248C1.90901 0.21947 1.77432 0.138939 1.62714 0.0854854C1.47995 0.0320319 1.32314 0.00670141 1.16567 0.0109424C1.0082 0.0151834 0.853152 0.048912 0.709374 0.110203C0.565595 0.171493 0.435904 0.259144 0.327706 0.368153C0.219508 0.47716 0.134921 0.605391 0.0787755 0.745522C0.0226299 0.885653 -0.00397536 1.03494 0.000479248 1.18486C0.00493385 1.33478 0.0403609 1.4824 0.104738 1.61928C0.169114 1.75617 0.26118 1.87964 0.375678 1.98265L11.1693 11.6879C11.392 11.8883 11.6868 12 11.9933 12C12.2997 12 12.5945 11.8883 12.8172 11.6879L23.612 1.98265C23.729 1.88032 23.8235 1.75687 23.89 1.61948C23.9565 1.4821 23.9936 1.3335 23.9992 1.18234C24.0049 1.03117 23.9789 0.880441 23.9229 0.738907C23.8668 0.597374 23.7818 0.467856 23.6727 0.357879C23.5636 0.2479 23.4326 0.159653 23.2874 0.0982627C23.1422 0.0368728 22.9857 0.00356478 22.8268 0.000270799C22.668 -0.00302223 22.51 0.0237646 22.3621 0.0790777C22.2143 0.134391 22.0794 0.217127 21.9654 0.322479L11.9933 9.28785L2.02351 0.32248Z"
                              fill="black"
                            ></path>
                          </svg>
                        </div>
                        <div className="flex">
                          <div className="w-96 h-[49px] border border-[#bcbcbc] pl-[47px] flex items-center">
                            <p className="text-xl font-light text-black">
                              25/06
                            </p>
                          </div>
                          <div className="w-[247px] h-[49px] border border-[#bcbcbc] flex items-center justify-center relative">
                            <div className="absolute right-[15px] bottom-[15px] flex items-center justify-center">
                              <p className="text-[15px] font-light text-[#01a180] absolute">
                                i
                              </p>
                              <svg
                                width="17"
                                height="17"
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <circle
                                  cx="8.5"
                                  cy="8.5"
                                  r="8"
                                  stroke="#01A180"
                                ></circle>
                              </svg>
                            </div>
                            <p className="text-xl font-light text-black">345</p>
                          </div>
                        </div>
                        <div className="pl-[47px] flex items-center">
                          <p className="text-xl font-light text-black py-[14px]">
                            Емилија Василева
                          </p>
                        </div>
                      </div>
                    </div>
                    <p className="text-2xl font-medium pt-[28px] text-center text-black">
                      Информации за наплата
                    </p>
                    <div className="pt-[20px] flex gap-[7px] items-center justify-center">
                      <svg
                        width="19"
                        height="19"
                        viewBox="0 0 19 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[19px] h-[19px]"
                        preserveAspectRatio="none"
                      >
                        <rect
                          width="19"
                          height="19"
                          rx="5"
                          fill="#01A180"
                        ></rect>
                        <path
                          d="M1.04767 11.6062L2.84117 9.76736L5.69858 12.7056L6.23574 13.258L6.77343 12.7062L16.1583 3.07442L17.9523 4.91377L6.23626 16.9259L1.04767 11.6062Z"
                          fill="white"
                          stroke="#01A180"
                          stroke-width="1.5"
                        ></path>
                      </svg>
                      <p className="text-base font-light text-black">
                        Користете ги информациите за мојата адреса за контакт
                      </p>
                    </div>
                    <div className="flex justify-center items-center">
                      <button className="w-[266px] mt-[39px] h-[50px] rounded-[15px] bg-[#01a180] text-xl text-black flex items-center justify-center">
                        Плати
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full relative">
                <div className="pl-[23px] flex flex-col">
                  <div className="w-full h-[24.54px] rounded-tl-[20px] rounded-tr-[20px] bg-[#01a180]"></div>
                  <div className="bg-[#d9d9d9] w-full">
                    <div className="flex pt-[33px] pl-[85px] items-center">
                      <p className="text-[32px] font-medium text-black">
                        Преглед
                      </p>
                      <div className="pl-[36px] gap-[5px] flex">
                        <div className="flex items-center justify-center">
                          <p className="text-xs text-black absolute">
                            Преземете PDF
                          </p>
                          <div className="w-[118px] h-[33.46px] rounded-[15px] bg-[#ececec]"></div>
                        </div>
                        <div className="flex items-center justify-center">
                          <p className="text-xs text-black absolute">
                            Преземете PDF
                          </p>
                          <div className="w-[118px] h-[33.46px] rounded-[15px] bg-[#ececec]"></div>
                        </div>
                        <div className="flex items-center justify-center">
                          <p className="text-xs text-black absolute">
                            Преземете PDF
                          </p>
                          <div className="w-[118px] h-[33.46px] rounded-[15px] bg-[#ececec]"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center flex-col mt-[20px]">
                      <svg
                        width="568"
                        height="1"
                        viewBox="0 0 568 1"
                        fill="none"
                        className="mb-[20px]"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <line
                          y1="0.746094"
                          x2="568"
                          y2="0.746094"
                          stroke="#757575"
                          stroke-width="0.5"
                        ></line>
                      </svg>
                      <div className="flex">
                        <div>
                          <img src="./images/aiRobot.png" alt="" />
                        </div>
                        <p className="text-xs text-black ml-[134px]">
                          Фактура број:52247
                        </p>
                        <div className="ml-[12px] flex gap-[9px] relative rounded-[15px] bg-[#ff9191]/[0.38] h-full px-[12px] py-[5px]">
                          <div className="w-3.5 flex items-center justify-center">
                            <p className="absolute text-xl text-[#f00]">-</p>
                            <svg
                              width="14"
                              height="16"
                              viewBox="0 0 14 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className=""
                              preserveAspectRatio="xMidYMid meet"
                            >
                              <path
                                d="M13.5 7.91467C13.5 12.0031 10.5399 15.2219 7 15.2219C3.46007 15.2219 0.5 12.0031 0.5 7.91467C0.5 3.82627 3.46007 0.607422 7 0.607422C10.5399 0.607422 13.5 3.82627 13.5 7.91467Z"
                                stroke="#FF0000"
                              ></path>
                            </svg>
                          </div>
                          <p className="text-xs text-[#f00]">
                            Плаќањето е на чекање
                          </p>
                        </div>
                      </div>
                      <div className="flex mt-[25px] px-[79px] justify-between w-full">
                        <div className="flex flex-col gap-[11px]">
                          <p className="text-base text-[#686868]">
                            Фактурирана до
                          </p>
                          <p className="text-base text-black">Сава</p>
                        </div>
                        <div className="flex flex-col gap-[11px]">
                          <p className="text-base text-[#686868]">
                            Рок на достасување
                          </p>
                          <p className="text-base text-black">Јул.05.2024</p>
                        </div>
                        <div className="flex flex-col gap-[11px]">
                          <p className="text-base text-[#686868]">
                            Број на случај
                          </p>
                          <p className="text-base text-black">52247-GH3</p>
                        </div>
                      </div>
                      <div className="mt-[39px] w-[568px]">
                        <div className="rounded-[10px] bg-neutral-100/[0.86] h-[41px] flex justify-between items-center">
                          <p className="text-base ml-[18px] text-[#919191]">
                            Опис на ставката
                          </p>
                          <div className="mr-[50px] flex">
                            <p className="text-base text-[#919191] mr-[37px]">
                              Количина
                            </p>
                            <p className="text-base text-[#919191]">Цена</p>
                          </div>
                        </div>
                        <div className="flex justify-between w-full mt-[20px]">
                          <p className="text-base text-black">
                            Велосипедска полиса
                          </p>
                          <div className="flex items-center">
                            <p className="text-base text-black">1</p>
                            <p className="text-base ml-[63px] mr-[31px] text-black">
                              0.00ден.
                            </p>
                          </div>
                        </div>
                        <svg
                          width="568"
                          height="2"
                          viewBox="0 0 568 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                          className="mt-[15px] mb-[21px]"
                        >
                          <line
                            y1="0.880859"
                            x2="568"
                            y2="0.880859"
                            stroke="#757575"
                            stroke-width="0.5"
                          ></line>
                        </svg>
                        <div className="flex flex-col gap-[22px]">
                          <div className="flex gap-[38px] justify-end mr-[31px]">
                            <p className="text-base text-[#424242]">Износ:</p>
                            <p className="text-base text-black">0.00ден.</p>
                          </div>
                          <div className="flex gap-[38px] justify-end mr-[31px]">
                            <p className="text-base text-[#424242]">Данок:</p>
                            <p className="text-base text-black">0.00ден.</p>
                          </div>
                          <div className="flex gap-[38px] justify-end mr-[31px]">
                            <p className="text-base text-[#424242]">Попуст:</p>
                            <p className="text-base text-black">0.00ден.</p>
                          </div>
                          <div className="flex gap-[38px] justify-end mr-[31px]">
                            <p className="text-base font-medium text-black">
                              Вкупна сума:
                            </p>
                            <p className="text-base text-black">0.00ден.</p>
                          </div>
                        </div>
                        <svg
                          width="568"
                          height="1"
                          viewBox="0 0 568 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          preserveAspectRatio="xMidYMid meet"
                          className="mt-[20px] mb-[33px]"
                        >
                          <line
                            y1="0.449219"
                            x2="568"
                            y2="0.449219"
                            stroke="#757575"
                            stroke-width="0.5"
                          ></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[46.84px] flex items-center justify-between rounded-bl-[20px] rounded-br-[20px] bg-[#01a180] pl-[24px] pr-[34px]">
                    <p className="text-base font-semibold text-white">
                      Ви Благодариме!
                    </p>
                    <div className="flex gap-[26px]">
                      <p className="text-base text-white">+0800 80 000</p>
                      <p className="text-base text-white">mk.sava.insure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex">
        <ProfileNavbar />
        <div className="w-[100%] bg-[#d9d9d9]">
          <TopNav />
          <div className="flex justify-center content-center py-3">
            <div className="bg-white w-[95%] p-6 rounded-[16px]">
              <div className="rounded-[24px] overflow-hidden">
                <div className="bg-[#01A180] text-center p-3 text-white">
                  Фактури
                </div>

                <div className="py-6 flex justify-between">
                  <div>
                    <select
                      className="px-[6rem] py-1 border-2 rounded-[8px] border-[#01A180] bg-white mr-6"
                      value={selectedInvoice}
                      onChange={handlePolicyChange}
                    >
                      <option value="all">-- Иберете фактура --</option>
                      {allInvoices.map((el) => (
                        <option
                          key={el.invoice_number}
                          value={el.invoice_number}
                        >
                          {el.invoice_number}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
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

                      <button
                        onClick={() => setPopUpTrue(true)}
                        className="flex"
                      >
                        Плати брзо
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[24px] overflow-hidden">
                  <table className="w-full text-center">
                    <thead className="bg-[#01A180] text-center text-white">
                      <tr>
                        <th className="p-3">број на фактура</th>
                        <th className="p-3">полиси</th>
                        <th className="p-3">осигуреници</th>
                        <th className="p-3">рок</th>
                        <th className="p-3">износ</th>
                        <th className="p-3">платено со</th>
                        <th className="p-3">за плаќање</th>
                        <th className="p-3">статус</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredInvoices.map((el) => (
                        <InvoiceItem key={el.invoice_number} {...el} />
                      ))}
                      <tr className="bg-[#01A180] text-center text-white">
                        <td className="p-3" colSpan={9}>
                          Вкупен инзнос: 13943,00 ден.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {filteredInvoices.length <
                  (selectedInvoice === "all"
                    ? allInvoices.length
                    : allInvoices.filter(
                        (invoice) => invoice.invoice_number === selectedInvoice
                      ).length) && (
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleLoadMore}
                      className="bg-[#01A180] text-white px-4 py-2 rounded-md"
                    >
                      Show Next
                    </button>
                  </div>
                )}
                <PaginationDots
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageClick={handlePageClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
