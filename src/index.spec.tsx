import DomFixtures from "dom-fixtures";
import Navbar from "./index";
let $=require('jquery');

import {expect} from "chai";

export default function(domfixtures:DomFixtures){
    describe("index",()=>{
        let fixture:HTMLElement;
        let navbar:Navbar;
        beforeEach(()=>{
            fixture=domfixtures.mount();
            navbar=new Navbar(fixture);
        });
        it("can create navbar on an element",()=>{
            let fixture:HTMLElement=domfixtures.mount();
            let before_length=$(fixture).children().length;
            let navbar:Navbar=new Navbar(fixture);
            expect($(fixture).children().length).to.be.greaterThan(0);
        });
        it("clicking on link of different app causes redirection",()=>{
            expect(0).to.be.greaterThan(0);
        });
        it("clicking on link of same app causes local navigation",()=>{
            expect(0).to.be.greaterThan(0);
        });
        it("can keep history across sites",()=>{
            expect(0).to.be.greaterThan(0);
        });
    });
}