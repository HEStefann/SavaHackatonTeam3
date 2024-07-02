import React, { useState } from 'react';

const Calendar: React.FC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="mt-6 w-96 rounded-2xl bg-[#efefef]/[0.76] p-6 flex flex-col gap-4 min-h-[329px]">
      <div className="flex justify-between items-center">
        <button onClick={handlePrevMonth}>
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
        </button>
        <p className="text-xl text-[#01a180]">{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
        <button onClick={handleNextMonth}>
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
        </button>
      </div>
      <div className="grid grid-cols-7 gap-[2px] text-center">
        {dayLabels.map(label => (
          <div key={label} className="text-xs text-gray-600">{label}</div>
        ))}
        {Array((firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1)).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="w-[43px] h-[43px]"></div>
        ))}
        {daysArray.map(day => (
          <div key={day} className="w-[43px] h-[43px] rounded-[10px] bg-[#d9d9d9] p-[5px] flex items-center justify-center">
            <p className="text-xs text-[#626262]">{day}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;