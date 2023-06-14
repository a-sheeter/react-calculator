import { Button } from './Button';

export function ButtonRow({ rowNum }) {

    let desiredRow;

    let rowOne = <>
        <Button className='btn' onClick={handleClearAll} value='AC'/>
        <Button className='btn' onClick={handleDelete} value='DEL'/>
        <Button className='btn purple-btn' onClick={handleCalculation} value='/'/>
        <Button className='btn purple-btn' onClick={handleCalculation} value='*'/>
    </>

    let rowTwo = <>
        <Button className='btn blue-num' onClick={handleCalculation} value='7'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='8'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='9'/>
        <Button className='btn purple-btn' onClick={handleCalculation} value='-'/>
    </>

    let rowThree = <>
        <Button className='btn blue-num' onClick={handleCalculation} value='5'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='6'/>
        <Button className='btn span-two-rows purple-btn' onClick={handleCalculation} value='+'/>
    </>

    let rowFour = <>
        <Button className='btn blue-num' onClick={handleCalculation} value='1'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='2'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='3'/>
    </>

    let rowFive = <>
        <Button className='btn span-two-cols blue-num' onClick={handleCalculation} value='0'/>
        <Button className='btn blue-num' onClick={handleCalculation} value='.'/>
        <Button className='btn purple-btn' onClick={handleCalculateTotal} value='='/>
    </>

    switch(rowNum) {
        case '1':
            desiredRow = rowOne;
            break;
        case '2':
            desiredRow = rowTwo;
            break;
        case '3':
            desiredRow = rowThree;
            break;
        case '4':
            desiredRow = rowFour;
            break;
        case '5':
            desiredRow = rowFive;
            break;
        default: 
            return
    }

    return <>{desiredRow}</>
}