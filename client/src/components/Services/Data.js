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
    setDesc("Here at Qubitech we excel at giving you a one-stop web solution service to elevate your brand. Our development experts emphasize on charismatic look, intuitive layout, UI/UX design and a responsive environment for clear cut communication. Our primary focus is to elevate your brand through a strong online presence. We begin our service through extensive brand research so that we can find the perfect user experience that delivers your brands persona. Taking time in understanding your business needs & goals is the key to ensure you get the best possible user interface. Our UI/UX team makes sure we go forward with your users in mind. Our development process ensures your website is perfectly visible & user-friendly on all screen sizes across all platforms & devices. Even if you have an outdated website, we can create a professional looking website that can redefine your online presence. You can see from our portfolio what our dedicated team is capable of across all industries.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${web}) no-repeat center center / cover`);
    setServices(webservices);
    setTools([ java, java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec,]);

  } else if (path === "software") {
    setHeading("Software Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("In a world where business is driven by the amalgamation of industry & commerce, overcoming real world contexts & challenges is the key trajectory to growth. A well-tailored software solution will give you a massive advantage over your competition because our service will shape your business as needed. To meet the modern day challenges of various enterprises & startups, we offer a large array of software applications. Our talented team of developers are ready to go beyond boundaries regardless of the platforms involved. Before going to the development phase, we will study your brand intensively with you so that any of your goals is not missed. Our communication is transparent with all our clients to capture all the information into the workflow. After all the information & design has been meet with, we go further to integrate your business model through an agile process. From iOS & android development to creating native & cross platform design, we are here to seamlessly work together to help your business grow. ");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${software}) no-repeat center center / cover`);
    setServices(softwareservices);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec ]);

  } else if (path === "hardware") {
    setHeading("Hardware Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("Everything begins with an idea. But ideas are worthless until you get them out of your head to see what can do. While you might plan out a business model surrounding your idea, you need to test the product to make sure there are no gaps in between. Our experienced team of experts are here to validate the idea before going into production with it. We help you identify the strengths & limitations of the product through audits, due diligence & real-life IoT prototyping. Internet of Things (IoT) introduces automating to your business model, increasing efficiency and accuracy.  It will add new value to your organization. You can say it’s like going from paper mail to emails. It’s cheaper, faster & it opens new doors of opportunity to your business. With Qubitech, we combine your idea with the latest technology with our vast knowledge & experience in IoT Prototyping to help empower your brand.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${hardware}) no-repeat center center / cover`);
    setServices(hardwareServices);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec,]);

  } else {
    setHeading("Branding and Marketing Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With the constantly evolving landscape of the digital era, finding the right marketing & branding strategy can be like finding a needle in a hay stack. Everything begins with your brand. Who you are? What you believe in? You need set the right positioning of what your brand id, of what you believe in front of the right people. You need to go through a strategic approach to develop the necessary exposure for your brand. Modern people tend to ignore the interruptive marketing tactics in the internet. Content fueled digital marketing strategy has become more popular to build awareness & drive demand. We have structured a transformative brand marketing solution around this philosophy to best serve up & coming startups & businesses to set them apart from their competitions. Our interactive approach mixes research, analysis & creativity to build authentic & comprehensive digital marketing & branding experience. Here at Qubitech, we attract, engage and nurture the audiences to elevate your brand.");
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