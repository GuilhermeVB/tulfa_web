import { useEffect, useState } from "react";

export const ColorVariation = () => {
    const [currentColor, setCurrentColor] = useState([])
    const [selectedColor, setSelectedColor] = useState(0)

    useEffect(() => {
        setCurrentColor([
            "./images/color_variation/orange_sofa.png",
            "./images/color_variation/violet_sofa.png",
            "./images/color_variation/yellow_sofa.png"
        ])
    }, [])

    function changeColor(index) {
        setSelectedColor(index)
    }

    return (
        <section className="colorvariation_container">
            <div className="colorvariation_left">
                <img src={currentColor[selectedColor]} alt="Sofa" />
            </div>
            <div className="colorvariation_left_filter">
                <button className="colorvariation_left_filter_one" onClick={() => { changeColor(0) }}>
                    <div className="first_semi_circulo" />
                </button>
                <button className="colorvariation_left_filter_two" onClick={() => { changeColor(1) }}>
                    <div className="second_semi_circulo" />
                </button>
                <button className="colorvariation_left_filter_three" onClick={() => { changeColor(2) }}>
                    <div className="third_semi_circulo" />
                </button>
            </div>
            <div className="colorvariation_right">
                <img src={currentColor[selectedColor]} alt="Sofa zoom" />
            </div>
        </section>
    );
}