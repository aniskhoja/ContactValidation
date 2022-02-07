// // function insertionSort(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //         const element = arr[i];
// //         let j = i - 1;
// //         while(j >= 0 && arr[j] > element) {
// //             arr[j + 1] = arr[j]
// //             j--;
// //         }
// //         arr[j + 1] = element
// //     }
// //     return arr
// // }

// const { val } = require("objection");

// // let arr = [8,2]
// // console.log(insertionSort(arr))



// // function factorial(n) {
// //     if (n == 1 || n == 0) {
// //         console.log("work")
// //         return 1;
// //     } else {
// //         return n * factorial(n -1)
// //     }
// // }

// // console.log(factorial(4))


// // function quickSort(array) {
// //     if (array.length === 1) {
// //         return array;
// //     }

// //     const pivot = array[array.length - 1 ]
// //     const leftArr = [];
// //     const rightArr = [];
// //     for (const el of array.slice(0, array.length - 1)) {
// //         (el < pivot) ? leftArr.push(el) : rightArr.push(el)
// //     }

// //     if (leftArr.length > 0 && rightArr.length > 0) {
// //         return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// //     } else if (leftArr.length > 0) {
// //         return [...quickSort(leftArr), pivot];
// //     } else {
// //         return [pivot, ...quickSort(rightArr)];
// //     }
// // }

// //const array = [8,2,7,99,66,1,3,3,99,44,32,74]
// // console.log(quickSort(array)) 
// // function merge(leftArr, rightArr) {
// //     const output = [];
// //     let leftIndex = 0;
// //     let rightIndex = 0;
    
// //     while(leftIndex < leftArr.length && rightIndex < rightArr.length ) {
// //         const leftEl = leftArr[leftIndex]
// //         const rightEl = rightArr[rightIndex]

// //         if (leftEl < rightEl) {
// //             output.push(leftEl)
// //             leftIndex++;
// //         } else {
// //             output.push(rightEl)
// //             rightIndex++;
// //         }
// //     }

// //     return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
// // }

// // function mergeSort(array) {
// //     if (array.length === 1) {
// //         return array;
// //     }

// //     const middle = Math.floor(array.length / 2);
// //     const leftArr = array.slice(0, middle);
// //     const rightArr = array.slice(middle)

// //     return merge(
// //         mergeSort(leftArr),
// //         mergeSort(rightArr)
// //     )
// // }

// // console.log(mergeSort([6,3,88,1,44,6,2,9,55]))


// // var twoSum = function(nums, target) {
// //     let a =[];
// //    for (let x = 0; x < nums.length; x++) {   
// //        for (let i = 0; i < nums.length; i++ ) {
// //            if((nums[x] + nums[i]) === target && i !== x) {  
// //                  a.push(x);
// //                  a.push(i)
// //                  return a;                   
// //            }
// //        }
// //    }
// // };
// // const twoSum = (nums, target) => {
// //     const map = [];
  
// //     for (let i = 0; i < nums.length; i++) {
// //       const another = target - nums[i];

// //       if (another in map) {
// //         return [map[another], i];
// //       }
  
// //       map[nums[i]] = i;
// //     }
  
// //     return null;
// //   };
// // console.log(twoSum([2,4,11,15], 15))
// // //--------------------------------------------------------

// // function* getPage(pageSize = 1, list) {
// //     let output = [];
// //     let index = 0;
// //     while(index < list.length) {
// //         output=[]
// //     for (let i = index; i < index + pageSize; i++) {
// //         output.push(list[i])    
// //     }

// //     yield output;    
// //     index += pageSize;
// //     }
// // }

// // list = [1, 2, 3, 4, 5, 6, 7, 8]
// // var page = getPage(3, list);

// // console.log(page.next())
// // console.log(page.next())
// // console.log(page.next())
// // console.log(page.next())

// var countPrimes = function(n) {
//     let arrayBoolean = new Array(n).fill(true);
//     let primes = []
//     for (let i = 2; i < Math.sqrt(n); i++){
//         if (arrayBoolean[i]) {
//             for (let j = i * i; j < n; j += i){
//                 arrayBoolean[j] = false    
//             }
//         }
//     }
//     arrayBoolean.forEach((element, index) => {
//         if (element && index > 1) primes.push(index)
//     })

//     let middle1 = Math.floor((primes.length + 1) / 2);
//     let middle2 = Math.ceil((primes.length + 1) / 2);
//     return primes.slice(middle1 - 1, middle2);
// };


// console.log(Math.sqrt(15))
// console.log(countPrimes(0));
    