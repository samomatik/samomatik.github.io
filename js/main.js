let skillsBtn = document.getElementById("skillsBtn");
let skillsModal = document.getElementById("skillsModal")
let aboutMeBtn = document.getElementById("aboutMeBtn");
let aboutMeModal = document.getElementById("aboutMeModal");

skillsBtn.onclick = () => {
    skillsModal.style.display = "block"
}

aboutMeBtn.onclick = () => {
    aboutMeModal.style.display = "block"
}

window.onclick = function (e) {
    if (e.target == skillsModal || e.target == aboutMeModal) {
        skillsModal.style.display = "none"
        aboutMeModal.style.display = "none"
    }
}