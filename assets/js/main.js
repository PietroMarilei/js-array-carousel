
// ho aggiunto le nostre img ad un array

const imgArray = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

console.log(imgArray)

//seleziono l'elemento della dom dove vanno le images
const imagesElement = document.querySelector('.slider > .images')
console.log(imagesElement);

let activeImg = 0;

// ciclo for per far scorrere le img
for (let i = 0; i < imgArray.length; i++) {
    let imgSrc = imgArray[i];
    // imgSrc va a prendere l'img in posizione i

    let activeImgClass = '';
    if (i == activeImg) {
        activeImgClass = 'active';
    }
    // se i é uguale ad activeImg  allora metto "active"
    // let activeImgClass = i === activeImg ? 'active' : '';
    // forma col ternary


    const imgElement = `<img class="img-fluid rounded-2 ${activeImgClass}" src="${imgSrc}" alt="">`;

    // mi scrivo in pagina letteralmente l'elemento dell'html con activeimgClass = active
    // se i é uguale ad activeeImg 0 in questo caso


    console.log(imgElement);

    // imagesElement.insertAdjacentHTML("afterbegin", imgElement)
    // prendo il contenitore images dalla dom, e ci scrivo dentro
    // dopo l'inizio: imgElement, che é un template literal della imagine

    // imagesElement.innerHTML += imgElement;

    const imgEl = document.createElement('img');
    // creo l'elemento img
    imgEl.setAttribute('src', imgSrc);
    // gli metto l'attributo src = imgSrc
    imgEl.setAttribute('class', `img-fluid ${i === activeImg ? 'active' : ''}`)
    // gli metto la classe con active o no
    imagesElement.append(imgEl)
    // al contenitore delle immagini appendo via via i vari pezzi.


}

const sliderImagesElement = document.querySelectorAll('.slider > .images > img');
// seleziono l'immagine in pagina
// perché non sono tutte ?

const nextEl = document.querySelector('.next');
// ho selezionato il btn che si chiama next

// ascolto per il click  sul bottone .next
nextEl.addEventListener("click", function () {
    console.log('cliccato next');

    const currentSlide = sliderImagesElement[activeImg];
    console.log("questa é la slide corrente " + currentSlide);
    // seleziono la slide in posizione activeImg = 0
    currentSlide.classList.remove('active');
    // tolgo la classe active alla img in pagina
    activeImg++
    // finalmente incremento il valore di activeImg cliccando sul bottone
    console.log(activeImg);
    // con questo log vedo che activeImg aumenta al click
    const nextImage = sliderImagesElement[activeImg];
    // seleziono la prossima imagine che é diversa da prima perché activeImg é aumentato di 1
    nextImage.classList.add('active')
    // gli do la classe active

})

const prevEl = document.querySelector(".prev")
// seleziono il bottone prev
prevEl.addEventListener('click', function () {
    console.log('cliccato next');

    const currentSlide = sliderImagesElement[activeImg];
    console.log("questa é la slide corrente " + currentSlide);
    // seleziono la slide in posizione activeImg = 0
    currentSlide.classList.remove('active');
    // tolgo la classe active alla img in pagina
    activeImg--
    // decremento il valore di activeImg
    console.log(activeImg);
    // con questo log vedo che activeImg decresce al click
    const nextImage = sliderImagesElement[activeImg];
    // seleziono la prossima imagine che é diversa da prima perché activeImg é aumentato di 1
    nextImage.classList.add('active');
    // gli do la classe active
})