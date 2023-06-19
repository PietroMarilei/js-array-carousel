
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

console.log('lunghezza array img:', imgArray.length);
let imgCounter = 0;
console.log('imgcounter init', imgCounter);

// 🟢 ciclo for per creare le img 
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
//--------------------------------------------------
//💥 bonus
const imgDomArray = document.querySelectorAll('.center_cont > img');
console.log(imgDomArray);
// prev
if (imgCounter > 0) {
    console.log('entrato nell if di prev ');
    prevContainer.innerHTML =

        `<img src="${imgArray[imgCounter - 1]}" class="x${imgCounter}">`;


} else {
    //vado all'ultima
    prevContainer.innerHTML =
        `<img src="${imgArray[imgArray.length - 1]}" class="x${imgArray.length - 1}">`;
}

// //next
// ❌📛questo non va bene
// const nodeNext = imgDomArray[imgCounter + 1];
// const nextImg = nodeNext.cloneNode(true);
// nextImg.classList.remove('hidden');
// nextContainer.append(nextImg);

// if (imgCounter > imgArray.length - 1) {
//     const nodeNext = imgDomArray[0];
//     // vado alla prima
//     const nextImg = nodeNext.cloneNode(true);
//     nextImg.classList.remove('hidden');
//     nextContainer.append(nextImg);
// }

//--------------------------------------------------


// --------------- bottoni 🔽⏩⏪

// ⏩next button

nextButtonEl.addEventListener('click', function () {

    let currentImgEl = document.querySelector(`.center_cont > .x${imgCounter}`);
    currentImgEl.classList.toggle("hidden")

    imgCounter++
    console.log(imgCounter);
    //levo hidden dalla classe dopo perhé imgcounter è aumentato di 1
    if (imgCounter > imgArray.length - 1) {
        imgCounter = 0
        console.log('img counter cambiato', imgCounter);
    }
    let nextImgEl = document.querySelector(`.center_cont > .x${imgCounter}`);
    nextImgEl.classList.toggle("hidden")
})

// ⏪prev button

prevButtonEl.addEventListener('click', function () {
    let currentImgEl = document.querySelector(`.center_cont > .x${imgCounter}`);
    currentImgEl.classList.toggle("hidden")

    imgCounter--
    console.log(imgCounter);
    if (imgCounter < 0) {
        imgCounter = imgArray.length - 1
        console.log('img counter cambiato', imgCounter);
    }

    let prevImgEl = document.querySelector(`.center_cont > .x${imgCounter}`);
    prevImgEl.classList.toggle("hidden")


})
