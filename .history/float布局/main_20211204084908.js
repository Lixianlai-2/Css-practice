const randomMinMax = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

randomMinMax(11, 25);

//1. Math.random()  是0到1之间 （包含0，不包含1）
//2. 举例Math.random() * 3    那么就是0到3之间 （包含0，不包含3）
//3. Math.random() * 3 + 1 就是0到3.几
//4. Math.trunc()的作用是保留整数，删除小数位
//5. Math.trunc(3.几) 得到的就是3
//6.一次为例，那么Math.trunc(Math.random() * (max - min) + 1) 得到的就是0到(max -min)之间
//7. 0--(max - min)之间的随机整数 + min 就变成了0 +min 到 (max - min) + min之间， 也就是min到max之间
