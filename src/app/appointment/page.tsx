import AppointmentData from "@/component/AppointmentData";
import Pagebanner from "@/component/Pagebanner";
import Wecare2 from "@/component/Wecare2";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import ContactMap from "@/component/ContactMap";


function Appointment() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Appointment' />
                <section className="content-inner overlay-primary-gradient-light overlay-opacity-10" style={{ backgroundImage: `url(${IMAGES.bg4.src})` }}>
                    <div className="container">
                        <Wecare2 />
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <ContactMap />
            </main>
            <Footer />            
        </>
    )
}
export default Appointment;