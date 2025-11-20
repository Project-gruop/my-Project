

const joinBtn = document.querySelector(".join-btn");
if (joinBtn) {
    joinBtn.addEventListener("click", function() {
        window.location.href ="form.html"; 
    });
}

const loginBtn = document.querySelector(".btn-outline");
const signupBtn = document.querySelector(".btn");
if(loginBtn) {
    loginBtn.addEventListener("click", function() {
        window.location.href = "form.html";
    }); 
};  
signupBtn.addEventListener("click", function() {
    window.location.href = "form.html";
});




const courseButtons = document.querySelectorAll(".course-card button");
courseButtons.forEach(btn => {
    btn.addEventListener("click", function() {
        btn.style.backgroundColor = "#dedede";
        btn.textContent = "Started!"; 
    });
});