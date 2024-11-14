export const SizeVar = () => {
    const object = './images/size_var/object.png'

    return (
        <section className="sizevar_container">
                <div className="sizevar_images_large">
                    <span className="sizevar_images_span">L</span>
                    <img src={object} alt="" />
                </div>
                <div className="sizevar_images_meddium">
                    <span className="sizevar_images_span">M</span>
                    <img src={object} alt="" />
                </div>
                <div className="sizevar_images_small">
                    <span className="sizevar_images_span">S</span>
                    <img src={object} alt="" />
                </div>
                <span className="sizevar_span">
                    Lorem Ipsum Dolor Sit Amet
                </span>
        </section>
    );
}