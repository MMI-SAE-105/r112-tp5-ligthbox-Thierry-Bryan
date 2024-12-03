// *** LIGHTBOX ***
/*const lightbox = document.querySelector('#lightbox');
const listThumbnail = document.querySelectorAll("[data-full-img]");
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (evt) => {
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.showModal();
    })
});

lightbox.addEventListener('click', () => {
    lightbox.close();
});
*/
// *** LIGHTBOX ***
const lightbox = document.querySelector('#lightbox');
const listThumbnail = document.querySelectorAll("[data-full-img]");
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
    thumbnail.addEventListener('click', (evt) => {
        lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.classList.add('show');
        lightbox.classList.remove('hide');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.add('hide');
    lightbox.classList.remove('show');
    setTimeout(() => {
        lightbox.close();
    }, 500); // Durée de l'animation
});
