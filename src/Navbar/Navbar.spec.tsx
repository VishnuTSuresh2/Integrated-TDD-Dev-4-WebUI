import DomFixtures from "dom-fixtures";
import Navbar from "./Navbar";
import * as ReactDOM from "react-dom";
import * as React from 'react';
import {expect} from "chai";

let $=require('jquery');

export default function(domfixtures:DomFixtures){
    
    describe("Navbar",()=>{
        it("has classname viq-navbar",()=>{
            let fixture:HTMLElement=domfixtures.mount();
            ReactDOM.render(<Navbar />,fixture);
            expect($(fixture).find(".viq-navbar").length).to.equal(1);
        })
    })
}