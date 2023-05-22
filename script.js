function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function calculate(p1, p2) {
    switch (parseInt(p1) + parseInt(p2)) {
      case 2:
        return randomIntFromInterval(1, 2);
      case 3:
      case 4:
        return randomIntFromInterval(1, 3);
      case 5:
      case 6:
        return randomIntFromInterval(2, 4);
      case 7:
        return randomIntFromInterval(3, 4);
      case 8:
        return randomIntFromInterval(1, 4);
    }
}

function fight() {
  const p11 = document.getElementById("p11");
  const p12 = document.getElementById("p12");
  const p13 = document.getElementById("p13");
  const p14 = document.getElementById("p14");

  const p21 = document.getElementById("p21");
  const p22 = document.getElementById("p22");
  const p23 = document.getElementById("p23");
  const p24 = document.getElementById("p24");

  const r1 = document.getElementById("r1");
  const r2 = document.getElementById("r2");
  const r3 = document.getElementById("r3");
  const r4 = document.getElementById("r4");

  r1.value = calculate(p11.value, p21.value);
  r2.value = calculate(p12.value, p22.value);
  r3.value = calculate(p13.value, p23.value);
  r4.value = calculate(p14.value, p24.value);
}
