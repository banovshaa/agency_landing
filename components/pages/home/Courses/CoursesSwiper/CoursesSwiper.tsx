"use client";

import CourseImage from "@/assets/images/home/courses/card_image.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CoursesCard from "../CoursesCard/CoursesCard";
const CoursesSwiper = () => {
  return (
    <Swiper
      allowTouchMove={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1440: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        993: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        480: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
        0: {
          slidesPerView: 1,
          spaceBetween: 12,
        },
      }}
    >
      <SwiperSlide>
        <CoursesCard
          image={CourseImage}
          texts={{
            type: "Development",
            title: "Frontend Development with JavaScript",
            tuitor_firstname: "Cristian",
            tuitor_lastname: "Muñoz",
            duration: "7 weeks",
            price: "$80.00 USD",
            discount: "80%",
            current_price: "$14.00 USD",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CoursesCard
          image={CourseImage}
          texts={{
            type: "Development",
            title: "Backend Development with Python",
            tuitor_firstname: "David",
            tuitor_lastname: "Muñoz",
            duration: "12 weeks",
            price: "$100.00 USD",
            discount: "50%",
            current_price: "$50.00 USD",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CoursesCard
          image={CourseImage}
          texts={{
            type: "Development",
            title: "Frontend Development with JavaScript",
            tuitor_firstname: "Cristian",
            tuitor_lastname: "Muñoz",
            duration: "7 weeks",
            price: "$80.00 USD",
            discount: "80%",
            current_price: "$14.00 USD",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CoursesCard
          image={CourseImage}
          texts={{
            type: "Development",
            title: "Backend Development with Python",
            tuitor_firstname: "David",
            tuitor_lastname: "Muñoz",
            duration: "12 weeks",
            price: "$100.00 USD",
            discount: "50%",
            current_price: "$50.00 USD",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CoursesSwiper;
