const ismh1 = document.getElementById("ism")
const famh1 = document.getElementById("fam")
const yoshh1 = document.getElementById("yosh")

let ism = prompt("ism kiriting");
let fam = prompt("familiya kiriting");
let yosh = prompt("yosh kiriting");

let jovob = prompt("ismni katta harifda yoki kichik\n1katta\n2kichik");
if (jovob == 1) {
    ismh1.textContent = "1.ism: " + ism.toUpperCase();
    famh1.textContent = "2.fam: " + fam.toUpperCase();
    yoshh1.textContent = "3.yosh: " + yosh;

}else {
    ismh1.textContent = "1.ism: " + ism.toUpperCase();
    famh1.textContent = "2.fam: " + fam.toUpperCase();
    yoshh1.textContent = "3.yosh: " + yosh;
}

