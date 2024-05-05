
function MergeSort(arr){

    if(arr.length <= 1){

        return arr
    }
      
  const mid = Math.floor((arr.length)/2);
  const leftHalve = arr.slice(0,mid);
  const rightHalve = arr.slice(mid);
  const sortedLeft = MergeSort(leftHalve);
  const sortedRight = MergeSort(rightHalve);

  return Merge(sortedLeft,sortedRight)

}

function Merge(left , right){

    let result = [];
    let leftIndex = 0 ; 
    let rightIndex = 0 ;

     while(leftIndex < left.length && rightIndex < right.length){

        if(left[leftIndex] < right[rightIndex]){

            result.push(left[leftIndex]);
            leftIndex++;
        } else{
               result.push(right[rightIndex]);
               rightIndex++;
        }
     }

     while(leftIndex < left.length){
    result.push(left[leftIndex]);
    leftIndex++;       
     }
     while (rightIndex < right.length) {
       result.push(right[rightIndex]);
       rightIndex++;
     }

     return result ;
}

console.log(MergeSort([60, 40, 100, 14, 50, 16]));

// Time Complexity:
// Best Case: O(n log n), When the array is already sorted or nearly sorted.
// Average Case: O(n log n), When the array is randomly ordered.
// Worst Case: O(n log n), When the array is sorted in reverse order.