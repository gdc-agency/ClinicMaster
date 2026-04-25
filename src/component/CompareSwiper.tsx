"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "../constant/theme";
import { compareswiperdata } from "../constant/alldata";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";

function CompareSwiper() {    
    const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);    
    const currentSlideRef = useRef<HTMLDivElement>(null);
    const totalSlidesRef = useRef<HTMLDivElement>(null);   

    const updatePagination = () => {
        const swiper = swiperInstance;
        const totalSlides = swiper?.slides?.length ?? 0;
        const currentSlide = (swiper?.realIndex ?? 0) + 1;
        const current = currentSlide < 10 ? `0${currentSlide}` : `${currentSlide}`;
        const total = totalSlides < 10 ? `0${totalSlides}` : `${totalSlides}`;

        if (currentSlideRef.current && totalSlidesRef.current) {
            currentSlideRef.current.innerHTML = current;
            totalSlidesRef.current.innerHTML = total;
        }
    };
    useEffect(() => {
        if (swiperInstance) {
            updatePagination();
            swiperInstance.on('slideChange', updatePagination);
            return () => {
                if (swiperInstance) {
                    swiperInstance.off('slideChange', updatePagination);
                }
            };
        }
    }, [swiperInstance]);
    return (
        <>
            <section className="content-inner bg-light overflow-hidden">
                <div className="container">
                    <div className="section-head style-1 row align-items-center mb-0">
                        <div className="col-sm-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Real People. Real Results.</h2>
                        </div>
                        <div className="col-sm-5 m-b30 d-none d-sm-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="compare-swiper-btn justify-content-center justify-content-sm-end">
                                <div className="compare-swiper-prev" role="button">
                                    <Image src={IMAGES.leftarrow} alt="arrow" />
                                </div>
                                <div className="compare-swiper-next" role="button">
                                    <Image src={IMAGES.rightarrow} alt="arrow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    className="swiper compare-swiper compare-swiper-wrapper m-b15"
                    slidesPerView={4}
                    spaceBetween={20}
                    autoplay={{
                        delay: 1500,
                    }}
                    loop={true}
                    navigation={{
                        nextEl: '.compare-swiper-next',
                        prevEl: '.compare-swiper-prev',                        
                    }}
                    pagination={{
                        type: 'progressbar',
                        el: ".compare-pagination-swiper",
                        clickable: true
                    }}
                    breakpoints={{
                        360: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 4.5
                        }
                    }}
                    modules={[Navigation, Autoplay, Pagination]}
                    onSwiper={setSwiperInstance}
                >
                    {compareswiperdata.map((data, i) => (
                        <SwiperSlide key={i} className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s">
                            <div className="dz-media radius-xl">
                                <Image src={data.image} alt="compare" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="container wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <div className="slider__pagination compare-slider__pagination justify-content-center justify-content-md-start">
                        <div className="slider__current compare-slider__current" ref={currentSlideRef}>01</div>
                        <div className="swiper-progress compare-pagination-swiper"></div>
                        <div className="slider__total compare-slider__total" ref={totalSlidesRef}>08</div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default CompareSwiper;