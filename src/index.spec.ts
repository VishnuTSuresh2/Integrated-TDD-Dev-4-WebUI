import DomFixtures from "dom-fixtures";

module.exports=function(domfixtures:DomFixtures){
    describe("Sample Test",()=>{
        it("is a sample test",()=>{
            domfixtures.mount("<div>Hello World</div>");
            expect(1).toBe(1);
        })
    })
}