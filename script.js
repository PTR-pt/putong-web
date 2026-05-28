const likeBtn = document.getElementById("likeBtn");
const sayHi = document.getElementById("sayHi");
const tips = document.getElementById("tips");

likeBtn.addEventListener("click", () => {
    tips.textContent = "👍 谢谢你的点赞！";
});

sayHi.addEventListener("click", () => {
    tips.textContent = "👋 你好！很高兴认识你！";
});