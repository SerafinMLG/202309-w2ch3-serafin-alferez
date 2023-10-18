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

export 
