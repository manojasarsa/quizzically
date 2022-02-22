const liveBtn = document.querySelector("#modal_btn_live");

const modalBox = document.querySelector("#modal_box");

const closeBtn = document.querySelector("#modal_btn_close");

liveBtn.addEventListener('click', (e) => {
    modalBox.classList.add("modal_active");
})

closeBtn.addEventListener('click', () => {
    modalBox.classList.remove("modal_active");
})