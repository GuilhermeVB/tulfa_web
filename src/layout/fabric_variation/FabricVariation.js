import { useEffect, useState } from "react"

export const FabricVariation = () => {
    const [currentFabric, setCurrentFabric] = useState([])
    const [selectedFabric, setSelectedFabric] = useState(0)

    useEffect(() => {
        setCurrentFabric([
            "./images/fabric_variation/blue_sofa.png",
            "./images/fabric_variation/gray_sofa.png",
            "./images/fabric_variation/violet_sofa.png"
        ])
    }, [])

    function changeFabric(index) {
        setSelectedFabric(index)
    }

    return (
        <section className="fabricvariation_container">
            <div className="fabricvariation_left">
                <img src={currentFabric[selectedFabric]} alt="Fabric" />
            </div>
            <div className="fabricvariation_right">
                <img src={currentFabric[selectedFabric]} alt="Fabric" />
                <div className="fabrics">
                    <button className="fabrics_first" onClick={() => { changeFabric(0) }}>
                        Prints
                        <div className="fabrics_figure">
                            <img src={currentFabric[0]} alt="First fabric" />
                        </div>
                    </button>
                    <button onClick={() => { changeFabric(1) }}>
                        Leathers
                        <div className="fabrics_figure">
                            <img src={currentFabric[1]} alt="Second fabric" />
                        </div>
                    </button>
                    <button className="fabrics_last" onClick={() => { changeFabric(2) }}>
                        Embroidery
                        <div className="fabrics_figure">
                            <img src={currentFabric[2]} alt="Three fabric" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}