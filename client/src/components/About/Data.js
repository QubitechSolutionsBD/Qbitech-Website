// /////////////////////////////////////////////////////////////////////////////
// SLIDER SETTINGS
export const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
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
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 2,
      },
    },
  ],
};

// /////////////////////////////////////////////////////////////////////////////
// ALL REEWARDS
export const rewards = [
  {
    head: "BASIS Best Outsourcing Organization",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    head: "Daily Star ICT Awards",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    head: "BASIS Award Winner 2014",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    head: "Code Warrior Challange 2014",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    head: "HSBC Exporter of the Year 2019",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    head: "Kaggle-Bronze Winner 2019",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];
