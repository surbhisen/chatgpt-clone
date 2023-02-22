let toggleModal = document.getElementById("hamburger");
let modal = document.getElementById("modal");
let crossButton = document.getElementById("cross");
toggleModal.addEventListener("click", () => {
    modal.style.display = 'flex';
})

crossButton.addEventListener('click', () => {
    modal.style.display = 'none';
})
