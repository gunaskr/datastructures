class QuickSort{
    sort(list,first,last){
        if(first<last){
            const pi = this.partition(list,first,last);
            this.sort(list,first,pi-1);
            this.sort(list,pi+1,last);
        }
    }

    partition(list,first,last){
        const pivotValue = list[last];
        let i = (first - 1);
        for(let j=first;j<last;j++){
            if(list[j]<=pivotValue){
                i++;
                const temp = list[i];
                list[i]=list[j];
                list[j]=temp;
            }
        }
        const temp = list[i+1];
        list[i+1] = list[last];
        list[last] = temp;
        return i+1;
    }
}

module.exports = {
    QuickSort: QuickSort
}