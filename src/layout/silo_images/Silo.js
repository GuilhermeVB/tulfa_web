import { useState } from "react";
import { Button } from "../../components/button/Button";
import { SiloOpen } from "../../components/silo_open/SiloOpen";

export const Silo = () => {
    const [sliderStatus, setSliderStatus] = useState(false)

    function toggleStatus() {
        setSliderStatus(!sliderStatus)
    }

    return (
        <section className="silo_container">
            <div className="silo_content">
                <h3 className="silo_content_heading">
                    Product Silos
                </h3>
                <Button buttonClick={toggleStatus} />
            </div>
            <img className="silo_image" src="/images/silo_images/lampshade.png" alt="Lampshade" />
            {
                sliderStatus && <SiloOpen buttonClick={toggleStatus} image="/images/silo_images/lampshade.jpg" />
            }
        </section>
    );
}