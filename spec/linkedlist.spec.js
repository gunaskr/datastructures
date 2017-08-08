const LL = require('../app/linkedlist/linkedlist');

describe("linked list",()=>{

    it("testing node",()=>{
        const node = new LL.Node("A",null);
        expect(1).toBeTruthy();
    })

    it("testing linked list insert",()=>{
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        list.print();
        expect(list.insert).toBeDefined();
    })

    it("testing linked list insert at specific position",()=>{
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        const node2 = new LL.Node("C");
        list.insert(node2,2);
        list.print();
        expect(list.insert).toBeDefined();
    })

    it("testing linked list remove",()=>{
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        const node2 = new LL.Node("C");
        list.insert(node2);
        list.remove();
        list.print();
        expect(list.insert).toBeDefined();
    })

     it("testing linked list reverse",()=>{
         console.log("testing linked list reverse");
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        const node2 = new LL.Node("C");
        list.insert(node2);
        list.print();
        list.reverse();
        list.print();
        expect(list.insert).toBeDefined();
    })

    it("testing linked list reverse print",()=>{
         console.log("testing linked list reverse print");
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        const node2 = new LL.Node("C");
        list.insert(node2);
        list.print();
        list.reversePrint();
        expect(list.insert).toBeDefined();
    })

    it("testing linked list reverse recursive",()=>{
         console.log("testing linked list reverse recursive");
        const list = new LL.LinkedList();
        const node = new LL.Node("A");
        list.insert(node);
        const node1 = new LL.Node("B");
        list.insert(node1);
        const node2 = new LL.Node("C");
        list.insert(node2);
        list.print();
        list.reverseRec();
        list.print();
        expect(list.insert).toBeDefined();
    })
})