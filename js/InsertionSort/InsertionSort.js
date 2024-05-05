
function insertionSort(arr){

    for(var i = 1 ; i < arr.length ; i++){

        var key = arr[i];
        j = i - 1 ; 

        while(j >= 0 && arr[j] > key ){

             arr[j+1] = arr[j] 
             j = j - 1 ;

        }
        arr[j+1] = key
        

    }

    return arr
}
console.log(insertionSort([80, 100, 60 , 30, 50, 70]));

// Quadratic Time complexity

// Bestcase o(n)

// AverageCase o(n^2)

// WorstCase o(n^2)  


