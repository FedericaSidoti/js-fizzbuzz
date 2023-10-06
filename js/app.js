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
    let colorSquare
    if (findMultiplesOfThree === 0 && findMultiplesOfFive === 0) {
        stampNumber ='FizzBuzz'
        colorSquare = 0
    } 
    else if (findMultiplesOfFive === 0) {
        stampNumber ='Buzz'
        colorSquare = 1
    } 
    else if (findMultiplesOfThree === 0) {
        stampNumber = 'Fizz'
        colorSquare = 2
    } 
    else {
        stampNumber = number
    }
    
    const divDOMElement = document.getElementById('main-content')
    const squareDOMElement = document.createElement('div')
    squareDOMElement.classList.add('square')

    if (colorSquare === 0) {
        squareDOMElement.classList.add('square-purple')
    } 
    else if (colorSquare === 1) {
        squareDOMElement.classList.add('square-lilac')
    }
    else if (colorSquare === 2) {
        squareDOMElement.classList.add('square-orchid')
    }
    
    divDOMElement.append(squareDOMElement)
    squareDOMElement.innerHTML = stampNumber


    


}







    //- SE il modulo 5 del numero è 0
        //- stampValue = Buzz
