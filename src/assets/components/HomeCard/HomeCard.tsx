interface HomeCardInterface {
  description: string;
  image: string;
  date: string;
}

const HomeCard: React.FC<HomeCardInterface> = ({
  description,
  image,
  date,
}) => {
  return (
    <div className="flex justify-center content-center">
      <div className="mr-2 grid place-items-center">
        <img className="max-w-[100px]" src={image} alt="card-image" />
      </div>
      <div>
        <p className="w-[72.76px] h-7 text-base text-left text-[#707b7c]">
          {date}
        </p>
        <p>{description} </p>
      </div>
    </div>
  );
};

export default HomeCard;
