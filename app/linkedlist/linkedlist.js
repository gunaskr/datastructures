"use strict";

class LinkedList {

    constructor() {
        this.first = null;
    }

	/**
	 * Insert at the front of the list
	 * @param node
     * @param position
	 */
    insert(n, p = 1) {
        if (p == 1) {
            n.setNext(this.first);
            this.first = n;
            return;
        }else {
            // find the temp node
            // need to make sure if position is less than size of the list
            let temp = this.first;
            for(let i=0;i<p-2;i++){
                temp = temp.getNext();
            }
            //make the temp node as incumbent nodes next
            n.setNext(temp.getNext());
            temp.setNext(n);
        }
    }

	/**
	 * Remove from the front of the list
	 * @param node
	 */
    remove() {
        if (this.first.getNext() != null)
            this.first = this.first.getNext();
        else this.first = null;
    }
    /**
     * iteratively reverse the lsit
     */
    reverse(){
        let current,next,prev;
        current = this.first;
        prev = null;
        while(current!=null){
            next = current.getNext();
            current.setNext(prev);
            prev = current;
            current = next;
        }
        this.first = prev;
    }

    /**
     * recursively reverse the lsit
     */
    reverseRec(p = this.first){
        if(p.getNext()==null){
            this.first = p;
            return;
        }
        this.reverseRec(p.getNext());
        let q = p.getNext();
        q.setNext(p);
        p.setNext(null);
    }

	/**
	 * Recursively traverse this list and print the node value
	 * @param node
	 */
    printList(node) {
        console.log("Node is " + node.getValue());
        if (node.getNext() != null) this.printList(node.getNext());
    }

    print() {
        this.printList(this.first);
    }

    /**
	 * Recursively traverse this list and print the node value in reverse order
	 * @param node
	 */
    reversePrintList(node) {
        if (node == null){
            return;
        }
        this.reversePrintList(node.getNext());
        console.log("Node is " + node.getValue());
    }

    reversePrint() {
        this.reversePrintList(this.first);
    }

}

class Node {
    constructor(data) {
        this.data = data;
    }

    setNext(n) {
        this.next = n;
    }

    getNext(n) {
        return this.next;
    }

    getValue() {
        return this.data;
    }
};

module.exports = {
    LinkedList: LinkedList,
    Node: Node
}