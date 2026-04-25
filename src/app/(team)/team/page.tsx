import BestDentist from "@/component/BestDentist";
import HighlyTeam from "@/component/HighlyTeam";
import MapForm from "@/component/MapForm";
import Pagebanner from "@/component/Pagebanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

function Team() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Team' />
                <section className="content-inner">
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <section className="content-inner p-t50 bg-light">
                    <div className="container">
                        <BestDentist />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <MapForm />
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default Team;