const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Navigation set up
const navigationList = document.querySelectorAll("a");
navigationList[0].textContent = siteContent["nav"]["nav-item-1"];
navigationList[1].textContent = siteContent["nav"]["nav-item-2"];
navigationList[2].textContent = siteContent["nav"]["nav-item-3"];
navigationList[3].textContent = siteContent["nav"]["nav-item-4"];
navigationList[4].textContent = siteContent["nav"]["nav-item-5"];
navigationList[5].textContent = siteContent["nav"]["nav-item-6"];

//setting up the snippest code (circle - shape) image
let snippetCodeImg = document.getElementById("cta-img");
snippetCodeImg.setAttribute('src', siteContent["cta"]["img-src"]);

//setting up the h1 
const ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent["cta"]["h1"];

//setting up the button
const ctaTextButton = document.querySelector('.cta-text button');
ctaTextButton.textContent = siteContent["cta"]["button"];

//set up main contain
//const headingh4 = document.getElementsByClassName(".main-content")[0];
//headingh4[0].textContent = siteContent["main-content"]["features-h4"];

//set up main content h4
const mainH4 = document.querySelectorAll('h4');
mainH4[0].textContent = siteContent["main-content"]["features-h4"];
mainH4[1].textContent = siteContent["main-content"]["about-h4"];
mainH4[2].textContent = siteContent["main-content"]["services-h4"];
mainH4[3].textContent = siteContent["main-content"]["product-h4"];
mainH4[4].textContent = siteContent["main-content"]["vision-h4"];

//set up main content paragraph
const mainContentPara = document.querySelectorAll('p');
mainContentPara[0].textContent = siteContent["main-content"]["features-content"];
mainContentPara[1].textContent = siteContent["main-content"]["about-content"];
mainContentPara[2].textContent = siteContent["main-content"]["services-content"];
mainContentPara[3].textContent = siteContent["main-content"]["product-content"];
mainContentPara[4].textContent = siteContent["main-content"]["vision-content"];

//set up main content image
const mainContentImg = document.getElementById("middle-img");
mainContentImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//set up contact h4
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];

// set up contact paragraph with different ways
const contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent.contact.address;
contactPara[1].textContent = siteContent.contact["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

//set up footer
//const footerPage = document.getElementsByTagName("footer");
//footerPage.textContent = siteContent["footer"]["copyright"];

//set up footer
const footerPage = document.querySelector("footer");
footerPage.textContent = siteContent["footer"]["copyright"];