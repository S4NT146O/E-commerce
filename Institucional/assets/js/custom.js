$(document).ready(function () {
  $(".items-brands").slick({
    infinite: false,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".items-testimonials").slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    fade: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ]
  });
  $(".items-blog").slick({
    infinite: true,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  });
});
