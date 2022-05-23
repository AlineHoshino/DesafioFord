const arrayOfUperCase = [];

for(let i =65; i<=90; i++){
    const letra = String.fromCharCode(i)
    arrayOfUperCase.push(letra);
    
}

const arraOfLowerCase = [];

for(let i=97; i<=122;i++){
    const letra = String.fromCharCode(i)
    arraOfLowerCase.push(letra);
}

// aqui para os numeros
const arrayOfNumbers =[];
for(let i=48; i<=57; i++){
    const numbers = String.fromCharCode(i)
    arrayOfNumbers.push(numbers)
}

const firstPart = (string) => {
    const stringArray = string.split('');
    const result = stringArray.map(letterOrN => {
        if(arrayOfUperCase.includes(letterOrN) || arraOfLowerCase.includes(letterOrN) || arrayOfNumbers.includes(letterOrN)){
            let newLetter = letterOrN.charCodeAt() +2 // aqui somando mais 2 como foi decidido em grupo
            letterOrN = String.fromCharCode(newLetter);
            return letterOrN;
        }
    });
    return result;
}

// Tranformado em ASCII 

// Tranformar em Cifra de Cesar

const alfabeto =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z','a','b','c']

const transformCesar = (array) => {
  const result = alfabeto.map((letter,i)=> letter.includes(array[i]))
}

console.log(transformCesar([
    '3', 'J', 'I', 'E', 'O',
    ':', '4', '8', '5', '5',
    'C', '2', '2', '6', '5',
    '7', '4'
]))
console.log(firstPart('1HGCM82633A004352'));