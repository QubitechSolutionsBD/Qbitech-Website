import web from "../../assets/services/banner/web.jpg";
import software from "../../assets/services/banner/software.jpg";
import hardware from "../../assets/services/banner/hardware.jpg";
import branding from "../../assets/services/banner/branding.jpg";
import java from "../../assets/services/tools/java.svg";
import react from "../../assets/services/tools/react.svg";
import swift from "../../assets/services/tools/swift.svg";
import objectivec from "../../assets/services/tools/objectivec.svg";

// web services
const webservices = [
  {
    head: "Website Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Web Application Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Website Design & Redisgn",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "E-commerce site development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
];

// software services
const softwareservices = [
  {
    head: "iOS App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Android App Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Digital Service UX Research",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Digital Service UI Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Native and Cross Platform Service Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "Unity Game Development",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
];

// software services
const hardwareServices = [
  {
    head: "Product/Idea Prototyping",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "IoT Based Monitoring System",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
  {
    head: "IoT Based automation System",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
  },
];

// branding & Solutions
const marketingServices = [
    {
      head:  "Building a Brand Identity From the Ground Up",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      head: "Rebranding Established Business",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
      head: "Establishing Brand Positioning and Messaging",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
        head: "Creating a Brand Identity,Strategy and Guidelines",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
        head:  "Mapping Out a Social Media Strategy",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
    {
        head:  "Writing Copy for Websites and Other Digital Assets",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget",
    },
  ];

// setup data
export const setAssetsForServices = (
  path,
  setServices,
  setHeading,
  setBannerImage,
  setBannerText,
  setDesc,
  setTools
) => {
  if (path === "web") {
    setHeading("Website Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${web}) no-repeat center center / cover`);
    setServices(webservices);
    setTools([ java, java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec,]);

  } else if (path === "software") {
    setHeading("Software Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${software}) no-repeat center center / cover`);
    setServices(softwareservices);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec ]);

  } else if (path === "hardware") {
    setHeading("Hardware Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${hardware}) no-repeat center center / cover`);
    setServices(hardwareServices);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec,]);

  } else {
    setHeading("Branding and Marketing Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${branding}) no-repeat center center / cover`);
    setServices(marketingServices);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec]);
  }
};


// carousel settings
export const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    speed: 900,
    autoplaySpeed: 2500,
    dotsClass: "slick-dots slick-thumb",
    customPaging: (i) => {
      return (
        <div className="custom-dots">
          <div className="box"></div>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
        },
      },
    ],
  };