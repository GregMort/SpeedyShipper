var totalLbs1 = [0];
var totalLbs2 = [0];
var totalLbs3 = [0];
var totalLbs4 = [0];
var totalLbs5 = [0];
var totalLbs6 = [0];

document.getElementById("output").style.visibility = "hidden";

document.getElementById("input1").addEventListener("input", function (e) {
  let lbs1 = e.target.value;
  totalLbs1.push(lbs1);
  const convert = (lbs1 * 0.453592).toFixed(2);
  document.getElementById("input2").value = convert;
});

document.getElementById("input2").addEventListener("input", function (e) {
  let kgs1 = e.target.value;
  const convertKgs = (kgs1 * 2.2046).toFixed(2);
  totalLbs1.push(convertKgs);
  document.getElementById("input1").value = convertKgs;
});

document.getElementById("input3").addEventListener("input", function (e) {
  let lbs2 = e.target.value;
  totalLbs2.push(lbs2);
  const convert = (lbs2 * 0.453592).toFixed(2);
  document.getElementById("input4").value = convert;
});

document.getElementById("input4").addEventListener("input", function (e) {
  let kgs2 = e.target.value;
  const convertKgs = (kgs2 * 2.2046).toFixed(2);
  totalLbs2.push(convertKgs);
  document.getElementById("input3").value = convertKgs;
});

document.getElementById("input5").addEventListener("input", function (e) {
  let lbs3 = e.target.value;
  totalLbs3.push(lbs3);
  const convert = (lbs3 * 0.453592).toFixed(2);
  document.getElementById("input6").value = convert;
});

document.getElementById("input6").addEventListener("input", function (e) {
  let kgs3 = e.target.value;
  const convertKgs = (kgs3 * 2.2046).toFixed(2);
  totalLbs3.push(convertKgs);
  document.getElementById("input5").value = convertKgs;
});

document.getElementById("input7").addEventListener("input", function (e) {
  let lbs4 = e.target.value;
  totalLbs4.push(lbs4);
  const convert = (lbs4 * 0.453592).toFixed(2);
  document.getElementById("input8").value = convert;
});

document.getElementById("input8").addEventListener("input", function (e) {
  let kgs4 = e.target.value;
  const convertKgs = (kgs4 * 2.2046).toFixed(2);
  totalLbs4.push(convertKgs);
  document.getElementById("input7").value = convertKgs;
});

document.getElementById("input9").addEventListener("input", function (e) {
  let lbs5 = e.target.value;
  totalLbs5.push(lbs5);
  const convert = (lbs5 * 0.453592).toFixed(2);
  document.getElementById("input10").value = convert;
});

document.getElementById("input10").addEventListener("input", function (e) {
  let kgs5 = e.target.value;
  const convertKgs = (kgs5 * 2.2046).toFixed(2);
  totalLbs5.push(convertKgs);
  document.getElementById("input9").value = convertKgs;
});

document.getElementById("input11").addEventListener("input", function (e) {
  let lbs6 = e.target.value;
  totalLbs6.push(lbs6);
  const convert = (lbs6 * 0.453592).toFixed(2);
  document.getElementById("input12").value = convert;
});

document.getElementById("input12").addEventListener("input", function (e) {
  let kgs6 = e.target.value;
  const convertKgs = (kgs6 * 2.2046).toFixed(2);
  totalLbs6.push(convertKgs);
  document.getElementById("input11").value = convertKgs;
});

document.querySelector("button").onclick = function () {
  var total = totalLbs1.length;
  var total2 = totalLbs2.length;
  var total3 = totalLbs3.length;
  var total4 = totalLbs4.length;
  var total5 = totalLbs5.length;
  var total6 = totalLbs6.length;

  var a = parseInt(totalLbs1[total - 1]);
  var b = parseInt(totalLbs2[total2 - 1]);
  var c = parseInt(totalLbs3[total3 - 1]);
  var d = parseInt(totalLbs4[total4 - 1]);
  var e = parseInt(totalLbs5[total5 - 1]);
  var f = parseInt(totalLbs6[total6 - 1]);
  if (a == NaN) {
    var a = "peter";
  }
  console.log(a);

  var final = a + b + c + d + e + f;
  document.getElementById("output").style.visibility = "visible";
  document.querySelector("h4").innerHTML = "Pounds: " + final;
  console.log(final);
};
