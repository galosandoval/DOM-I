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

const everythingInContainer = document.querySelector('.container')
const nav = everythingInContainer.querySelector('nav')
const linksInNav = nav.querySelectorAll('a')
console.log(linksInNav)

const cta = everythingInContainer.querySelector('.cta')
const ctaText = cta.querySelector('.cta-text')
const ctaTextH1 = ctaText.querySelector('h1')
const ctaButton = ctaText.querySelector('button')
const ctaImg = cta.querySelector('#cta-img')

const mainContent = everythingInContainer.querySelector('.main-content')
const topMainContent = mainContent.querySelector('.top-content')
const topTextContent = topMainContent.querySelector('.text-content')


const middleImg = mainContent.querySelector('#middle-img')

const bottomContentText = document.querySelectorAll('.text-content')
const bottomContentTextH4 = mainContent.querySelectorAll('h4')
const contentTextP = mainContent.querySelectorAll('p')


const contact = everythingInContainer.querySelector('.contact')
const contactH4 = contact.querySelector('h4')
const contactP = contact.querySelectorAll('p')

const footer = everythingInContainer.querySelector('footer')


linksInNav[0].textContent = 'Services'
linksInNav[1].textContent = 'Product'
linksInNav[2].textContent = 'Vision'
linksInNav[3].textContent = 'Features'
linksInNav[4].textContent = 'About'

bottomContentTextH4[0].textContent = 'Features'
bottomContentTextH4[1].textContent = 'About'
bottomContentTextH4[2].textContent = 'Services'
bottomContentTextH4[3].textContent = 'Product'
bottomContentTextH4[4].textContent = 'Vision'

contentTextP[0].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
contentTextP[1].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
contentTextP[2].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
contentTextP[3].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
contentTextP[4].textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

ctaTextH1.textContent = 'Dom Is Awesome'
ctaButton.textContent = 'Get Started'
ctaImg.src = 'img/header-img.png'

middleImg.src = 'img/mid-page-accent.jpg'

contactH4.textContent = 'Contact'
contactP[0].innerHTML = '123 Way 456 Street <br> Somewhere, USA'
contactP[1].textContent = '1 (888) 888-8888'
contactP[2].textContent = 'sales@greatidea.io'

footer.textContent = 'Copyright Great Idea! 2018'

linksInNav[0].setAttribute('id', 'navBar')
linksInNav[1].setAttribute('id', 'navBar')
linksInNav[2].setAttribute('id', 'navBar')
linksInNav[3].setAttribute('id', 'navBar')
linksInNav[4].setAttribute('id', 'navBar')
linksInNav[5].setAttribute('id', 'navBar')

for(let i = 0; i < linksInNav.length; i++){
  linksInNav[i].style.color = 'green'
}
  
  

