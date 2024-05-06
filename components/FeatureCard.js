const FeatureCard = ({ title, icon }) => {
  return (
    <div className="flex w-full items-center gap-4">
      <div className="bg-gray-300 w-[50px] h-[50px] text-[#185b2c] text-2xl grid place-items-center rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#31a854]">{title}</h3>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
