
const removeDuplicates =(numArr: number[])=>{
    const result = [...new Set(numArr)]
    // console.log(result)
    return result
}



removeDuplicates([1, 2, 2, 3, 4, 4, 5])

