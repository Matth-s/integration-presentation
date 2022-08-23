const droite = document.querySelectorAll('.fleche');
const background = document.querySelector('#partie-gauche-premiere-section');
const titre = document.querySelector('.titre-presentation');
const paragraphe = document.querySelector('.paragraphe-presentation');
const object = document.querySelector('partie-gauche-preliere-section');
const menu = document.querySelector('.hamburger');
const body = document.querySelector('.menu-deroulant-fils');
const close = document.querySelector('.close');
int = 1;

droite.forEach((item) => {
    item.addEventListener('click', function(e) {

        switch(e.target.id) {
            case "droite":
                int++;
                break;
            case "gauche":
                int--;
                break;
        }
        if(int == 0) {
            int ++;
        }
        else if(int == 4) {
            int --;
        }
        console.log(int);

        switch (int) {
            case 1:
                titre.innerHTML = "Discover innovative ways to decorate";
                paragraphe.innerHTML ="We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.";
                background.style.backgroundImage = "url('images/desktop-image-hero-1.jpg')";
                break;
            case 2:
                titre.innerHTML ="We are available all across the globe"
                paragraphe.innerHTML = "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.";
                background.style.backgroundImage = "url('images/desktop-image-hero-2.jpg')";
                break;
            case 3:
                titre.innerHTML ="Manufactured with the best materials";
                paragraphe.innerHTML = "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.";
                background.style.backgroundImage = "url('images/desktop-image-hero-3.jpg')";
                break;
        }
        
    });
});

menu.addEventListener('click', function() {
    body.classList.toggle('open')
    document.body.style.backgroundColor = "grey";
});

close.addEventListener('click', function() {
    body.classList.toggle('open');
    document.body.style.backgroundColor = "white";
});