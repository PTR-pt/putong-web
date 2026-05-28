const btn1 = document.querySelector(".btn1");
const msg = document.getElementById("msg");

btn1.addEventListener("click", () => {
    msg.textContent = "✅ 网站美化成功！超好看吧！";
});