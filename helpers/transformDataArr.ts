export function transfromDataArr<T>(subArrSize: number, array: T[]){
    let subarray = [];

    for (let i = 0; i < Math.ceil(array.length/subArrSize); i++){
        subarray[i] = array.slice((i*subArrSize), (i*subArrSize) + subArrSize);
    }
    
    return subarray;
}