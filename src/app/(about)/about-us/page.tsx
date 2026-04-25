
import { Fragment } from "react";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import BestDentist from "@/component/BestDentist";
import ClientSwiper from "@/component/ClientSwiper";
import MapForm from "@/component/MapForm";
import Pagebanner from "@/component/Pagebanner";
import TestiSwiper from "@/component/TestimonialSwiper";
import WantApponiment from "@/component/WantApponiment";
import Wecare from "@/component/Wecare";
import Wecare2 from "@/component/Wecare2";
import WhyChoose from "@/component/WhyChoose";
import { IMAGES } from "@/constant/theme";


function AboutUsPage() {
    return(
        <Fragment>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='About Us' />
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }}>
                    <div className="container">
                        <Wecare />
                        <Wecare2 />
                    </div>
                </section>
                <section className="content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg4})`, backgroundSize: 'cover', }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <section className="content-inner p-t50 bg-light">
                    <div className="container">
                        <BestDentist />
                    </div>
                </section>
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <MapForm />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />
        </Fragment>
    )
}
export default AboutUsPage;