// demo.style.transform = `translateX(${n}px)`;

// let n = 0;

setTimeout(() => {
  if (n <= 400) {
    demo.style.transform = `translateX(${n}px)`;
    n = n + 1;
  } else {
    console.log("停止");
  }
}, 3000);

// const id = setInterval(() => {
//   if (n <= 400) {
//     demo.style.transform = `translateX(${n}px)`;
//     n = n + 1;
//   } else {
//     console.log("停止");

//     // 停止计时器
//     clearInterval(id);
//   }
// }, 1000 / 144);

// demo.style.transform = `translateX(${n}px)`;

// let n = 0;
// const id = setInterval(() => {
//   if (n <= 400) {
//     demo.style.transform = `translateX(${n}px)`;
//     n = n + 1;
//   } else {
//     console.log("停止");

//     // 停止计时器
//     clearInterval(id);
//   }
// }, 1000 / 144);
