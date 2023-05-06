/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
const add = [".com", ".org"];

const getDomainsNames = (array1, array2, array3, array4) => {
  let arrayDomainsName = "";

  for (let i = 0; i < array1.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      for (let y = 0; y < array3.length; y++) {
        for (let z = 0; z < array4.length; z++) {
          arrayDomainsName += `<p>${array1[i] +
            array2[x] +
            array3[y] +
            array4[z]}</p>`;
        }
      }
    }
  }
  return arrayDomainsName;
};

const arrayWithDomainsName = getDomainsNames(pronoun, adj, noun, add);

document.getElementById("btnDomain").addEventListener("click", function() {
  document.getElementById("damainNameid").innerHTML = arrayWithDomainsName;
});
