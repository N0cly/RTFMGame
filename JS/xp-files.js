/*=============== WINDOWS MODAL ===============*/
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


const modalMenu = document.querySelectorAll('.item__menu'),
	  modalBtnsMenu = document.querySelectorAll('.item__content'),
	  modalClosesMenu = document.querySelectorAll('.item__menu-option')

let menu = function(modalClickMenu){
	modalMenu[modalClickMenu].classList.add('active-menu')
}

modalBtnsMenu.forEach((modalBtnMenu, m) =>{
	modalBtnMenu.addEventListener('click', () =>{
		menu(m)
	})
})

modalClosesMenu.forEach((modalCloseMenu) =>{
	modalCloseMenu.addEventListener('click', () =>{
		modalMenu.forEach((modalViewMenu) =>{
			modalViewMenu.classList.remove('active-menu')
		})
	})
})

const Torrent = document.querySelectorAll('item__menu-option--torrent')
