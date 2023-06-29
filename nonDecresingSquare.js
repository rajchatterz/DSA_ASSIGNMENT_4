let nums = [-4,-1,0,3,10]

function nonDecresingSquare(nums){
    let result = []
    for(let i=0;i<nums.length;i++){
        result.push(nums[i]**2)
    }
    result=result.sort((a,b)=>a-b)
    return result;
}
console.log(nonDecresingSquare(nums))