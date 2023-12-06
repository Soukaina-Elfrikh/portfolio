/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 });
/*===== OPEN PDF ON IMAGE CLICK =====*/
const imgToOpenPDF1 = document.getElementById('germancerf');
const imgToOpenPDF2 = document.getElementById('englishcerf'); // Assuming this is the first image you want to click to open the PDF
const imgToOpenPDF3 = document.getElementById('frenchcerf'); // Assuming this is the second image
const imgToOpenPDF4 = document.getElementById('myImage1');
const imgToOpenPDF5 = document.getElementById('myImage2');
const imgToOpenPDF6 = document.getElementById('myImage3');
const imgToOpenPDF7 = document.getElementById('myImage4');
const imgToOpenPDF8 = document.getElementById('myImage5');
const imgToOpenPDF9 = document.getElementById('myImage6');
const imgToOpenPDF10 = document.getElementById('myImage7');
const imgToOpenPDF11 = document.getElementById('myImage8');
const imgToOpenPDF12 = document.getElementById('myImage9');
const imgToOpenPDF13 = document.getElementById('myImage10');
const imgToOpenPDF14 = document.getElementById('myImage11');

function openPDF(pdfPath) {
    window.open(pdfPath, '_blank');
}

if (imgToOpenPDF4) {
    imgToOpenPDF4.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/Bac.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF5) {
    imgToOpenPDF5.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/diplome.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF6) {
    imgToOpenPDF6.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/office.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF7) {
    imgToOpenPDF7.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/digital.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF8) {
    imgToOpenPDF8.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/EstateAgency.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF9) {
    imgToOpenPDF9.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/communication.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF10) {
    imgToOpenPDF10.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/realEstate.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF11) {
    imgToOpenPDF11.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/negotiation.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF12) {
    imgToOpenPDF12.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/imo.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF13) {
    imgToOpenPDF13.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/stage1.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF14) {
    imgToOpenPDF14.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/stage2.pdf';
        openPDF(pdfPath);
    });
}


if (imgToOpenPDF1) {
    imgToOpenPDF1.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/germancerf.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF2) {
    imgToOpenPDF2.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/englishcerf.pdf';
        openPDF(pdfPath);
    });
}

if (imgToOpenPDF3) {
    imgToOpenPDF3.addEventListener('click', () => {
        const pdfPath = 'assets/pdf/frenchcerf.pdf';
        openPDF(pdfPath);
    });
}










/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });
