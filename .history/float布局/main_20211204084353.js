const randomMinMax = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

randomMinMax(11, 25);

//1. Math.random()  是0到1之间
//2. 举例Math.random() * 3    那么就是0到3之间
//3. Math.random() * 3 + 1 就是0到3.几
