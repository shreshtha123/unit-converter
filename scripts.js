document.getElementById('convert-button').addEventListener('click', function () {
    const inputValue = parseFloat(document.getElementById('input-value').value);
    const unitSelect = document.getElementById('unit-select');
    const conUnitSelect= document.getElementById('unit-selectTo');

    const resultElement = document.getElementById('result');


    if (unitSelect.value === conUnitSelect.value) {
resultElement.textContent = `${inputValue} ${unitSelect.value} = ${inputValue} ${conUnitSelect.value}`;
}

    //meters
    
    if (unitSelect.value === 'meters' && conUnitSelect.value==='kilometers') {
        // Convert to feet (1 meter = 1000 km)
        const r=inputValue*0.001;
        resultElement.textContent = `${inputValue} meters = ${r} kilometers`;


    } 
    if (unitSelect.value === 'meters' && conUnitSelect.value==='centimeters') {
        // Convert to meters (1 meter = 100 cm)
        const r=inputValue*100;
        resultElement.textContent = `${inputValue} meters = ${r} centimeters`;


    } 
    if (unitSelect.value === 'meters' && conUnitSelect.value==='milimeters') {
        // Convert to meters (1 meter = 1000 mm)
        const r=inputValue*1000;
        resultElement.textContent = `${inputValue} meters = ${r} milimeters`;


    } 
    if (unitSelect.value === 'meters' && conUnitSelect.value==='feet') {
        // Convert to meters (1 meter = 3.28984 feet)
        const r=inputValue*3.28084;
        resultElement.textContent = `${inputValue} meters = ${r} feet`;


    }
    if (unitSelect.value === 'meters' && conUnitSelect.value==='inches') {
        // Convert to meters (1 meter = 39.3701 inches)
        const r=inputValue*39.3701;
        resultElement.textContent = `${inputValue} meters = ${r} inches`;

    }

   






   //Centimeters
    if (unitSelect.value === 'centimeters' && conUnitSelect.value==='kilometers') {
        
        const r=inputValue*1e-5;
        resultElement.textContent = `${inputValue} centimeters = ${r} kilometers`;

    } 
     if (unitSelect.value === 'centimeters' && conUnitSelect.value==='meters') {
        
        const r=inputValue*0.01;
        resultElement.textContent = `${inputValue} centimeters = ${r} meters`;


    } 
     if (unitSelect.value === 'centimeters' && conUnitSelect.value==='milimeters') {
       
        const r=inputValue*10;
        resultElement.textContent = `${inputValue} centimeters = ${r} milimeters`;


    } 
    if (unitSelect.value === 'centimeters' && conUnitSelect.value==='feet') {
        
        const r=inputValue*0.0328084;
        resultElement.textContent = `${inputValue}centimeters = ${r} feet`;


    }
    if (unitSelect.value === 'centimeters' && conUnitSelect.value==='inches') {
        
        const r=inputValue*0.393701;
        resultElement.textContent = `${inputValue} centimeters = ${r} inches`;


    } 
      





    //kilometers
    if (unitSelect.value === 'kilometers' && conUnitSelect.value==='meters') {
       
        const r=inputValue*1000;
        resultElement.textContent = `${inputValue} kilometers = ${r} meters`;

    }  if (unitSelect.value === 'kilometers' && conUnitSelect.value==='centimeters') {
       
        const r=inputValue*100000;
        resultElement.textContent = `${inputValue} kilometers = ${r} centimeters`;


    }  if (unitSelect.value === 'kilometers' && conUnitSelect.value==='milimeters') {
       
        const r=inputValue*1000000;
        resultElement.textContent = `${inputValue} kilometers = ${r} milimeters`;


    } 
    if (unitSelect.value === 'kilometers' && conUnitSelect.value==='feet') {
       
        const r=inputValue*3280.84;
        resultElement.textContent = `${inputValue} kilometers = ${r} feet`;


    }if (unitSelect.value === 'kilometers' && conUnitSelect.value==='inches') {
       
        const r=inputValue*39370.1;
        resultElement.textContent = `${inputValue} kilometers = ${r} inches`;


    } 





    //milimeters
    if (unitSelect.value === 'milimeters' & conUnitSelect.value==='kilometers') {
        
        const r=inputValue*1e-6;
        resultElement.textContent = `${inputValue} milimeters = ${r} kilometers`;

    } 
     if (unitSelect.value === 'milimeters' && conUnitSelect.value==='centimeters') {
       
        const r=inputValue*0.1;
        resultElement.textContent = `${inputValue} milimeters = ${r} centimeters`;


    } 
    if (unitSelect.value === 'milimeters' && conUnitSelect.value==='meters') {
       
        const r=inputValue*0.001;
        resultElement.textContent = `${inputValue} milimeters = ${r} meters`;


    } 
     if (unitSelect.value === 'milimeters' && conUnitSelect.value==='feet') {
        
        const r=inputValue*0.00328084;
        resultElement.textContent = `${inputValue} milimeters = ${r} feet`;


    } 
    if (unitSelect.value === 'milimeters' && conUnitSelect.value==='inches') {
        
        const r=inputValue*0.0393701;
        resultElement.textContent = `${inputValue} milimeters = ${r} inches`;


    } 






    //feet
    if (unitSelect.value === 'feet' && conUnitSelect.value==='kilometers') {
        
        const r=inputValue*0.0003048;
        resultElement.textContent = `${inputValue} feet = ${r} kilometers`;

    } 
    if (unitSelect.value === 'feet' && conUnitSelect.value==='centimeters') {
        
        const r=inputValue*30.48;
        resultElement.textContent = `${inputValue} feet = ${r} centimeters`;


    } if (unitSelect.value === 'feet' && conUnitSelect.value==='milimeters') {
       
        const r=inputValue*304.8;
        resultElement.textContent = `${inputValue} feet = ${r} milimeters`;


    } if (unitSelect.value === 'feet' && conUnitSelect.value==='meters') {
        
        const r=inputValue*0.3048;
        resultElement.textContent = `${inputValue} feet = ${r} meters`;


    }if (unitSelect.value === 'feet' && conUnitSelect.value==='inches') {
        
        const r=inputValue*12;
        resultElement.textContent = `${inputValue} feet = ${r} inches`;


    } 



    //inches
    if (unitSelect.value === 'inches' && conUnitSelect.value==='kilometers') {
        
        const r=inputValue*2.54e-5;
        resultElement.textContent = `${inputValue} inches = ${r} kilometers`;

    } 
    if (unitSelect.value === 'inches' && conUnitSelect.value==='centimeters') {
        
        const r=inputValue*2.54;
        resultElement.textContent = `${inputValue} inches = ${r} centimeters`;


    } if (unitSelect.value === 'inches' && conUnitSelect.value==='milimeters') {
        
        const r=inputValue*25.4;
        resultElement.textContent = `${inputValue} inches = ${r} milimeters`;


    } if (unitSelect.value === 'inches' && conUnitSelect.value==='meters') {
        
        const r=inputValue*0.0254;
        resultElement.textContent = `${inputValue} inches = ${r} meters`;


    }if (unitSelect.value === 'inches' && conUnitSelect.value==='feet') {
       
        const inchesToFeet=1/12
        const r=inputValue*inchesToFeet;
        resultElement.textContent = `${inputValue}inches= ${r} feet`;


    }





});