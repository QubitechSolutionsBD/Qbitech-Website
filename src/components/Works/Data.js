// TOOLS IMAGE
import reactLogo from "../../assets/pageservice/react.png";
import nodeLogo from "../../assets/pageservice/node.png";
import reduxtLogo from "../../assets/pageservice/redux.png";
import firebaseLogo from "../../assets/pageservice/firebase.png";
import mongoLogo from "../../assets/pageservice/mongo.png";
import vscodeLogo from "../../assets/pageservice/vscode.png";
import flutterLogo from "../../assets/pageservice/flutter.png";
import java from "../../assets/pageservice/java.png";

// BANNER IMAGE
import obosorBannerImage from "../../assets/pageCaseStudy/oboshor/bannerImage.png";
import musafirkhanaBannerImage from "../../assets/pageCaseStudy/musafirkhana/bannerImage.png";

// PROJECT THUMBNAIL
import obothumb from "../../assets/pageCaseStudy/oboshor/thumbnail.jpg";
import musathumb from "../../assets/pageCaseStudy/musafirkhana/thumbnail.jpg";

// PAGES
// ................... Obosor ...................
import slide1 from "../../assets/pageCaseStudy/oboshor/slide1.jpg";
import slide2 from "../../assets/pageCaseStudy/oboshor/slide2.jpg";
import slide3 from "../../assets/pageCaseStudy/oboshor/slide3.jpg";
import slide4 from "../../assets/pageCaseStudy/oboshor/slide4.jpg";
// ................... Musafirkhana ...................
import slide5 from "../../assets/pageCaseStudy/musafirkhana/1.png";
import slide6 from "../../assets/pageCaseStudy/musafirkhana/2.png";
import slide7 from "../../assets/pageCaseStudy/musafirkhana/3.png";
import slide8 from "../../assets/pageCaseStudy/musafirkhana/4.png";
import slide9 from "../../assets/pageCaseStudy/musafirkhana/5.png";


export const works = [
  // ///////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////
  {
    id: 1,
    name: `Obosor`,
    subName: `An  online book shop service`,
    type: `web`,
    ShortDescription: `Obosor is a community-based book shop founded in 2018. They have won the Bangabandhu Innovation Grant 2019. Obosor aims to promote reading and create readers who will lead Bangladesh in the future with their knowledge and creativity.`,
    timeline: `July 2021`,
    client: `Obosor`,
    deliverables: "Web E-commerce management",
    tools: [ 
      {id:1, name: reactLogo},
      {id:2, name: reduxtLogo},
      {id:3, name: nodeLogo},
      {id:4, name: firebaseLogo},
      {id:5, name: mongoLogo},
      {id:6, name: vscodeLogo}
    ],
    bannerImage: obosorBannerImage,
    thumbnail: obothumb,
    features: [
      {id:1, feature: "Individualized accounts for each user."},
      {id:2, feature: "Tracking the order to get real-time status updates from the restaurant to the user's doorstep."},
      {id:3, feature: "Users can plan every meal through the timeline."},
      {id:4, feature: "Separate admin application with customization."},
      {id:5, feature: "Full service management from the admin application."},
    ],
    solutions: [
      {id:1, solution: "A seamless mobile application that allows users to order food without any hassles at all."},
      {id:2, solution: "A completely configurable online admin application for keeping track of orders & overall insights."},
      {id:3, solution: "Planning the meal throughout the day or week without worrying about anything."},
    ],
    impacts: [
      {id:1, impact: "Musafir Khana is experiencing an increase in sales after interacting with users through the app."},
      {id:2, impact: "A simple UI interface gives an increase in user retention."},
      {id:3, impact: "Changing their services & features according to the user feedback from the app."},
      {id:4, impact: "The company's credibility is increasing every day due to their online app based presence."},
    ],
    slides: [
      {id: 1, slide: slide1},
      {id: 2, slide: slide2},
      {id: 3, slide: slide3},
      {id: 4, slide: slide4},
    ]
  },

  // ///////////////////////////////////////////////////////////////////////
  // ///////////////////////////////////////////////////////////////////////
  {
    id: 2,
    name: `Musafir Khana`,
    type: `app`,
    ShortDescription: `Musafir Khana is a food delivery service that delivers home-cooked meals and delights to the users. Mainly Targeting corporate clients and offices.`,
    timeline: `July 2021`,
    client: `Musafir Khana`,
    deliverables: `App, E-Commerce, Management`,
    industry: `Hijibiji`,
    tools: [ 
      {id:1, name: java},
      {id:2, name: flutterLogo},
      {id:3, name: firebaseLogo},
    ],
    bannerImage: musafirkhanaBannerImage,
    thumbnail: musathumb,
    features: [
      {id:1, feature: "Personalized accounts for individual users."},
      {id:2, feature: "Recommending books according to the genre."},
      {id:3, feature: "Order tracking system for the users."},
      {id:4, feature: "Customers can pay their invoice bills online."},
      {id:5, feature: "Fully featured admin panel for stock and sales management."},
      {id:6, feature: "Integration of live chat feature for customer support."},
      {id:7, feature: "Integration of live chat feature for customer support."},
    ],
    solutions: [
      {id:1, solution: "A fully digital ecosystem through a website & mobile application using the best practices for better user experience."},
      {id:2, solution: "A fully customized web admin interface for monitoring sales & stocks."},
      {id:3, solution: "Emphasized important factors & filtering options to help users narrow down the choices to give better recommendations on books."},
    ],
    impacts: [
      {id:1, impact: "Obosor has generated more sales after engaging customers through their websites."},
      {id:2, impact: "Overall customer engagement has increased as users can interact with the website instead of waiting for their reply from social media."},
      {id:3, impact: "The team can get a better insight into what their inventory looks like & sales data."},
      {id:4, impact: "Getting positive feedback coming through the simple user interface of the website and app."},
      {id:5, impact: "The company's credibility has increased due to more engagements and online presence."},
    ],
    slides: [
      {id: 1, slide: slide5},
      {id: 2, slide: slide6},
      {id: 3, slide: slide7},
      {id: 4, slide: slide8},
      {id: 5, slide: slide9},
    ]
  },
];

export const setupDataForWeb = (
  id,
  setName,
  setService,
  setRoles,
  setBannerImage,
  setCompanyDescHead,
  setCompanyDescText,
  setImageOfapage,
  setSolutionDescHead,
  setSolutionDescText,
  setTabletImage,
  setMobileImage1,
  setMobileImage2,
  setMobileImage3,
  setCollapsedImage,
  setFonts,
  setColors,
  setMoreWorks,
  setUsedColors
) => {
  setName(works[id - 1].name);
  setService(works[id - 1].service);
  setRoles(works[id - 1].rolls);
  setBannerImage(works[id - 1].bannerImage);
  setCompanyDescHead(works[id - 1].comapnyDescHead);
  setCompanyDescText(works[id - 1].comapnyDescText);
  setImageOfapage(works[id - 1].setImageOfapage);
  setSolutionDescHead(works[id - 1].solutionHead);
  setSolutionDescText(works[id - 1].solutionText);
  setTabletImage(works[id - 1].tabImage);
  setMobileImage1(works[id - 1].mobileImage1);
  setMobileImage2(works[id - 1].mobileImage2);
  setMobileImage3(works[id - 1].mobileImage3);
  setCollapsedImage(works[id - 1].collapsedImage);
  setFonts(works[id - 1].fonts);
  setColors(works[id - 1].colors);
  setMoreWorks(works[id - 1].moreworks);
  setUsedColors(works[id - 1].usedcolors);
};

export const findType = (id, setType) => {
  setType(works[id - 1].type);
};

export const setupDataForApp = (
  id,
  setName,
  setService,
  setRoles,
  setBannerImage,
  setCompanyDescHead,
  setCompanyDescText,
  setSolutionDescHead,
  setSolutionDescText,
  setFeatures,
  setAchievementHead,
  setAchievementText,
  setImageSetOne,
  setImageSetTwo,
  setImageSetThree,
  setMoreWorks,
  setUsedColors
) => {
  setName(works[id - 1].name);
  setService(works[id - 1].service);
  setRoles(works[id - 1].rolls);
  setBannerImage(works[id - 1].bannerImage);
  setCompanyDescHead(works[id - 1].comapnyDescHead);
  setCompanyDescText(works[id - 1].comapnyDescText);
  setSolutionDescHead(works[id - 1].solutionHead);
  setSolutionDescText(works[id - 1].solutionText);
  setFeatures(works[id - 1].features);
  setAchievementHead(works[id - 1].achievementHead);
  setAchievementText(works[id - 1].achievementText);
  setImageSetOne(works[id - 1].imageSet1);
  setImageSetTwo(works[id - 1].imageSet2);
  setImageSetThree(works[id - 1].imageSet3);
  setMoreWorks(works[id - 1].moreworks);
  setUsedColors(works[id - 1].usedcolors);
};
