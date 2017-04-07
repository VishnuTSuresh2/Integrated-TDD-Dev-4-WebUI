import DomFixtures from "dom-fixtures";
import Navbar from "./index";
let $=require('jquery');

import {expect} from "chai";

export default function(domfixtures:DomFixtures){
    describe("index",()=>{
        it("can create navbar on an element",()=>{
            let fixture:HTMLElement=domfixtures.mount();
            let before_length=$(fixture).children().length;
            let navbar:Navbar=new Navbar(fixture);
            expect($(fixture).children().length).to.be.greaterThan(0);
        });
    });
}