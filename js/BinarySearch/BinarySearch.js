
function BinarySearch(arr, item) {

    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {

        // 0 <= 15

        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];

        if (guess === item) {

            return mid
        } else if (guess > item) {

            high = mid - 1;
        } else {
            low = mid + 1;
        }


    }

    return -1

}

console.log(BinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 15, 22, 45], 20));

// Time Complexity:
// Best Case: O(1)
// Average Case: O(log N)
// Worst Case: O(log N)