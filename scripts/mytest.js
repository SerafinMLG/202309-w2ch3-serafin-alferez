const arrayLength = (data) => {
  let count = 0;
  for (const key of data) {
    count++
  }
  return count;
};

const arrayUnshift = (array,...item) => {
  let newarray = [];
  let k = 0;
  const size = arrayLength(array);
  newarray[0] = item;
  for (let m of item) {
    newarray[k] = m;
    k++
  }
    for (let i=0; i < size; i++){
      newarray[k] = array[i]
      k++
    }
  return newarray;
}

let arr = [1,3,5];
console.log(arrayLength(arr))
console.log(arrayUnshift(arr,0, 2, "fsagd",null));

