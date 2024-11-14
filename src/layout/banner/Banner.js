export const Banner = () => {
    const video = "/images/banner/background.mp4"

    return (
        <section className="banner_container">
            <video className="banner_video" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </section>
    );
}