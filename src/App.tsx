import classes from "./App.module.css";
import TopNav from "./components/top-nav/TopNav";
import LogoDiv from "./components/logo-div";
import HeaderText from "./components/header-text";
import OurServices from "./components/our-services";
import CardElement from "./components/card-element/CardElement";
import TextSectionOne from "./components/text-section-one";
import TextSectionTwo from "./components/text-section-two";
import SliderBar from "./components/slider-bar";
import OurLatestArticle from "./components/our-latest-article";

import headerImage from "./assets/header_illustration_1.png";
import search_img from "./assets/svg_cards/search.svg";
import pharmacy_img from "./assets/svg_cards/pharmacy.svg";
import consultation_img from "./assets/svg_cards/consultation.svg";
import details_img from "./assets/svg_cards/details.svg";
import emergency_img from "./assets/svg_cards/emergency.svg";
import tracking_img from "./assets/svg_cards/tracking.svg";
import Footer from "./components/footer";
import OutlinedButton from "./components/outlined-button";
import sectionOne_img from "./assets/text_section_one.png";
import sectionTwo_img from "./assets/text_section_two.png";
import edward from "./assets/edward.png";
import dots from "./assets/svg_arrows/dots.svg";
import desease_img from "./assets/latest_article_image1.png";
import medicines_img from "./assets/latest_article_image2.png";
import healthy_skin_img from "./assets/latest_article_image3.png";

function App() {
  const customers = [
    {
      name: "Edward Newgate",
      job: "Founder Circle",
      review:
        '"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely"',
      img: edward,
    },
    {
      name: "Edward Newgate",
      job: "Developer",
      review: "Edward - developer",
      img: edward,
    },
    {
      name: "Edward Newgate",
      job: "Developer",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: edward,
    },
  ];
  const articles = [
    {
      title: "Disease detection, check up in the laboratory",
      subtitle:
        "In this case, the role of the health laboratory is very important to do a disease detection...",
      img: desease_img,
    },
    {
      title: "EHerbal medicines that are safe for consumption",
      subtitle:
        "Herbal medicine is very widely used at this time because of its very good for your health...",
      img: medicines_img,
    },
    {
      title: "Natural care for healthy facial skin",
      subtitle:
        "A healthy lifestyle should start from now and also for your skin health. There are some...",
      img: healthy_skin_img,
    },
  ];
  return (
    <>
      <div className={classes.padding_block}>
        <header className={classes.header}>
          <div className={classes.headerRow}>
            <LogoDiv name="T" />
            <TopNav
              arr={[
                "Home",
                "Find a doctor",
                "Apps",
                "Testimonials",
                "About us",
              ]}
            />
          </div>
          <div className={classes.headerRow}>
            <HeaderText
              arr={[
                "Virtual healthcare for you",
                "Our service provides progressive, and affordable healthcare, accessible on mobile and online for everyone",
                "Consult today",
              ]}
            />
            <div className={classes.imgBox}>
              <img src={headerImage} alt="Header Picture" />
            </div>
          </div>
        </header>

        <OurServices>
          <CardElement
            title="Search doctor"
            subtitle="Choose your doctor from thousands of specialist, general, and trusted hospitals"
            logo={search_img}
          />
          <CardElement
            title="Online pharmacy"
            subtitle="Buy  your medicines with our mobile application with a simple delivery system"
            logo={pharmacy_img}
          />
          <CardElement
            title="Consultation"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={consultation_img}
          />
          <CardElement
            title="Details info"
            subtitle="Free consultation with our trusted doctors and get the best recomendations"
            logo={details_img}
          />
          <CardElement
            title="Emergency care"
            subtitle="You can get 24/7 urgent care for yourself or your children and your lovely family"
            logo={emergency_img}
          />
          <CardElement
            title="Tracking"
            subtitle="Track and save your medical history and health data "
            logo={tracking_img}
          />
        </OurServices>
        <div className={classes.outlinedButton_learnMore}>
          <OutlinedButton text="Learn more" />
        </div>
        <TextSectionOne
          arr={[
            "Leading healthcare providers",
            "We provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
            "Learn more",
          ]}
          img={sectionOne_img}
        />
        <TextSectionTwo
          arr={[
            "Download our mobile apps",
            "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
            "Download  🠗",
          ]}
          img={sectionTwo_img}
        />
        <SliderBar
          arr={customers}
          cardChildren={<img className={classes.dotsRight2} src={dots} />}
          children={undefined}
        ></SliderBar>

        <OurLatestArticle arr={articles} />
        <div className={classes.outlinedButton_viewAll}>
          <OutlinedButton text="View all" />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
