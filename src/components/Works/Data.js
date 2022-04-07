// TOOLS IMAGE
import reactLogo from "../../assets/pageservice/react.png";
import nodeLogo from "../../assets/pageservice/node.png";
import reduxtLogo from "../../assets/pageservice/redux.png";
import firebaseLogo from "../../assets/pageservice/firebase.png";
import mongoLogo from "../../assets/pageservice/mongo.png";
import vscodeLogo from "../../assets/pageservice/vscode.png";

// BANNER IMAGE
import obosorBannerImage from "../../assets/pageCaseStudy/oboshor/bannerImage.png";

// PROJECT THUMBNAIL
import obothumb from "../../assets/pageCaseStudy/oboshor/thumbnail.jpg";
import musathumb from "../../assets/pageCaseStudy/musafirkhana/thumbnail.jpg";

// PAGES
// ................... Obosor ...................
import slide1 from "../../assets/pageCaseStudy/oboshor/slide1.png";


export const works = [
  {
    id: 1,
    name: `Obosor`,
    subName: `An  online book shop service`,
    type: `web`,
    ShortDescription: `an on-demand streaming service for rather unconventional movies, created under the umbrella of a  major german television network. while working.`,
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
      {id:1, feature: "Personalized accounts for individual users"},
      {id:2, feature: "Detect colors in real-time and from a photograph"},
      {id:3, feature: "Demo painting in real-time and photograph"},
      {id:4, feature: "Paint preset images"},
      {id:5, feature: "Choose the favorite color from a wide range of shades"},
      {id:6, feature: "Painting service request from customers"},
    ],
    solutions: [
      {id:1, solution: "Berger Value Club is the first digital painting platform in Bangladesh where user can visualize their walls using an extensive collection of over 5,000 shades. User can virtually apply different shades of colour to any surface in real-time, on captured images and preset images."},
      {id:2, solution: "Our advanced machine learning feature helps the user match and find the colour shade name in real-time or any captured image."},
      {id:3, solution: "Berger Value Club is the first digital painting platform in Bangladesh where user can visualize their walls using an extensive collection of over 5,000 shades. User can virtually apply different shades of colour to any surface in real-time, on captured images and preset images."},
      {id:4, solution: "Our advanced machine learning feature helps the user match and find the colour shade name in real-time or any captured image."},
    ],
    impacts: [
      {id:1, impact: "Berger Value Club is the first digital painting platform in Bangladesh where user can visualize their walls using an extensive collection of over 5,000 shades. User can virtually apply different shades of colour to any surface in real-time, on captured images and preset images."},
      {id:2, impact: "Berger Value Club is the first digital painting platform in Bangladesh where user can visualize their walls using an extensive collection of over 5,000 shades. User can virtually apply different shades of colour to any surface in real-time, on captured images and preset images."},
      {id:3, impact: "Our advanced machine learning feature helps the user match and find the colour shade name in real-time or any captured image."},
      {id:4, impact: "Our advanced machine learning feature helps the user match and find the colour shade name in real-time or any captured image."},
    ],
    slides: [
      {id: 1, slide: slide1},
      {id: 2, slide: slide1},
      {id: 3, slide: slide1},
      {id: 4, slide: slide1},
    ]
  },
  {
    id: 2,
    name: `Musafir Khana`,
    type: `app`,
    ShortDescription: `an on-demand streaming service for rather unconventional movies, created under the umbrella of a 
                       major german television network. while working.`,
    timeline: `July 2021`,
    client: `Obosor`,
    deliverables: [`Web, `, `E-Commerce, `, `Management`],
    industry: `Hijibiji`,
    tools: [
      reactLogo,
      reduxtLogo,
      nodeLogo,
      firebaseLogo,
      mongoLogo,
      vscodeLogo,
    ],
    bannerImage: obosorBannerImage,
    solutions: `prior to the actual implementation by in-house developers, an interactive prototype was provided early on.
                in this way, topics such as user flow or motion patterns could already be experienced hands-on during the
                conceptual stages.`,
    thumbnail: musathumb,
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
