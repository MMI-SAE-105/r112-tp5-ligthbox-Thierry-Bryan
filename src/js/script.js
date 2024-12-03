// *** LIGHTBOX ***
const listThumbnail = document.querySelector("[data-full-img]");  //retrouve toute les miniatures
const lightboxImg = document.querySelector('#lightbox > img');

listThumbnail.forEach((thumbnail) => {
	thumbnail.addEventListener('click', (evt) => {
		lightboxImg.src = thumbnail.dataset.fullImg;
        lightbox.showModal();
	});
});

lightbox.addEventListener('click', () => {
  lightbox.close();
});