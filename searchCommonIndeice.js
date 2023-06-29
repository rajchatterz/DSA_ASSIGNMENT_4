let arr1 = [1,2,3,4,5]
let arr2 = [1,2,5,7,9]
let arr3 = [1,3,4,5,8]

function searchCommonIndeice(arr1,arr2,arr3){
    let result = [];
    for(let i =0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            for(let k=0;k<arr3.length;k++){
                if(arr1[i]==arr2[j] && arr2[j]==arr3[k]){
                    result.push(arr3[k])
                }
            }
        }
    }
    return result

}
console.log(searchCommonIndeice(arr1,arr2,arr3))