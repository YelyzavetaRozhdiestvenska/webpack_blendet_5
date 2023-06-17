// import example from "./images/smoke.png";
// import imgSvg from "./images/flat.svg";
// import { sum } from "./helper/sum.js";
// import "./styles/main.scss";

// console.log("Webpack");
// // // Create a class property without a constructor
// class Game {
//   name = "Violin Charades";
// }
// const myGame = new Game();
// // Create paragraph node
// const p = document.createElement("p");
// p.textContent = `I like ${myGame.name}.`;

// // Create heading node
// const heading = document.createElement("h1");
// heading.textContent = "Interesting!";

// // Append SVG and heading nodes to the DOM
// const app = document.querySelector("#root");
// app.append(heading, p);

// const img = document.createElement("img");
// img.src = example;
// app.append(img);

// const svgImg = document.createElement("img");
// svgImg.src = imgSvg;
// app.append(svgImg);

// console.log(sum(2, 3));


import './styles/style.css'
import { base, frameworks, libs, list } from './data/hbsData';
import baseHbs from "./template/base.hbs";
import frameworksHbs from "./template/base.hbs";
import libsHbs from "./template/base.hbs";
import listHbs from "./template/base.hbs"; 
    
const newBase = baseHbs(base);
console.log(newBase);

const rootEl = document.querySelector(#root);
rootEl.insertAdjacentHTML("beforeend", newBase);

const newList = listHbs(list);
rootEl.insertAdjacentHTML("beforeend", newList);

const newFrameworksHbs = frameworksHbs(frameworks);
rootEl.insertAdjacentHTML('beforeend', newFrameworksHbs);


const newLibs = libsHbs(libs);
rootEl.insertAdjacentHTML("beforeend", newLibs);