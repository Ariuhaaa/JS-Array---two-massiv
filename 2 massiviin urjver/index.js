
let arr1 = [3, 45, 23, 78, 34];
let arr2 = [4, 2, 34, 4, 12, 1];

let arr3 = [];

let i = 0;
let j = 0;

for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (i == j) {
        arr3[i] = arr1[i] * arr2[j];
    }
  }
}
 arr3[arr1.length] = +1; 

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);