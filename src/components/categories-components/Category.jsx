import { Carousel } from "@material-tailwind/react";

const Category = () => {
  return (
    <>
      <Carousel className="">
        <img
          src="https://www.lavamobiles.com/images2/card-feature-phones.jpg"
          alt="image 1"
          className="sm:h-[500px] h-[200px] w-full rounded-none"
        />
        <img
          src="https://rukminim2.flixcart.com/fk-p-flap/850/400/image/f76755a772e3adf6.jpg?q=20"
          className="sm:h-[500px] h-[200px] w-full rounded-none"
        />
        <img
          src="https://fdn.gsmarena.com/imgroot/static/headers/makers/oneplus-2023-1.jpg"
          className="sm:h-[500px] h-[200px] w-full rounded-none"
        />
        <img
          src="https://m.media-amazon.com/images/G/31/img23/Wireless/iQOOz9lite/D142170190_WLD-New-launch_iQOO-Z9-Lite-5G_1400x800"
          className="sm:h-[500px] h-[200px] w-full rounded-none"
        />
      </Carousel>
      <h1 className="flex items-center justify-center sm:text-6xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12 w-full  text-black py-5">
        Our Categories
      </h1>
      <p className="text-gray-700 leading-relaxed text-center sm:m-10 sm:text-2xl m-6">
        Discover our extensive range of mobile phones and accessories from top
        brands. Whether you&apos;re looking for the latest smartphones,
        high-quality headphones, durable power banks, or stylish cases,
        we&apos;ve got you covered. Enhance your mobile experience with our
        selection of innovative accessories. Shop now and find everything you
        need to stay connected and powered up!
      </p>
    </>
  );
};

export default Category;
