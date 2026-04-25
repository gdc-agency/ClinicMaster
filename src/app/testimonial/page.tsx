"use client"
import Image from "next/image";
import { testidata } from "@/constant/alldata";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import Link from "next/link";
import CompareSwiper from "@/component/CompareSwiper";
import Pagebanner from "@/component/Pagebanner";
import TestiSwiper from "@/component/TestimonialSwiper";
import Twentytwenty2 from "@/component/Twentytwenty2";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";


function Testimonial() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Testimonial' />
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row m-b10 loadmore-content">
                            {testidata.map((data, i) => {
                                let menuClass = data.classChange;
                                if (menuClass === 'testimonial-media') {
                                    return (
                                        <div className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" key={i}>
                                            <div className="testimonial-2">
                                                <div className={data.classChange}>
                                                    <Image src={data.image} alt="chnage" />
                                                    <div className="video-bx1 video-lg">
                                                        <Link href={"#"} scroll={false} onClick={handleShow} className="popup-youtube video-btn bg-primary">
                                                            <i className="fa fa-play" />
                                                        </Link>
                                                        <span className="text-black">Watch The Video</span>
                                                        <Link href={"#"} scroll={false} className="btn-link">
                                                            <i className="feather icon-chevron-right" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if (menuClass === 'testimonial-detail') {
                                    return (
                                        <div className="col-xl-4 col-md-6 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" key={i}>
                                            <div className="testimonial-2">
                                                <div className={data.classChange}>
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
                                                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a making it look like readable English.</p>
                                                        </div>
                                                    </div>
                                                    <div className="testimonial-info">
                                                        <div className="dz-media">
                                                            <Image src={data.image} alt="" />
                                                        </div>
                                                        <div className="clearfix">
                                                            <h5 className="testimonial-name">{data.name}</h5>
                                                            <span className="testimonial-position">Postgraduate Student</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                        <div className="dz-separator style-3">
                            <Link href={"#"} scroll={false} className="btn separator-badge dz-load-more wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s" rel="ajax/testimonial">Load More</Link>
                        </div>
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
            </main>
            <Footer />                        
           <Modal show={show} onHide={handleClose} centered  size={"lg"}>                
                <video controls style={{width:"100%"}} autoPlay>
                    <source src="/assets/images/demo.mp4" type="video/mp4" />
                </video>
            </Modal>
        </>
    )
}
export default Testimonial;