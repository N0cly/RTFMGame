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

// MDP


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const modalViewPwd = document.querySelectorAll('.window__mdp');
const modalXp = document.querySelectorAll('.window__xp-files');

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    const password = loginForm.password.value;

    if (password === "test") {
        // alert("You have successfully logged in.");
        modalViewPwd.classList.remove('active-modal')
		modalXp.classList.add('active-modal')

    } else {
        alert('Mot de passe incorrect ...')
    }
})