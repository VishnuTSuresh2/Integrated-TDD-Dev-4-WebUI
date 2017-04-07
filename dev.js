import run from "./runner";
import "mocha/mocha.js";
import "mocha/mocha.css";

var container=document.createElement("div");
container.id="mocha";
document.body.appendChild(container);

mocha.setup({
    ui:'bdd'
})
function mock(glb,callback){
    let _glb=window[glb];
    window[glb]=(...args)=>{
        callback.apply(this,args);
        _glb.apply(this,args);
    }
}
mock("describe",(description,execute)=>{
    
});
mock("it",(description,execute)=>{
    
});
run(true); 

mocha.run();