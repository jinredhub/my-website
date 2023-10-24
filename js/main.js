$(document).ready(function () {
  const workData = {
    nagase: {
      slides: [
        "./images/work/nagase1.jpg",
        "./images/work/nagase2.jpg",
        "./images/work/nagase3.jpg",
        "./images/work/nagase4.jpg",
      ],
      companyName: "Nagase",
      description:
        "Nagase is a prominent Japanese multinational corporation with diversified business operations including chemicals, pharmaceuticals, food, electronics materials, and industrial materials.",
      link: "https://www.nagase.com/",
    },
    comcast: {
      slides: [
        "./images/work/comcast1.jpg",
        "./images/work/comcast2.jpg",
        "./images/work/comcast3.jpg",
        "./images/work/comcast4.jpg",
      ],
      companyName: "Comcast",
      description:
        "Comcast is one of the largest cable and internet service providers in the United States, and it has a significant presence in various regions across the country.",
      link: "https://business.comcast.com/",
    },
    zoom: {
      slides: [
        "./images/work/zoom1.jpg",
        "./images/work/zoom2.jpg",
        "./images/work/zoom3.jpg",
        "./images/work/zoom4.jpg",
      ],
      companyName: "Zoom",
      description:
        "Zoom is a communications platform that allows users to connect with video, audio, phone, and chat.",
      link: "https://zoom.us/",
    },
    twitter: {
      slides: [
        "./images/work/twitter1.jpg",
        "./images/work/twitter2.jpg",
        "./images/work/twitter3.jpg",
        "./images/work/twitter4.jpg",
      ],
      companyName: "Twitter",
      description:
        "Twitter is a social media platform where users can share short messages. It allows users to follow other accounts, interact with their content through likes, retweets, and replies.",
      link: "https://twitter.com/",
    },
    lucid: {
      slides: [
        "./images/work/lucid1.jpg",
        "./images/work/lucid2.jpg",
        "./images/work/lucid3.jpg",
        "./images/work/lucid4.jpg",
      ],
      companyName: "Lucid Motore",
      description:
        "Lucid is an electric vehicle (EV) company that designs and manufactures luxury EVs.",
      link: "https://www.lucidmotors.com/",
    },
    gelesis: {
      slides: [
        "./images/work/plenity1.jpg",
        "./images/work/plenity2.jpg",
        "./images/work/plenity3.jpg",
        "./images/work/plenity4.jpg",
      ],
      companyName: "Gelesis",
      description:
        "Gelesis is a biotechnology company that develops innovative treatments for obesity and other metabolic disorders.",
      link: "https://www.myplenity.com/",
    },
    kena: {
      slides: [
        "./images/work/kena1.jpg",
        "./images/work/kena2.jpg",
        "./images/work/kena3.jpg",
      ],
      companyName: "Kena",
      description:
        "Kena is a music learning platform as well as music creator marketplace.",
      link: "https://www.kena.ai/",
    },
    foresight: {
      slides: [
        "./images/work/foresight1.jpg",
        "./images/work/foresight2.jpg",
        "./images/work/foresight3.jpg",
      ],
      companyName: "Foresight Mental Health",
      description:
        "Foresight is an organization committed to broadening access to therapy and psychiatry through insurance-covered services and virtual care.",
      link: "https://www.foresightmentalhealth.com/",
    },
  };

  // smooth scrolling
  $('a[href^="#"]').on("click", function (event) {
    if (this.hash !== "") {
      // event.preventDefault();
      var hash = this.hash;

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(hash).offset().top - 57,
          },
          500,
          function () {
            window.location.hash = hash;
          }
        );
    }
  });

  // toggle between show/hide the mobile navbar menu
  $(".hamburgerIcon").on("click", function () {
    const container = document.querySelector(".myLinks");
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });

  // close mobile navbar when user click outside
  const linkContainer = document.querySelector(".myLinks");
  const hamburgerButton = document.querySelector(".hamburgerIcon");

  // need to put all of them in same function
  window.onclick = function (event) {
    // console.log('t or f: ', event.target.closest('.myLinks') == linkContainer);
    if (
      event.target != linkContainer &&
      event.target.closest(".myLinks") != linkContainer &&
      event.target.closest(".hamburgerIcon") != hamburgerButton
    ) {
      linkContainer.style.display = "none";
    }
  };

  // initialize wow.js scroll animation
  new WOW({
    mobile: false,
    offset: 50,
  }).init();

  // slideshow=====================================================
  let currentSlideIndex = 0;

  nextSlide = (n) => {
    const slides = document.querySelectorAll(".slide");
    slides[currentSlideIndex].className = "slide";

    if (n === "previous") {
      if (currentSlideIndex - 1 < 0) {
        currentSlideIndex = slides.length;
      }
      currentSlideIndex = (currentSlideIndex - 1) % slides.length;
    } else {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    }

    slides[currentSlideIndex].className = "slide showing";
  };

  autoSlideV2 = () => {
    nextSlide();
    setTimeout(autoSlideV2, 5000);
  };

  // setTimeout(autoSlideV2, 5000);

  $(".workModalContent").on("click", ".prev", function () {
    nextSlide("previous");
  });

  $(".workModalContent").on("click", ".next", function () {
    nextSlide();
  });

  // render and opens work modal
  $(".workContainer").on("click", ".work", function () {
    const nameOfWork = $(this).closest(".work").data("company");
    const newSlides = workData[nameOfWork].slides;
    currentSlideIndex = 0;

    $("#slides").empty();

    // update slides
    workData[nameOfWork].slides.forEach((imgPath, index) => {
      const html = `
          <div class="slide ${
            index === 0 ? "showing" : ""
          }" style="background-image: url(${imgPath});"></div>
      `;

      $("#slides").append(html);
    });

    // update info
    $(".workModalTitle").text(workData[nameOfWork].companyName);
    $(".workModalDescription").text(workData[nameOfWork].description);
    $(".workModalContent .btn-green").attr("href", workData[nameOfWork].link);

    const buttons = `
      <a class='prev'>&#10094;</a>
      <a class='next'>&#10095;</a>    
    `;

    $("#slides").append(buttons);

    // prevent body from scrolling
    $("body").addClass("modalOpen");

    $(".workModal").css("display", "block");
  });

  // close work modal
  $(".closeWorkModal").on("click", () => {
    $("body").removeClass("modalOpen");
    $(".workModal").css("display", "none");
  });

  // close work modal out side click
  $(".workModal").on("click", (e) => {
    if ($(e.target).is(".workModal")) {
      $("body").removeClass("modalOpen");
      $(".workModal").css("display", "none");
    }
  });
});
