
const  sumArray = (numArr:number[])=>{
    return numArr.reduce((counter, val)=> counter+val)
}

console.log(sumArray([1, 2, 3, 4, 5]))

