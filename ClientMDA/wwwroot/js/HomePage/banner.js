//banner
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: 1,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});




/*rate*/
var swiper = new Swiper(".mySwiperRATE", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: 1,
    },
    pagination: {
        el: ".swiper-paginationR",
        clickable: true,
    },

});

//modal  
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector('#overlay')
const headerofstar = document.getElementById("in-rating-movie");
const movienum = document.getElementById('movienum');

function disableBtn() {
    document.getElementById("submit").style.backgroundColor = "dimgrey";
    document.getElementById("submit").disabled = true;
}
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')    
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    disableBtn();
    $("#1").prop('checked', false);
    $("#2").prop('checked', false);
    $("#3").prop('checked', false);
    $("#4").prop('checked', false);
    $("#5").prop('checked', false);    
}

for (let i = 0; i < openModalButtons.length; i++) {
    openModalButtons[i].addEventListener('click', e=> {
        const modal = document.querySelector("#modal")       
        openModal(modal)
        const f = $(event.currentTarget).parents(".box").find("h5")[0].textContent
        const o = $(event.currentTarget).parents(".box").find("a")[1].getAttribute('data')      
        headerofstar.textContent = f
        document.getElementById('movienum').value = o;
    })
}

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modalst.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modalst')
        closeModal(modal)
    })
})



//modal2
const openModalButtons2 = document.querySelectorAll('#openbtnE')
const closeModalButtons2 = document.querySelector('#closebtnE')
const overlay2 = document.querySelector('#overlayE')
const headerofstar2 = document.getElementById("in-rating-movieE");
//const movienum = document.getElementById('movienum');

//function disableBtn() {
//    document.getElementById("submit").style.backgroundColor = "dimgrey";
//    document.getElementById("submit").disabled = true;
//}

function openModal2(modal2) {
    if (modal2 == null) return
    modal2.classList.add('active')
    overlay2.classList.add('active')
}

function closeModal2(modal2) {
    if (modal2 == null) return
    modal2.classList.remove('active')
    overlay2.classList.remove('active')

    //disableBtn();
    //$("#1").prop('checked', false);
    //$("#2").prop('checked', false);
    //$("#3").prop('checked', false);
    //$("#4").prop('checked', false);
    //$("#5").prop('checked', false);
}

for (let i = 0; i < openModalButtons2.length; i++) {
    openModalButtons2[i].addEventListener('click', en => {
        const modal2 = document.querySelector("#modalstE")
        openModal2(modal2)
        const f = $(event.currentTarget).parents(".box").find("h5")[0].textContent
        headerofstar2.textContent = f
        //const o = $(event.currentTarget).parents(".box").find("a")[1].getAttribute('data')
        //document.getElementById('movienumE').value = o;
    })
}

overlay2.addEventListener('click', () => {
    const modals2 = document.querySelector('.modalstE.active')
    closeModal2(modals2)
})

closeModalButtons2.addEventListener('click', () => {
        const modals2 = document.querySelector('.modalstE.active')
        closeModal2(modals2)
    })


//change font
const titles = document.querySelectorAll('h5 a');
for (let i = 0; i < titles.length; i++) {
    if (titles[i].innerText.length >= 9) {
        titles[i].style.fontSize = "1.15rem";

    }
}


//swiper
    var swiper = new Swiper(".mySwipersw", {
        effect: "cards",
            /*grabCursor: true,*/
    });

//add rate






