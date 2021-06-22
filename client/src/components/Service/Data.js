import html from "../../assets/pageservice/html5.png";
import css from "../../assets/pageservice/css3.png";
import js from "../../assets/pageservice/js.png";
import react from "../../assets/pageservice/react.png";
import redux from "../../assets/pageservice/redux.png";
import firebase from "../../assets/pageservice/firebase.png";
import node from "../../assets/pageservice/node.png";
import php from "../../assets/pageservice/php.png";
import mysql from "../../assets/pageservice/mysql.png";
import mongo from "../../assets/pageservice/mongo.png";
import java from "../../assets/pageservice/java.png";
import kotlin from "../../assets/pageservice/kotlin.png";
import unity from "../../assets/pageservice/unity.png";

const webdevelopmentData = {
  bannerHeading: ["Web", "Development"],
  bannerText:
    "With elegant performance across every platform, our modern web frameworks to give your business a one-stop web solution service.",
  offerHeading:
    "We design & develop high-end marketing websites for ambitious brands.",
  offerTexts: [
    "Here at Qubitech we excel at giving you a one-stop web solution service to elevate your brand.",
    "Our development experts emphasize on charismatic look, intuitive layout. Our primary focus is to elevate your brand through a strong online presence. We begin our service through extensive brand research so that we can find the perfect user experience that delivers your brands persona.",
    "Taking time in understanding your business needs & goals is the key to ensure you get the best possible user interface. Our UI/UX team makes sure we go forward with your users in mind. Our development process ensures your website is perfectly visible & user-friendly on all screen sizes across all platforms & devices. So that, a busy customer never lose to view your website on a computer with a fully responsive experience across all devices.",
    "Even if you have an outdated website, we can create a professional looking website that can redefine your online presence. You can see from our portfolio what our dedicated team is capable of across all industries.",
    "We offer flexible services to ensure that your web platform is aligned with your business initiatives and marketing goals. From custom code, to seamless integration, to exclusive portal functionality, our dedicated team of developers have the capabilities to take your website to the next level.",
  ],
  offers: [
    "FRONTEND DEVELOPMNET",
    "BACKEND DEVELOPMENT",
    "RESPONSIVE WEB DESIGN",
    "WEBSITE RE-DESIGN",
    "E-COMMERCE SITE DEVELOPMENT",
  ],
  technologies: [
    html,
    css,
    js,
    react,
    redux,
    firebase,
    node,
    php,
    mongo,
    mysql,
  ],
  works: [1, 5, 7, 9, 11, 12],
};

const softwaredevelopmentData = {
  bannerHeading: ["Software", "Development"],
  bannerText:
    "Streamline your business needs through our comprehensive mobile software solutions service to meet the needs of modern day industry.",
  offerHeading:
    "We build high-end, secured iOS, android & desktop softwares for our clients.",
  offerTexts: [
    "In a world where business is driven by the amalgamation of industry & commerce, overcoming real world contexts & challenges is the key trajectory to growth.",
    "A well-designed software solution will save a lot of time in the various steps used in your business, keep your tasks organized, and further improve your management system. All in all will give a huge advantage over the competition. We will shape your business as needed. To meet the modern day challenges of various enterprises & startups, we offer a large array of software applications.",
    "Our talented team of developers are ready to go beyond boundaries regardless of the platforms involved. Before going to the development phase, we will study your brand intensively with you so that any of your goals is not missed. Our communication is transparent with all our clients to capture all the information into the workflow.",
    "After all the information & design has been meet with, we go further to integrate your business model through an agile process. From iOS, android & desktop software development to creating native & cross platform design, we are here to seamlessly work together to help your business grow.",
  ],
  offers: [
    "iOS APP DEVELOPMNET",
    "ANDROID APP DEVELOPMENT",
    "DIGITAL SERVICE UX RESEARCH",
    "DIGITAL SERVICE Ui DESIGN",
    "NATIVE & CROSS PLATFORM DESIGN",
    "UNITY GAME DEVELOPMENT",
  ],
  technologies: [
    java,
    kotlin,
    js,
    react,
    unity,
    firebase,
    node,
    php,
    mongo,
    mysql,
  ],
  works: [1, 5, 7, 9, 11, 12],
};

export const setupData = (
  path,
  setBannerHeading,
  setBannerText,
  setOfferHeading,
  setOfferText,
  setOffers,
  setTechnologies,
  setWorks
) => {
  if (path === "web-development") {
    setBannerHeading(webdevelopmentData.bannerHeading);
    setBannerText(webdevelopmentData.bannerText);
    setOfferHeading(webdevelopmentData.offerHeading);
    setOfferText(webdevelopmentData.offerTexts);
    setOffers(webdevelopmentData.offers);
    setTechnologies(webdevelopmentData.technologies);
    setWorks(webdevelopmentData.works);
  } else if (path === "software-development") {
    setBannerHeading(softwaredevelopmentData.bannerHeading);
    setBannerText(softwaredevelopmentData.bannerText);
    setOfferHeading(softwaredevelopmentData.offerHeading);
    setOfferText(softwaredevelopmentData.offerTexts);
    setOffers(softwaredevelopmentData.offers);
    setTechnologies(softwaredevelopmentData.technologies);
    setWorks(softwaredevelopmentData.works);
  }
};
