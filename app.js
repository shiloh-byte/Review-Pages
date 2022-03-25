//local reviews data
let reviews = [
    {
        id: 1,
        name: 'Sara Starcov',
        job: 'Software Engineer',
        img: 'https://cdn.pixabay.com/photo/2016/06/06/17/05/woman-1439909_960_720.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias voluptate repellendus animi sequi deserunt corrupti autem ipsum quae placeat. Consectetur adipisicing elit. Magni alias voluptate repellendus animi.'
    },
    {
        id: 2,
        name: 'Brad Web',
        job: 'UX/UI Designer',
        img: 'https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias voluptate repellendus animi sequi deserunt corrupti autem ipsum quae placeat. Lorem ipsum dolor, sit amet.' 
    },
    {
        id: 3,
        name: 'Avery West',
        job: 'Web Developer',
        img: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753_960_720.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias voluptate repellendus animi sequi deserunt corrupti autem ipsum quae placeat. Sit amet consectetur adipisicing elit. Sequi deserunt.'
    },
    {
        id: 4,
        name: 'John Doe',
        job: 'Web Developer',
        img: 'https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_960_720.jpg',
        text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni alias voluptate repellendus animi sequi deserunt corrupti autem ipsum quae placeat. Magni alias voluptate repellendus animi.'
    }
]

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial itme
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
})

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})

// show prev person
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})

// surprise button
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
