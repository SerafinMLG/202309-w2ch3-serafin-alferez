const arrayLength = (data) => {
  let count = 0;
  for (const key of data) {
    count++
  }
  return count;
};

// const arrayUnshift = (array,...item) => {
//   let newarray = [];
//   let k = 0;
//   const size = arrayLength(array);
//   // newarray[0] = item;
//   for (let m of item) {
//     newarray[k] = m;
//     k++
//   }
//   for (let i of array){
//     newarray[k] = array[i]
//     k++
//   }
//   return newarray;
// }

// export const arrayIncludes = (array,item) => {
//   for (let i of array) {
//     if (i === item) {
//       return true;
//     }
//   }
//   return false;
// }

// export const arrayPush = (array,...item) => {
//   let newarray = [...item];
//   let size = arrayLength(array);
//   for (let i of newarray) {
//     array[size] = i;
//     size++;
//   }
//   return array;
// };

export const arrayPush = (array,...item) => {
  let newarray = [...item];
  let myarray = [];
  let size = arrayLength(array);
  for (let i of newarray) {
    array[size] = i;
    size++;
  }
  myarray[0] = array;
  myarray[1] = arrayLength(array);
  return myarray
  // return arrayLength(array);
};

let arr = [1,3,5,6];
console.log(arrayPush(arr,7,11,''))
// console.log(arrayUnshift(arr,0, 2, "fsagd",null));

