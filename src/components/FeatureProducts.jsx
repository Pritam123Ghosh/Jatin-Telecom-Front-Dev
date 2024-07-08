import FeatureProduct from "./FeatureProduct";

const FeatureProducts = () => {
  return (
    <>
      <h1 className="flex items-center justify-center sm:text-7xl text-4xl font-semibold text-center mt-14 mb-8 sm:mt-24 sm:mb-12">
        Featured Product
      </h1>
      <div className="grid sm:grid-cols-12 sm:m-20 m-12 gap-4">
        <FeatureProduct
          image={
            <img
              src="https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg"
              alt=""
              className="w-[200px]"
            />
          }
          name="Mobiles"
        />

        <FeatureProduct
          image={
            <img
              src="https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
              alt=""
              className="w-[200px]"
            />
          }
          name="Smartwatch"
        />

        <FeatureProduct
          image={
            <img
              src="https://images-cdn.ubuy.co.in/64f8fabde01bf74c341c95f7-portable-bluetooth-speaker-wireless.jpg"
              alt=""
              className="w-[200px]"
            />
          }
          name="Speaker"
        />

        <FeatureProduct
          image={
            <img
              src="https://5.imimg.com/data5/XB/NO/PA/SELLER-14201254/3000mah-power-bank-500x500.jpg"
              alt=""
              className="w-[200px]"
            />
          }
          name="Powerbank"
        />

        <FeatureProduct
          image={
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/4/XX/DL/CX/102234567/apple-iphone-12-pro-mobile-back-cover.JPG"
              alt=""
              className="w-[200px]"
            />
          }
          name="Back-Cases"
        />

        <FeatureProduct
          image={
            <img
              src="https://www.neolight.in/wp-content/uploads/2022/01/cc14a.jpeg"
              alt=""
              className="w-[200px]"
            />
          }
          name="All Mobile Accessories"
        />

        <FeatureProduct
          image={
            <img
              src="https://m.media-amazon.com/images/I/51gOkH1yMaL._AC_UF1000,1000_QL80_.jpg"
              alt=""
              className="w-[200px]"
            />
          }
          name="Mini Lights"
        />
      </div>
    </>
  );
};

export default FeatureProducts;
