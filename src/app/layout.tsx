import type { Metadata } from "next";
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/effect-fade';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'react-before-after-slider-component/dist/build.css';
import '../../public/assets/css/style.css'
import ScrolltoTop from "@/component/ScrolltoTop";

export const metadata: Metadata = {
    title: "ClinicMaster - Health & Medical NextJs Template",
    description: "ClinicMaster is a clean and modern Health & Medical Next.js template. Ideal for clinics, hospitals, and healthcare providers, with responsive design, booking system, and customizable components.",
    twitter: {      
      title: "ClinicMaster – Health & Medical Next.js Template | DexignZone",
      description:
        "Launch a modern and responsive healthcare website with ClinicMaster – a Next.js template crafted for medical professionals and clinics.",
      images: ["https://clinicmaster.dexignzone.com/next/social-image.png"],
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme-color="skin-2">
      <head>
        <meta property="og:title" content="ClinicMaster – Health & Medical Next Template | DexignZone" />        
        <meta property="og:image" content="https://clinicmaster.dexignzone.com/next/social-image.png" />
        <meta property="og:url" content="https://clinicmaster.dexignzone.com/next" />
        <meta property="og:type" content="website" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body id="bg" >
        <div className="page-wraper">
          {children}
        </div>
        <ScrolltoTop />
      </body>
    </html>
  );
}
