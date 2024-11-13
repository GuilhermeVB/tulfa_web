export const ColorVariation = () => {
    const sofaLeft = "./images/color_variation/left.png"
    const sofaRight = "./images/color_variation/right.png"

    return (
        <section className="colorvariation_container">
            <div className="colorvariation_left">
                <img src={sofaLeft} alt="Sofa" />
                <div className="colorvariation_left_filter">
                    <button className="colorvariation_left_filter_one">
                        <div className="first_semi_circulo" />
                    </button>
                    <button className="colorvariation_left_filter_two">
                        <div className="second_semi_circulo" />
                    </button>
                    <button className="colorvariation_left_filter_three">
                        <div className="third_semi_circulo" />
                    </button>
                </div>
            </div>
            <div className="colorvariation_right">
                <img src={sofaRight} alt="Sofa zoom" />
            </div>
        </section>
    );
}