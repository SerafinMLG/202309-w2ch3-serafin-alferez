export const arrayLength = (data) => {
  let count = 0;
  for (const key of data) {
    count++
  }
  return count;
};

export const arrayPush = (array,...item) => {
  let newarray = [...item];
  let size = arrayLength(array);
  for (let i of newarray) {
    array[size] = i;
    size++;
  }

  return arrayLength(array);
};

export const arrayPop = (array) => {
  return array[(array.length - 1)]
}

export const arrayUnshift = (array,...item) => {
  let newarray = [...item];
  let k = arrayLength(newarray);
  for (let i of array){
    newarray[k] = i;
    k++
  }
  
  return arrayLength(newarray);
}


export const arrayShift = (array) => {
  return array[0]
}

export const arrayIncludes = (array,item) => {
  for (let i of array) {
    if (i === item) {
      return true;
    }
  }
  return false;
}

export const arrayJoin = (array,item) => {
  let newstring = '';
  for (let i=0; i < arrayLength(array); i++) {
    newstring += array[i];
    if (i < (arrayLength(array) - 1)){
      newstring += item
    }
  }
  return newstring;
}
