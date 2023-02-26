(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

function toggleModal(id) {
  document.getElementById(id).classList.toggle("hide-modal");
}

// function showModal() {
//   document.getElementById('contact-modal').classList.add('hide-modal');
// }// function showModal() {
//   document.getElementById('contact-modal').classList.add('hide-modal');
// }
