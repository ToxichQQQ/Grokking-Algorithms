let items = [5,3,7,6,2,9,4,6,1,4,2,9,5,0,2,6,9,3,9,9,6,11,44,88,22,33,55,88,44,-5,2];
let count = 0

function quickSort(array){
    if (array.length <= 1){
        return array
    }

    let middleIndex = Math.floor(array.length / 2)
    let middleItem = array[middleIndex]

    let less = []
    let great = []

    for (let i = 0;i< array.length;i++){
        count++
        if(i === middleIndex) continue

        if (array[i] < middleItem){
            less.push(array[i])
        }else{
            great.push(array[i])
        }
    }
    return [...quickSort(less),middleItem,...quickSort(great)]
}

console.log(quickSort(items))
console.log(count)