// eslint-disable-next-line react/prop-types
const RepairRightImgComp = ({ title, description, img }) => {
  return (
    <>
      <div className="">
        <div className="grid gap-4 sm:grid-cols-2 sm:m-20 m-8">
          <div className="min-h-[400px] rounded p-4">
            <h1 className="text-3xl font-semibold lg:text-5xl text-black">
              {title}
            </h1>
            <br />
            <p className="text-gray-700 leading-relaxed sm:text-2xl">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center rounded ">{img}</div>
        </div>
      </div>
    </>
  );
};

export default RepairRightImgComp;
