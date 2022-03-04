function swapMaxAndMin(arr) {
    if(!arr) return;
    
    // Assume the first element in the arr is both the min and max.
    //       [index, value in that index]
    let maxArray = [0, arr[0]];
    let minArray = [0, arr[0]];

    for(let i=0; i<arr.length; i++) {
        // If the current value is less than the min in minArray
        // Update the minArray[0] with i and minArray[1] with arr[i]
        if(arr[i] < minArray[1]) {
            minArray[0] = i;
            minArray[1] = arr[i];
        }

        if(arr[i] > maxArray[1]) {
            maxArray[0] = i;
            maxArray[1] = arr[i];
        }
    }

    // Swap the min and max.
    const minIndex = minArray[0];
    const min = minArray[1];

    const maxIndex = maxArray[0];
    const max = maxArray[1];

    arr[minIndex] = max;
    arr[maxIndex] = min;
    
    return arr;
}