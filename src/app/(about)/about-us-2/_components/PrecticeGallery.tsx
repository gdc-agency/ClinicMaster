"use client"
import Link from 'next/link';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { IMAGES } from '@/constant/theme';

const PrecticeGallery = () =>{
    return(
        <>
            <LightGallery
                zoom={true}
                thumbnail={true}               
                plugins={[lgThumbnail, lgZoom]}
                selector='.lightimg'
            >
                <div className="row" id="lightgallery">
                    <div className="col-lg-6">
                        <div className="dz-media height-md radius-xl m-b20 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <a href={IMAGES.about12.src} data-src={IMAGES.about12.src} className="lg-item lightimg">
                                <Image src={IMAGES.about12} alt="about12" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="dz-media height-xs radius-xl m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <a href={IMAGES.about13.src} data-src={IMAGES.about13.src} className="lg-item lightimg">
                                <Image src={IMAGES.about13} alt="about13" />
                            </a>
                        </div>
                        <div className="dz-media height-xs radius-xl m-b20 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                            <a href={IMAGES.about14.src} data-src={IMAGES.about14.src} className="lg-item lightimg">
                                <Image src={IMAGES.about14} alt="about14" />
                            </a>
                        </div>
                    </div>
                </div>
            </LightGallery>
        </>
    )
}
export default PrecticeGallery;