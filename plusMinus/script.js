function plusMinus(arr){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    const n = arr.length;
    for(let i=0; i<n; i++){
        if(arr[i] > 0){
            positiveCount++;
        } else if(arr[i] < 0){
            negativeCount++;
        } else{
            zeroCount++;
        }
    }
    positiveRatio = positiveCount/n;
    negativeRatio = negativeCount/n;
    zeroRatio = zeroCount/n;

    console.log(positiveRatio.toFixed(6));
    console.log(negativeRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}
let arr = [8,-9,5,0,9,-8,5];
plusMinus(arr);
