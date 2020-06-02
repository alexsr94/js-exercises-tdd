
const removeMiddle = (array)=>{
    let middleWord = Math.floor(array.length / 2);


    return array.splice(middleWord,1)
}

module.exports =removeMiddle;