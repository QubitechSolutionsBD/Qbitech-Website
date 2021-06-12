import web from "./services/banner/web.jpg";
import software from "./services/banner/software.jpg";
import hardware from "./services/banner/hardware.jpg";
import branding from "./services/banner/branding.jpg";
import java from "./services/tools/java.svg";
import react from "./services/tools/react.svg";
import swift from "./services/tools/swift.svg";
import objectivec from "./services/tools/objectivec.svg";

export const setAssetsForServices = (path, setServices, setHeading, setBannerImage, setBannerText, setDesc, setTools) => {
  if (path === "web") {
    setHeading("Website Solutions");
    setBannerText( "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc( "With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games." );
    setBannerImage( `linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${web}) no-repeat center center / cover` );
    setServices([ "Website Development", "Web Application Development", "Website Design & Redisgn", "E-commerce site development" ]);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec, ]);

  } else if (path === "software") {
    setHeading("Software Solutions");
    setBannerText( "Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${software}) no-repeat center center / cover`);
    setServices(["iOS App Development","Android App Development", "Digital Service UX Research", "Digital Service UI Design", "Native and Cross Platform Service Design", "Product Prototyping", "Unitiy Game Development", "Product Gamification", ]);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec, ]);

  } else if (path === "hardware") {
    setHeading("Hardware Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${hardware}) no-repeat center center / cover`);
    setServices(["Product/Idea Prototyping", "IoT Based Monitoring System", "IoT Based automation System",]);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec, ]);

  } else {
    setHeading("Branding and Marketing Solutions");
    setBannerText("Developing innovative and native mobile Apps for Android, iOS, BlackBerry and Windows platforms.");
    setDesc("With a large portfolio of industry leading mobile application development services, we know how to translate our solutions into the result of your business growth. We work on cross-platform, responsive mobile apps. Where others struggle, we thrive for the most attractive user interface and secure backend. Team Brain Station 23 provides the cutting-edge mobile app development service to diverse industries and clients including large scale organizations and startups similar to Uber. Our dedicated developers of different platforms build enterprise oriented mobile apps to best suit your business. Integrating trendy and smart notification features and secure payment gateways, we create a constant digital presence and enhance customer engagement for you. Our team has already developed customized mobile apps for the Banking, E-commerce industries and Augmented Reality or Virtual Reality platforms. We also have an amazingly dedicated team to develop mobile games.");
    setBannerImage(`linear-gradient(0deg, rgba(14, 4, 40, 0.4), rgba(14, 4, 40, 0.4)), url(${branding}) no-repeat center center / cover`);
    setServices(["Building a Brand Identity From the Ground Up","Rebranding Established Business", "Establishing Brand Positioning and Messaging", "Creating a Brand Identity,Strategy and Guidelines", "Mapping Out a Social Media Strategy","Writing Copy for Websites and Other Digital Assets",
    ]);
    setTools([ java, react, swift, objectivec, java, react, swift, objectivec, java, react, swift, objectivec, ]);
  }
};
