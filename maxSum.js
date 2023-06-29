let nums = [1,4,3,2]


function maxSum(nums){
    let result = []
    let num=nums.sort((a,b)=>a-b)
    for(let i =0;i<num.length;i+=2){
        result.push(Math.min(nums[i],nums[i+1]))

    }
    return result[0]+result[1]
}
console.log(maxSum(nums))