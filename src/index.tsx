import Navbar from "./Navbar/Navbar";
import * as ReactDOM from "react-dom";
import * as React from 'react';

export default class {
    constructor(element:HTMLElement){
        ReactDOM.render(<Navbar />,element);
    }
}