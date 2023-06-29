let arr1= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

function tranposeOfAnArray(arr1){
    let row = arr1.length
    let col = arr1[0].length
    let final = []
    for(let i=0;i<col;i++){
        let result = []
        for(let j=0;j<row;j++){
            result.push(arr1[j][i])
        }
        final.push(result)
    }
    console.log(final)
}
tranposeOfAnArray(arr1)