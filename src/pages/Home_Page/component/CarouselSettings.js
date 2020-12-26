import Image1 from '../../../assets/images/Background.jpg';
import Image2 from "../../../assets/images/Background.jpg";
import Image3 from '../../../assets/images/image.jpg';
import Image4 from "../../../assets/images/Background.jpg";
import Image5 from "../../../assets/images/hate-me.jpg";
import Image6 from "../../../assets/images/caro4.jpg";





export const settings = {
    dots: true,
    infinite: true,
    speed: 6000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
};
  
export const data = [
  {
    img: Image1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
  {
    img: Image2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
  {
    img: Image3,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
  {
    img: Image4,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
  {
    img: Image5,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
  {
    img: Image6,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat lacus,nec duis arcu ac commodo pellentesque nullam id. Pulvinar id maurisluctus lobortis malesuada justo cursus. Tortor.",
    name: "Mira Adams",
    job: "CEO, Beauty Hub, NG.",
  },
];