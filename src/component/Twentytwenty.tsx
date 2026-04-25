"use client"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';

import { IMAGES } from '../constant/theme';
import Link from 'next/link';

const FIRST_IMAGE  = {
    imageUrl: IMAGES.beforecomapare1.src,
};
const SECOND_IMAGE  = {
    imageUrl: IMAGES.aftercomapare1.src,
};
function Twentytwenty() {
    return (
        <>
            <div className="twentytwenty-center wow bounceIn" data-wow-delay="1.0s" data-wow-duration="0.8s">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="twentytwenty-box shadow">
                                <div className="twentytwenty-container">
                                    <ReactBeforeSliderComponent firstImage={FIRST_IMAGE} secondImage={SECOND_IMAGE} />
                                </div>
                                <Link href="/about-us-2" className="btn btn-white rounded btn-sm position-absolute end-0 bottom-0 me-md-4 mb-md-4 me-2 mb-2">View All</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Twentytwenty;