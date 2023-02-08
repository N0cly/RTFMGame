/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.window__modal'),
	  modalBtns = document.querySelectorAll('.link__title'),
	  modalCloses = document.querySelectorAll('.window__button-close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
	modalBtn.addEventListener('click', () =>{
		modal(i)
	})
})

modalCloses.forEach((modalClose) =>{
	modalClose.addEventListener('click', () =>{
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})


// play rickroll

const Rick = document.getElementById("Rick");
document.getElementById("link__video").onclick = function() {
	Rick.play();
}

document.getElementById("close__video").onclick = function() {
	Rick.pause();
	Rick.currentTime = 0;

}

// LoL

const lol = document.getElementById('.LoL');

function LoLAlert() {
	alert("Tu crois que c'est le moment de jouer ?! \nApres avoir trouve le virus t'ira prendre une douche \nparce que la sa pue !");
}

