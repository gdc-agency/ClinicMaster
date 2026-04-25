import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import AppointmentData from "@/component/AppointmentData";
import CompareSwiper from "@/component/CompareSwiper";
import Pagebanner from "@/component/Pagebanner";
import PricingPlan from "@/component/PricingPlan";
import { IMAGES } from "@/constant/theme";
import Question from "@/component/Question";
import Twentytwenty2 from "@/component/Twentytwenty2";

function PricingTable() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Pricing Table' />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Flexible Pricing Plans</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                        <PricingPlan />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <Question />
            </main>
            <Footer />            
        </>
    )
}
export default PricingTable;