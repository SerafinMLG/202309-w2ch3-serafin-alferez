export const arrayLength = (data) => {
  let count = 0;
  for (const key of data) {
    count++
  }
  return count;
};

export const arrayPush = (array,item) => {
  const size = arrayLength(array);
  array[size] = item;
  return arrayLength(array);
};

export const arrayPop = (array) => {
  return array[(array.length - 1)]
}

export const arrayUnshift = (array,...item) => {
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
    
    return arrayLength(newarray);
}


export const arrayShift = (array) => {
  return array[0]
}
