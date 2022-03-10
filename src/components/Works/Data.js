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
import p1 from "../../assets/pageCaseStudy/oboshor/p1.png";
import p2 from "../../assets/pageCaseStudy/oboshor/p2.png";
import p3 from "../../assets/pageCaseStudy/oboshor/p3.png";
import p4 from "../../assets/pageCaseStudy/oboshor/p4.png";

export const works = [
  {
    id: 1,
    name: `Obosor`,
    type: `web`,
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
    desktopImages1: [p3, p1, p2, p4, p3],
    desktopImages2: [p2, p1, p4, p3, p2],
    solutions: `prior to the actual implementation by in-house developers, an interactive prototype was provided early on.
                in this way, topics such as user flow or motion patterns could already be experienced hands-on during the
                conceptual stages.`,
    thumbnail: obothumb,
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
    desktopImages1: [p3, p1, p2, p4, p3],
    desktopImages2: [p2, p1, p4, p3, p2],
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
