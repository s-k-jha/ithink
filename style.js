// script for navigation bar hover menu using flexbox

var dropdownMenu = document.querySelector('.dropdown-menu');

function showDropdownMenu() {
    dropdownMenu.classList.add('show');
}

function hideDropdownMenu() {
    dropdownMenu.classList.remove('show');
}

// Ends navigation menu hover flexbox

// All data 
const data = [

    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Shivam kumar",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Aman kumar",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Nitin sharma",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Harsh Kumar",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Shivam kumar ",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },
    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    },

    {
        src: "./images/my company logo-1.jpg",
        nameVal: "Someone Famous",
        jobVal: "Full Stack Developer",
    }


]

// function for create container cards
function createContainerCards(cards, id) {

    var container = document.createElement("div")

    container.setAttribute("class", "card-container")

    cards.map(card => {

        container.appendChild(card)

    })

    container.id = "group" + id


    document.getElementById("cardList").appendChild(container)

}

// function for create card
function createCard({ nameVal, src, jobVal }) {


    var card = document.createElement("div")
    var containerImg = document.createElement("div")
    var contentImg = document.createElement("div")
    var image = document.createElement("img")
    var details = document.createElement("div")
    var name = document.createElement("p")
    var job = document.createElement("p")
    var containerButton = document.createElement("div")
    var button = document.createElement("button")


    containerImg.setAttribute("class", "image")

    image.src = src

    details.setAttribute("class", "details")
    name.setAttribute("class", "name")
    job.setAttribute("class", "job")

    name.innerText = nameVal
    job.innerText = jobVal

    button.innerText = "Follow"
    button.style.backgroundColor = "white"

    button.addEventListener("click", () => {

        if (button.style.backgroundColor === "rgb(255, 193, 7)") {

            button.style.backgroundColor = "white"

        } else {

            button.style.backgroundColor = "#ffc107"

        }

    })

    containerButton.setAttribute("class", "button")


    containerButton.appendChild(button)

    details.appendChild(name)
    details.appendChild(job)

    contentImg.appendChild(image)
    containerImg.appendChild(contentImg)
    card.appendChild(containerImg)
    card.appendChild(details)
    card.appendChild(containerButton)

    card.setAttribute("class", "card")

    return card


}

// 4 cards per groupe
var groupBy = 3

// currentIndex of group list
var currentIndex = 0

//cards created list
var cards = []

// counter of groups
var counter = 0

// groups Ids list
var groupIds = []

//scroll index
var scrollIndex = 0

// function to create cards
function createCards() {
    for (let index = 0; index < data.length; index++) {

        cards.push(createCard(data[index]))


        if (index - currentIndex == (groupBy - 1) && index <= (groupBy - 1)) {

            counter++

            createContainerCards(cards, counter)

            groupIds.push(counter)

            currentIndex = index

            cards = []

        } else if (index - currentIndex == groupBy && index != 0) {

            counter++

            createContainerCards(cards, counter)

            groupIds.push(counter)

            currentIndex = index

            cards = []

        }

    }
}


//prev button event
document.getElementById("leftButton").addEventListener("click", () => {

    scrollIndex++

    if (scrollIndex < groupIds.length) {

        var current = document.getElementById("group" + groupIds[scrollIndex])

        console.log(current)

        current.scrollIntoView({ behavior: "smooth" })

    }
    else {

        scrollIndex = 0

        var current = document.getElementById("group" + groupIds[scrollIndex])

        console.log(current)

        current.scrollIntoView({ behavior: "smooth" })

    }

})

//next button event
document.getElementById("rightButton").addEventListener("click", () => {

    if (scrollIndex == 0 || scrollIndex < 1) {

        scrollIndex = groupIds.length - 1

        var current = document.getElementById("group" + groupIds[scrollIndex])

        current.scrollIntoView({ behavior: "smooth" })

    }
    else if (scrollIndex > 0) {

        scrollIndex--

        var current = document.getElementById("group" + groupIds[scrollIndex])

        current.scrollIntoView({ behavior: "smooth" })

    }
})

//change groupBy nummber
function setGroupBy(number) {

    groupBy = number

    currentIndex = 0

    counter = 0

    scrollIndex = 0

    groupIds.map(id => {

        document.getElementById("group" + id).remove()

    })

    groupIds = []

    cards = []

    console.log(groupIds)

    createCards()

}

//create cards
createCards()

// service offer

const h1 = document.createElement('h1');
h1.textContent = 'Service Offered By ';
const companyName = document.createElement('span');
companyName.textContent = 'IThink Hardware Solutions';
companyName.style.textTransform = "uppercase"; // Convert text to uppercase
h1.appendChild(companyName);
h1.style.textAlign = "center";
document.body.appendChild(h1);

const reviewsConatainer = document.createElement('div');
reviewsConatainer.id = 'reviews-container';
document.body.append(reviewsConatainer)


const reviews = [
  { image: './serviceimage/waterdamage.jpeg',
      name: 'Water Damage'
  },
  { image: './serviceimage/battery.jpeg', 
  name: 'Battery Replacement'
  },
  { image: './serviceimage/chiplevel.jpeg',
  name: 'Chip Level Sevices'
  },
  { image: './serviceimage/screen.jpeg',
      name: 'Screen Replacement'
  },
  { image: './serviceimage/keyboardreplacement.jpeg',
      name: 'Keyboard Replacement'
  },
  { image: './serviceimage/fanreplacement.jpg', 
    name: 'Fan Replacement'
  }
]

function populatReviews(){
    reviews.forEach(review => {
        const card= document.createElement('div')
        card.classList.add('card');

        card.addEventListener('mouseover', showCard)
        card.addEventListener('mouseleave', blurCard)

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img= document.createElement('img');
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

function showCard(){
    this.classList.add('active')
}

function blurCard(){
    this.classList.remove('active')
}