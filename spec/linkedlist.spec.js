const Node = require('../app/linkedlist/linkedlist');

describe("linked list",()=>{

    it("testing",()=>{
        const node = new Node("A",null);
        console.log(JSON.stringify(node));
        expect(1).toBeTruthy();
    })
})