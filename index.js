const getLongerChain = (array) => {
    longerChain = array[0];
 array.forEach((arr)=> {
     if (arr.length > longerChain.length) {
        longerChain = arr;
     }
 }); 
 return longerChain;
}
const platziEscuelas = ['Desarrollo Web', 'JavaScritp', 'Blockchain y Criptomonedas', 'Data Science', 'Product Design']
console.log(getLongerChain(platziEscuelas)); //Blockchain y Criptomonedas
