# Integrated-TDD-Dev-4-WebUI
Very generic starter kit to integrate TDD easily into development process of web applications.

Usually, in console applications, it's very easy to integrate TDD into the development process. For instance, the following is how an inexperienced developer might write code:

```javascript
//add.js
export default function add(a,b){
    return a+b;
}

//index.js
import add from "add.js"
var s=add(1,2);
console.log(s)
```

if you look at above code, index.js contains some temporary code that is used to see if we get the correct result. In this case the developer simply look at the console and see if the results are right, then afterwards she simply deletes the code.

But after she learns TDD and has setup the testing environment, her code changes to this:

```javascript
//add.js
export default function add(a,b){
    return a+b;
}

//add.spec.js
import add from "add.js"

describe("add",()=>{
    it("adds 2 numbers and returns the result",()=>{
        var s=add(1,2);
        expect(s).toBe(3);
    })
})
```

In this new code she achieves everything she achieved in the first piece of code, at the same time, she also managed to add testing to the code without any decrease in productivity.

The situation, however is a little different in UI development. Let's look at the following piece of code:

```javascript
//add.js
export default function add(a,b,element){
    element.innerHTML=(a+b);
}

//add.spec.js
import add from "add.js"

describe("add",()=>{
    it("adds 2 numbers and returns the result",()=>{
        var div=document.getElementById("fixture");
        var s=add(1,2,div);
        expect(div.innerHTML).toBe("3");
    })
})
```

The problem here is that while it shows the test results, it cannot necessarily be used for development, because most development involves seeing the result. In this case the 3 might need to have specific styling and to see that, you will need to see the result. So you'll need a seperate process from TDD anyway to complete the development process. Once you need to have atleast 2 seperate process, you'll have a tendency to ge rid of TDD, since you can still develop the components without it.

This framework solves the problem by allowing you to see the UI for each test so that you can use that for development.