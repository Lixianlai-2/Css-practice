demo.style.left = "20px";

let n = 0;
const id = setInterval(() => {
  if (n <= 400) {
    demo.style.left = n + "px";
    n = n + 1;
  } else {
    console.log("停止");
    clearInterval(id);
  }
}, 1000 / 144);
