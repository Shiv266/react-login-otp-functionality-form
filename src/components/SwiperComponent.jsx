import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image1 from "../assets/images/login1.png";
import Image2 from "../assets/images/login2.png";
import Image3 from "../assets/images/login3.png";
import Image4 from "../assets/images/login4.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const leftSideData = [
  {
    icon: Image1,
    heading: "Largest Learning Destination",
    subHeading: "10+ Lakhs student learning and sharing community",
  },
  {
    icon: Image2,
    heading: "Highest success numbers",
    subHeading: "50k+ government job selection",
  },
  {
    icon: Image3,
    heading: "Unmatched Test series & Video classes",
    subHeading: "5000+ tests and 8000+ hours of Recored and Live classes",
  },
  {
    icon: Image4,
    heading: "Doubts clearing session",
    subHeading: "Teachers are always there to clear your doubts",
  },
];

function SwiperComponent() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
    >
      {" "}
      {leftSideData.map((item) => (
        <SwiperSlide key={item.label}>
          <div className="w-80 h-[300px]">
            <img className="w-64 mx-auto h-48" src={item.icon} alt="" />
            <h1 className="text-gray-800  mt-6 text-center">{item.heading}</h1>
            <h6 className="text-xs text-gray-500 mt-1 text-center">
              {item.subHeading}
            </h6>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperComponent;
