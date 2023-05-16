import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="content">
          <div className="text-content">
            <h1>SALES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
              quam sit iusto possimus voluptatem praesentium? Aperiam maiores
              debitis reiciendis neque quibusdam dolore, magni similique vitae
              doloribus aliquam voluptatem sint voluptatibus nemo earum.
            </p>
            <div className="ctas">
              <div className="banner-cta">Read More</div>
              <div className="banner-cta v2">Shop Now</div>
            </div>
          </div>
          <img src={BannerImg} alt="" className="img-tag" />
        </div>
      </div>
    </>
  );
};

export default Banner;
