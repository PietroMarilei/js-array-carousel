
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
    const imgElement = `<img class="img-fluid rounded-2 ${i === activeImg ? 'active' : ''}" src="${imgSrc}" alt="">`
    // creo la const imgElement, che dentro ha un template literal
    // se la posizione dell'array é 0 allora metto active come classe, altrimenti non metto niente
    // non ho tanto capito a cosa serve sta cosa

    console.log(imgElement);

    imagesElement.insertAdjacentHTML("afterbegin", imgElement)
    // prendo il contenitore images dalla dom, e ci scrivo dentro
    // dopo l'inizio: imgElement, che é un template literal della imagine

}

const slideImagesElement = document.querySelectorAll('.slider > .images > img');
// seleziono l'immagine in pagina
// perché non sono tutte ?

const nextEl = document.querySelector('.next');
// ho selezionato il btn che si chiama next

// ascolto per il click  sul bottone .next
nextEl.addEventListener("click", function () {
    console.log('cliccato next');

    const currentSlide = slideImagesElement[activeImg];
    console.log("questa é la slide corrente " + currentSlide);
    // seleziono la slide in posizione activeImg = 0






}) 