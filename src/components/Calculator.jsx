import { useState } from "react"


function Calculator(){

    const [numberOne, setNumberOne] = useState(1);
    const [numberTwo, setNumberTwo] = useState(2);

    const [mathResult, setMathResult] = useState(0);
    const [currentSymbol, setCurrentSymbol] =useState("+");
    
console.log(mathResult);

    function handleChecked(event){
        if(event.target.value === "add"){
            setCurrentSymbol("+")
        }else if(event.target.value === "sub"){
            setCurrentSymbol("-")
        }else if(event.target.value === "multiply"){
            setCurrentSymbol("×")
        }else if(event.target.value === "divide"){
            setCurrentSymbol("÷")
        }else{
            setCurrentSymbol("Choose a Symbol!")
        }
    }
    
    function assignOne(event){
        event.preventDefault()

        console.log(event.target.value)
        let numOne = setNumberOne(event.target.value);
        return numOne
    }
    function assignTwo(event){
        event.preventDefault()
        console.log(event.target.value)
        let numTwo = setNumberTwo(event.target.value);
        return numTwo
    }

    function Calculate(value1,value2){
        let answer;

        if(currentSymbol === "+"){
            let stringAnswer = Number(value1)+Number(value2);
            answer = Number(stringAnswer)
            console.log(stringAnswer)
            return setMathResult(answer)
        }else if(currentSymbol === "-"){
            let stringAnswer = Number(value1)-Number(value2);
            answer = Number(stringAnswer)
            console.log(stringAnswer)
            return setMathResult(answer)
        }else if(currentSymbol === "×"){
            let stringAnswer = Number(value1)*Number(value2);
            answer = Number(stringAnswer)
            console.log(stringAnswer)
            return setMathResult(answer)
        }else if(currentSymbol === "÷"){
            let stringAnswer = Number(value1)/Number(value2);
            answer = Number(stringAnswer)
            console.log(stringAnswer)
            return setMathResult(answer)
        }
    }

    function handleSubmit(event){
        event.preventDefault()

        Calculate(numberOne,numberTwo)
    }


    return(
        <div className="container">
            <h1>Calculate with React!</h1>
            <h2>Choose your symbol...</h2>
        <div onChange={handleChecked}>
            <input type="radio" defaultChecked value="add" name= "symbols" /> Addition
            <input type="radio" value="sub" name= "symbols" /> Subtraction
            <input type="radio" value="multiply" name="symbols" /> Multiplication
            <input type="radio" value="divide" name="symbols" /> Division
        </div>
            <form className="Calculator">
                <input onChange={assignOne} type="number" name="value1" autoFocus/>
                <span>{currentSymbol}</span>
                <input onChange={assignTwo} type="number" name="value2" />
                <span>=</span>
            <h3 className="Answer">{mathResult || "Answer Shows Here!"}</h3>
            <button onClick={handleSubmit}>Calculate!</button>
            </form>

        </div>
    )
}

export default Calculator;