//- creare un ciclo for che consideri i numeri da 0 a 100 

for (let i = 0; i < 100; i++) {
    //- creare una variabile n che sia i +1 
    const number = i  +1; 
    //- creare un blocco if che rispetti le casistiche indicate
    const findMultiplesOfThree = number % 3 ; 
    const findMultiplesOfFive = number % 5 ; 

    //- SE il modulo 3 del numero è 0 E ANCHE il modulo 5 del numero è 0
        //- stampValue = FizzBuzz
        //- let stampValue = n
    let stampNumber
    if (findMultiplesOfThree === 0 && findMultiplesOfFive === 0) {
        stampNumber ='FizzBuzz'
    } 
    else if (findMultiplesOfFive === 0) {
        stampNumber ='Buzz'
    } 
    else if (findMultiplesOfThree === 0) {
        stampNumber = 'Fizz'
    } 
    else {
        stampNumber = number
    }
    
    const divDOMElement = document.getElementById('main-content')
    const squareDOMElement = document.createElement('div')
    squareDOMElement.classList.add('square')
    squareDOMElement.innerHTML = stampNumber


    divDOMElement.append(squareDOMElement)


}







    //- SE il modulo 5 del numero è 0
        //- stampValue = Buzz
