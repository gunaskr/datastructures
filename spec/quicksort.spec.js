const Q = require('../app/quicksort/quicksort');

describe("quick sort",()=>{

    it("testing node",()=>{
        const quickSort = new Q.QuickSort();
        let data = [2,5,2,8,3];
        quickSort.sort(data,0,data.length-1);
        expect(data).toEqual([2,2,3,5,8]);
    })
})