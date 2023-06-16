
// ho aggiunto le nostre img ad un array
const nextContainer = document.getElementById("cont_3");
const centerContainer = document.getElementById('cont_2');
const prevContainer = document.getElementById('cont_1');

const nextButtonEl = document.querySelector('.next');
const prevButtonEl = document.querySelector(".prev")

const imgArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

console.log('lunghezza rray img:', imgArray.length);
let imgCounter = 0;

// 🟢 ciclo for per far scorrere le img
for (let i = 0; i < imgArray.length; i++) {
    let imgSrc = imgArray[i];

    //qua creo img centrale
    const imgEl = document.createElement('img');
    // creo l'elemento img
    imgEl.setAttribute('src', imgSrc);
    imgEl.setAttribute('class', `hidden x${i}`)
    //le appendo al container in mezzo
    centerContainer.append(imgEl)

    if (i == imgCounter) {
        //queste sono le img a destra
        let currentImgEl = document.querySelector(`.x${i}`);
        currentImgEl.classList.remove('hidden');


    }

}
// //💥 bonus
// // prev
// const nodePrev = document.querySelector(`.x${imgCounter - 1}`)
// const prevImg = nodePrev.cloneNode(true);
// prevImg.classList.remove('hidden');
// prevContainer.append(prevImg);
// //next
// const nodeNext = document.querySelector(`.x${imgCounter + 1}`)
// const nextImg = nodeNext.cloneNode(true);
// nextImg.classList.remove('hidden');
// nextContainer.append(nextImg);

// --------------- bottoni 🔽⏩⏪

// ⏩next button

nextButtonEl.addEventListener('click', function () {

    let currentImgEl = document.querySelector(`.x${imgCounter}`);
    currentImgEl.classList.toggle("hidden")

    imgCounter++
    console.log(imgCounter);
    //levo hidden dalla classe dopo perhé imgcounter è aumentato di 1
    if (imgCounter > imgArray.length - 1) {
        imgCounter = 0
    }
    let nextImgEl = document.querySelector(`.x${imgCounter}`);
    nextImgEl.classList.toggle("hidden")
})

// ⏪prev button

prevButtonEl.addEventListener('click', function () {
    imgCounter--
    console.log(imgCounter);

    for (let i = 0; i < imgArray.length; i++) {


        if (i == imgCounter) {
            let prevImgEl = document.querySelector(`.x${i - 1}`);
            prevImgEl.classList.remove('hidden');
            let currentImgEl = document.querySelector(`.x${i}`);
            currentImgEl.classList.add('hidden');
        }

    }
})
