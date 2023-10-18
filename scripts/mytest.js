const arrayPop = (array) => {
  let newarray = [];
  
  for (let i = 0; i<array.length - 1; i++){
    newarray[i] = array[i]
  }
  array = newarray;
  return newarray;
};

let pepe = [1,3,5];
console.log(arrayPop(pepe));
console.log(pepe)
