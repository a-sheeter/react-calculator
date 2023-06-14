import React from 'react';
import { useState } from 'react';
import { Button } from './Button';
import './App.css';

export default function App() {
  const [calculation, setCalculation] = useState([]);
  const [total, setTotal] = useState(0);

  function handleCalculation(e) {
    let userInput = e.target.value;

    if (userInput === '+' || userInput === '-' || userInput === '*' || userInput === '/') {
      if (total !== 0) {
        let newCalculation = [];
        newCalculation.push(total);
        newCalculation.push(userInput);
        setCalculation([...newCalculation]);
        setTotal(0);
      }
    }

    //check to make sure that you can't input a num if a total is already present - only new operation
    if ((userInput !== '+' || userInput !== '-' || userInput !== '*' || userInput !== '/') && total !== 0) {
      return
    }

    //check if there are more than one operators 
    for (let i = 0; i < calculation.length; i++) {
      if (calculation[i] === '+' || calculation[i] === '-' || calculation[i] === '*' || calculation[i] === '/') {
        //find the index of the operator so you can separate first and second inputs
        if (userInput === '+' || userInput === '-' || userInput === '*' || userInput === '/') {
          return 
        } 
      }
    }
    //if not, set new calculation
    setCalculation([...calculation, userInput]);
  }

  function handleCalculateTotal() {

    //string variables and operator
    let firstVar = '';
    let operatorVar = '';
    let secondVar = '';

    function isOperator(element) {
      if (element === '+' || element === '-' || element === '*' || element === '/') {
        return true;
      }
      return false
    }

    let operatorIndex = calculation.findIndex(isOperator);

    //this separates the variables and operator out
    for (let i = 0; i < calculation.length; i++) {
        if (i < operatorIndex) {
          firstVar += (calculation[i])
        } else if ( i === operatorIndex) {
          operatorVar = calculation[i]
        } else {
          secondVar += (calculation[i])
        }
      }

      //check and make sure there are two numbers to do calculations on
      if (secondVar === '') {
        return 
      } else {
        //join the arrays together
        firstVar = parseFloat(firstVar);
        secondVar = parseFloat(secondVar);

        switch(operatorVar) {
          case '+':
            setTotal(firstVar + secondVar);
            break;
          case '-':
            setTotal(firstVar - secondVar);
            break;
          case '*':
            setTotal(firstVar*secondVar);
            break;
          case '/':
            setTotal(firstVar/secondVar);
            break;
          default:
            setTotal(0);
        }
      }
  
  }

  function handleClearAll() {
    setCalculation([]);
    setTotal(0);
  }

  function handleDelete() {
    if(total === 0){
      calculation.pop();
      setCalculation([...calculation])
    }
    return
  }

  return (
    <>
      <div className='dark-purple-container'>
        <div className='opaque-circle'>
          <div className='calculator-container'>
            <div className='pink-blur blur-right'></div>
            <div className='pink-blur blur-left'></div>
              <div className='calc-screen'>
                <div className='current-calculation'>{ calculation }</div>
                <div className='current-total'>{ total }</div>
              </div>
              <div className='calc-button-container'>
                {/*row 1*/}
                <Button className='btn' onClick={handleClearAll} value='AC'/>
                <Button className='btn' onClick={handleDelete} value='DEL'/>
                <Button className='btn purple-btn' onClick={handleCalculation} value='/'/>
                <Button className='btn purple-btn' onClick={handleCalculation} value='*'/>
                {/*row 2*/}
                <Button className='btn blue-num' onClick={handleCalculation} value='7'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='8'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='9'/>
                <Button className='btn purple-btn' onClick={handleCalculation} value='-'/>
                {/*row 3*/}
                <Button className='btn blue-num' onClick={handleCalculation} value='4'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='5'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='6'/>
                <Button className='btn span-two-rows purple-btn' onClick={handleCalculation} value='+'/>
                {/*row 4*/}
                <Button className='btn blue-num' onClick={handleCalculation} value='1'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='2'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='3'/>
                {/*row 5*/}
                <Button className='btn span-two-cols blue-num' onClick={handleCalculation} value='0'/>
                <Button className='btn blue-num' onClick={handleCalculation} value='.'/>
                <Button className='btn purple-btn' onClick={handleCalculateTotal} value='='/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

