"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGES, SVGICONS } from "../constant/theme";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { testiswiperdata } from "../constant/alldata";
import { Modal } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper";

interface TestimonialData {
  image: string;
  avatar: string;
  delay: string;
  name : string;
}

function TestimonialSwiper() {
  const [show, setShow] = useState<boolean>(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const testimonialSwiperRef = useRef<HTMLDivElement | null>(null);
  const currentSlideRef = useRef<HTMLDivElement | null>(null);
  const totalSlidesRef = useRef<HTMLDivElement | null>(null);

  const updatePagination = () => {
    const swiperTotalSlides = swiperInstance?.slides?.length || 0;
    const currentSlide = (swiperInstance?.realIndex || 0) + 1;
    const current = currentSlide < 10 ? `0${currentSlide}` : currentSlide.toString();
    const total = swiperTotalSlides < 10 ? `0${swiperTotalSlides}` : swiperTotalSlides.toString();

    if (currentSlideRef.current && totalSlidesRef.current) {
      currentSlideRef.current.innerHTML = current;
      totalSlidesRef.current.innerHTML = total;
    }
  };

  useEffect(() => {
    if (swiperInstance) {
      updatePagination();
      swiperInstance.on("slideChange", updatePagination);

      return () => {
        swiperInstance.off("slideChange", updatePagination);
      };
    }
  }, [swiperInstance]);

  return (
    <>
      <div className="container">
        <div className="section-head style-3 row align-items-end justify-content-between m-b30">
          <div className="col-xl-5 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <h2 className="title m-b0">What our patient say about us</h2>
          </div>
          <div className="col-xl-6 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <div className="float-xl-end">
              <div className="d-flex align-items-center m-b15">
                <div className="info-widget style-12 m-r10 bg-light">
                  <div className="avatar-group">
                    <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar1} alt="avatar1" />
                    <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar2} alt="avatar2" />
                    <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar3} alt="avatar3" />
                    <Image className="avatar rounded-circle avatar-md border border-white border-2" src={IMAGES.smallavatar4} alt="avatar4" />
                  </div>
                  <div className="clearfix">
                    <span className="font-20">Talk to over 215 doctor</span>
                  </div>
                </div>
                <Link href="/testimonial" className="btn btn-square btn-xl btn-light btn-rounded"
                    dangerouslySetInnerHTML={{__html : SVGICONS.uparrow}}
                >                  
                </Link>
              </div>
              <div className="widget-rating3 large">
                <ul className="star-list">
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                  <li><i className="fa fa-star" /></li>
                </ul>
                <span className="rating me-2">(4.8)</span>
                <span className="text text-body fw-normal">12k+ ratings on google</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-left">
        <Swiper
          className="swiper testimonial-swiper2 testimonial-wrapper2"
          slidesPerView={2}
          loop={true}
          pagination={{
            type: "progressbar",
            el: ".testimonial-pagination-swiper2",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            1481: { slidesPerView: 2 },
            1280: { slidesPerView: 1.6 },
            991: { slidesPerView: 1.2 },
            320: { slidesPerView: 1 },
          }}
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
        >
          {testiswiperdata.map((data: TestimonialData, i: number) => (
            <SwiperSlide data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
              <div className="testimonial-2">
                <div className="testimonial-media">
                  <Image src={data.image} alt="testimonial" />
                  <div className="video-bx1 video-lg">
                    <Link href="#" scroll={false} onClick={handleShow} className="popup-youtube video-btn bg-primary">
                      <i className="fa fa-play" />
                    </Link>
                    <span className="text-black">Watch The Video</span>
                    <Link href="#" scroll={false} className="btn-link">
                      <i className="feather icon-chevron-right" />
                    </Link>
                  </div>
                </div>
                <div className="testimonial-detail">
                  <div className="testimonial-head">
                    <ul className="star-list">
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                      <li><i className="fa fa-star" /></li>
                    </ul>
                    <h3 className="title">Best Treatment</h3>
                  </div>
                  <div className="testimonial-contant">
                    <div className="testimonial-text">
                      <p>
                        It is a long established fact that a reader will be distracted by the readable content
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        making it look like readable English.
                      </p>
                    </div>
                  </div>
                  <div className="testimonial-info">
                      <div className="dz-media">
                        <Image src={data.avatar} alt="avatar" />
                      </div>
                      <div className="clearfix">
                        <h5 className="testimonial-name">{data.name}</h5>
                        <span className="testimonial-position">Postgraduate Student</span>
                      </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="slider__pagination testimonial-slider__pagination2 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
            <div className="slider__current testimonial-slider__current" ref={currentSlideRef}>01</div>
            <div className="swiper-progress testimonial-pagination-swiper2"></div>
            <div className="slider__total testimonial-slider__total" ref={totalSlidesRef}>03</div>                 
          </div>
        </Swiper>
      </div>
     
      <Modal show={show} onHide={handleClose} centered  size={"lg"}>                
          <video controls style={{width:"100%"}} autoPlay>
              <source src="/assets/images/demo.mp4" type="video/mp4" />
          </video>
      </Modal>
    </>
  );
}

export default TestimonialSwiper;