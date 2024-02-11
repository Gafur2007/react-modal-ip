import "./What.scss";
import Marketing from "../Img/Icon(0).png";
import SEO from "../Img/Icon(1).png";
import Design from "../Img/Icon(2).png";
import Dev from "../Img/Icon(3).png";

export default function What() {
  return (
    <section className="what">
      <div className="container">
        <div className="what__info">
          <p className="what__text">What we do</p>
          <h3 className="what__heading">
            We Are Here To Help You Build Your Business
          </h3>
          <div className="what__p">
            Sed ut perspiciatis unde omnis iste natus error sit of the
            voluptatem accusantium lorem sit doloremque, totam rem aperiam,
            eaque ipsa quae ab illo invento veritatis quasi architecto beatae
            vitae dicta.
          </div>
          <button className="what__btn">Explore all service</button>
        </div>
        <div className="what__info1">
          <div className="what__seo">
            <img src={Marketing} alt="alt" width={71} height={71} />
            <h4 className="info__title">Digital Marketing</h4>
            <p className="info__text">
              That is the simply dummy text the printing and typesetting
              industry.
            </p>
            <a className="seo__link" href="http://localhost:3000/">Read more</a>
          </div>

          <div className="what__seo">
            <img src={SEO} alt="alt" width={71} height={71} />
            <h4 className="info__title">SEO</h4>
            <p className="info__text">
              That is the simply dummy text the printing and typesetting
              industry.
            </p>
            <a className="seo__link" href="http://localhost:3000/">Read more</a>
          </div>

          <div className="what__seo">
            <img src={Design} alt="alt" width={71} height={71} />
            <h4 className="info__title">UI UX Design</h4>
            <p className="info__text">
              That is the simply dummy text the printing and typesetting
              industry.
            </p>
            <a className="seo__link" href="http://localhost:3000/">Read more</a>
          </div>

          <div className="what__seo">
            <img src={Dev} alt="alt" width={71} height={71} />
            <h4 className="info__title">Web Development</h4>
            <p className="info__text">
              That is the simply dummy text the printing and typesetting
              industry.
            </p>
            <a className="seo__link" href="http://localhost:3000/">Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
