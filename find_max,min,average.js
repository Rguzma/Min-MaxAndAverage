
let arr = [1,-2,9,4];




function maximumAndMinimum(arr) {

    let min= arr[0];
    let max = arr[0];
    let sum = 0;


    for (var j=0; j<arr.length; j++){
        if (arr[j] > max){
            max=arr[j];
        }
    
    }
    for (var j=0; j<arr.length; j++){
        if (arr[j] < min){
            min=arr[j];
        }
    
    }

    for (var j=0; j<arr.length; j++){
        sum = sum + arr[j];
    
    
    } 
    let aver= sum/arr.length;
    return aver; 


    
    
}




console.log (maximumAndMinimum(arr));
