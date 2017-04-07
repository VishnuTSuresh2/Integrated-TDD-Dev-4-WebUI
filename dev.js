import run from "./runner";
import "mocha/mocha.js";
import "mocha/mocha.css";

var container=document.createElement("div");
container.id="mocha";
document.body.appendChild(container);

mocha.setup('bdd')
run(true); 

mocha.run();
