import AppointmentData from "@/component/AppointmentData";
import Pagebanner from "@/component/Pagebanner";
import Question from "@/component/Question";
import Servicesdata from "@/component/Servicesdata";
import WhyChoose from "@/component/WhyChoose";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Services() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Services' />
                <section className="content-inner gradient-primary">
                    <div className="container">
                        <div className="row">
                            <Servicesdata />
                        </div>
                    </div>
                </section>
                <section className="content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg4.src})`, backgroundSize: 'cover', }}>
                    <div className="container">
                        <WhyChoose />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <Question />
            </main>
            <Footer />            
        </>
    )
}
export default Services;