// NAVIGATION MENU HOVER FLEXBOX START
var dropdownMenu = document.querySelector('.dropdown-menu');
function showDropdownMenu() {
    dropdownMenu.classList.add('show');
}
function hideDropdownMenu() {
    dropdownMenu.classList.remove('show');
}
// NAVIGATION MENU HOVER FLEXBOX END


// CUSTOMER REVIEWS START

// CUSTOMER REVIEWS END


// SERVICE OFFERED START
const contentDiv = document.getElementById('content');

const h1 = document.createElement('h1');
h1.textContent = 'Service Offered By ';
const companyName = document.createElement('span');
companyName.textContent = 'IThink Hardware Solutions';
h1.appendChild(companyName);
h1.style.textAlign = "center";
document.body.appendChild(h1);

contentDiv.appendChild(h1);

const reviewsConatainer = document.createElement('div');
reviewsConatainer.id = 'reviews-container';
document.body.append(reviewsConatainer)

contentDiv.appendChild(reviewsConatainer);


const reviews = [
    {
        image: './serviceimage/waterdamage.jpeg',
        name: 'Water Damage'
    },
    {
        image: './serviceimage/battery.jpeg',
        name: 'Battery Replacement'
    },
    {
        image: './serviceimage/chiplevel.png',
        name: 'Chip Level Services'
    },
    {
        image: './serviceimage/screen.jpeg',
        name: 'Screen Replacement'
    },
    {
        image: './serviceimage/keyboardreplacement.jpeg',
        name: 'Keyboard Replacement'
    },
    {
        image: './serviceimage/fanreplacement.jpg',
        name: 'Fan Replacement'
    }
]

function populatReviews() {
    reviews.forEach(review => {
        const card = document.createElement('div')
        card.classList.add('card');

        card.addEventListener('mouseover', showCard)
        card.addEventListener('mouseleave', blurCard)

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.setAttribute('src', review.image);
        img.setAttribute('alt', review.alt);
        imgContainer.append(img);

        const revText = document.createElement('p');
        revText.innerText = review.text;

        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;

        card.append(imgContainer, revText, nameContainer);
        reviewsConatainer.append(card);

    });
}
populatReviews();

function showCard() {
    this.classList.add('active')
}

function blurCard() {
    this.classList.remove('active')
}
// SERVICE OFFERED END