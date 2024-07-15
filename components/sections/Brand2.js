import BrandSlider1 from "../slider/BrandSlider1";

export default function Brand2({ brandImg }) {
  return (
    <>
      <div className="py-[2.5rem]">
        <div className="container">
          {brandImg?.length > 1 ? (
            <BrandSlider1 brandImg={brandImg} />
          ) : (
            <BrandSlider1 />
          )}
        </div>
      </div>
    </>
  );
}
