
// let number = [10,2,4,50];
// function sumOfArray(ar) {
//     let sum = 0;
//     for (let i = 0; i < ar.length; i++) {
//         sum = sum + ar[i];
//     };
//     return sum;
// }
// console.log(sumOfArray(number));

// function nameOfCount(){
//     var name = 'Vallabh';
//     num='';
//     for(let i=1; i<=10; i++){
//         num=num+name+'\n';
//     }
//     return num;
// }
// console.log(nameOfCount());
let number = [10, 2, 4, 50];

        function sumOfArray(ar) {
            let sum = 0;
            for (let i = 0; i < ar.length; i++) {
                sum += ar[i];
            }
            return sum;
        }

        // Get the result of the sum
        let result = sumOfArray(number);

        // Display the result on the web page
        document.getElementById('output').innerHTML = 'The sum of the array is: ' + result;