import DomFixtures from "dom-fixtures";

export default function run(){
    var container=document.createElement("div");
    container.id="dom-fixtures-container";
    document.body.appendChild(container);

    let domfixtures=new DomFixtures("dom-fixtures-container");

    function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
    }
    // requires and returns all modules that match

    var modules = requireAll(require.context("./src", true, /\.spec\.(ts|js|tsx|jsx)$/));
    // is an array containing all the matching modules

    modules.forEach(function(module){
        module.default(domfixtures);
    });
};