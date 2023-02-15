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


var nClicks    = 0;
var nMaxClicks = 3;

function Clicking() {
    nClicks++;

    if (nClicks >= nMaxClicks){
       
       alert("On dirais que le fichier ne veux pas s'ouvrir \nEssaye de trouver une autre solution.");   
    }
}

const GTA6Deleted = document.getElementById("GTA6");
const GTA6Trash = document.getElementById('GTA6Trash')
const textTC = document.getElementById('text__trashcan');
const BtnDelete = document.getElementById('section__delete')
document.getElementById("delete").onclick = function() {
	GTA6Deleted.style.visibility = "none";
	GTA6Deleted.style.display = "none";

	GTA6Trash.style.visibility = "visible";
	GTA6Trash.style.display = "flex";

	textTC.style.display ="none";
	textTC.style.visibility="none";

	BtnDelete.style.visibility = "visible";
	BtnDelete.style.display = "flex";

}
