"use client"
import { Fragment, useState } from "react"
import { aboutus2data } from "@/constant/alldata";

const Cardblog = () =>{
    const [hover, setHover] = useState(1);
    return(
        <Fragment>
            {aboutus2data.map((data, i) => (
                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                    <div className={`content-bx style-8 shadow-sm box-hover ${hover === data.id ? 'active' : ''}`} onMouseEnter={() => setHover(data.id)}>
                        <h3 className="title">{data.title}</h3>
                        <p className="text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search.</p>
                    </div>
                </div>
            ))}
        </Fragment>
    )
}
export default Cardblog;