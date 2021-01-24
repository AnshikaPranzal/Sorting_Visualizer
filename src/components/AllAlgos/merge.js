//merge Sort
export const merge2 = arr =>{
    const moves= []
    if(arr.length<=1)
    return arr;
    const tempArr = arr.slice()
    // console.log()
    mergeSort(arr,0,arr.length-1,tempArr,moves);
    return moves;
}

const mergeSort = (arr,start,end,tempArr,moves)=>{
    console.log(start,end)
    if(start===end) return;
    const mid=Math.floor((start+end)/2);
    mergeSort(tempArr,start,mid,arr,moves)
    mergeSort(tempArr,mid+1,end,arr,moves)
    doMergeSort(arr,start,mid,end,tempArr,moves)
}

const doMergeSort = (arr,start,mid,end,tempArr,moves)=>{
    let i,j,k;
    k=start;
    i=start;
    j=mid + 1;
    while(i<= mid && j<= end){
        const obj={}
        moves.push([i,j])
        moves.push([i,j])
        if(tempArr[i]<=tempArr[j]){
            moves.push([k,tempArr[i]])
            arr[k++]=tempArr[i++]
        }
        else{
            moves.push([k,tempArr[j]])
            arr[k++]=tempArr[j++]
        }
    }
    while(i<=mid){
        moves.push([i,i])
        moves.push([i,i])
        moves.push([k,tempArr[i]])
        arr[k++]=tempArr[i++]
    }
    while(j<=end){
        moves.push([j,j])
        moves.push([j,j])
        moves.push([k,tempArr[j]])
        arr[k++]=tempArr[j++]
    }
}

//bubbleSort
export const bubble= arr=>{
    
}


//leadership
// cstmr satisfacation
// emp involvment
// continuous process improvement
// supplier prtnrship
// performance major

// LEADERSHIP
//emphasize prevention
//encrage collaboration rather than competition
//try to improve communication
//demonstrate commitment to quality
//choose supplier on the basis of quality
//establish org systems that support quality efforts

// CUSTOMER SATISFICATION
// who are my cust
// what do they need
// what are there major in expectation
// does my prod and service meet their expectation
// how do i satisfy their needs
// what correctifaction is necessary

// People-most imp assets
// quality comes from people, project team(qual. control circle), educ and training, motiv. prog., incentive scheme etc., conductive work culture, right attitude, commitment

