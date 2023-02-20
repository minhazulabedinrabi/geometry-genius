/*-----------------------------------------------------------------
---------function for getting value from any input field-----------
------------------------------------------------------------------ */

function inputValueCatcher(idOfInputField) {

    const inputValueField = document.getElementById(idOfInputField);
    const inputValueString = inputValueField.value;
    const inputValue = parseFloat(inputValueString);

    if (isNaN(inputValue) || inputValue < 0) {
        alert('please give a valid number')
        return;
    }
    else {
        inputValueField.value = '';
        return inputValue;

    }
}

/*------------------------------------------------
------ Function for calculation any area----------
--------------------------------------------------*/

function areaCalculator(value1, value2, value3) {
    var area = value1 * value2 * value3;
    if (isNaN(value1 || value2 || value3)) {
        return 0;
    }
    else {
      area = area.toFixed(2);
        
    }
    return area;
}

/*---------------------------------------------------------------
-------------function for changing inner text of element---------
----------------------------------------------------------------- */

function innerTextChanger(idOfElement, value) {
    if (isNaN(value)) {
        document.getElementById(idOfElement).innerText = 0;
    }
    else {
        document.getElementById(idOfElement).innerText = value;

    }
}

/*-----------------------------------------------------------
--------------function for append child----------------------
-------------------------------------------------------------*/

function elementAdder(value) {
    var node1 = document.createElement("li");
    var div = document.createElement('div');
    var btnClose=document.createElement('button');
    var node2 = document.createElement('button');
    var sup = document.createElement('sup');

    div.classList.add('flex','items-center','justify-between','no-shrink')
    node1.classList.add('w-full', 'm-3', 'list-decimal');
    btnClose.classList.add('rounded','px-2','bg-gray-200');
    node2.classList.add( "bg-sky-500", 'w-fit', 'py-1', 'px-3', 'rounded', 'text-white', 'text-center');
    
    node2.innerText = 'convert';
    btnClose.innerText='X';
    const idOfBtnClose= btnClose.setAttribute('id',value+'id');
    btnClose.setAttribute('onclick','removeChildOfElement()');
    sup.innerText = 2;
    div.innerText = document.getElementById(value).innerText;

    div.appendChild(sup);
    div.appendChild(node2);
    div.appendChild(btnClose);
    node1.appendChild(div);

    document.getElementById('appendix-container').appendChild(node1);
}

function removeChildOfElement(){
    const element= event.target.parentElement.parentElement;
    element.remove();
    
}



/*-----------------------------------------------------------
-------------------Function for random background------------
------------------------------------------------------------- */

function randomBackground(id) {
    function randomNumberCreator() {
        var random = Math.ceil(Math.random() * 100);
        if (random == undefined || random < 10) {
            random = randomNumberCreator();
        }
        return random;
    }
    var x = randomNumberCreator();
    var y = randomNumberCreator();
    var z = randomNumberCreator();
    var bgColor = '#' + x + y + z + '55';

    document.getElementById(id).style.backgroundColor = bgColor;
}
function whiteBackground(id) {
    document.getElementById(id).style.backgroundColor = '';
}


/*------------------------------------------------------------
----------------------event handeller for triangle------------
 -------------------------------------------------------------*/

document.getElementById('btn-triangle-calculate').addEventListener('click', function () {
    const triangleBase = inputValueCatcher('triangle-b');
    const triangleHight = inputValueCatcher('triangle-h');
    const areaOfTriangle = areaCalculator(0.5, triangleBase, triangleHight);

    innerTextChanger('estimated-area', areaOfTriangle);
    if(isNaN(areaOfTriangle)){
        return;
    }
    else{
        elementAdder('triangle-area')
    }
})

/*------------------------------------------------------------
----------------------event handeller for rectangle------------
 -------------------------------------------------------------*/

document.getElementById('btn-rectangle-calculate').addEventListener('click', function () {
    const rectangleWidth = inputValueCatcher('rectangle-width');
    const rectangleHeight = inputValueCatcher('rectangle-height');
    const areaOfRectangle = areaCalculator(1, rectangleHeight, rectangleWidth);

    innerTextChanger('areaOfRectanlge', areaOfRectangle);
    if(isNaN(areaOfRectangle)){
        return;
    }
    else{
        elementAdder('rectangle-area')
    }

})

/*-----------------------------------------------------------------
----------------------event handeller for parallelogram------------
 ------------------------------------------------------------------*/
document.getElementById('btn-parallelogram-calculate').addEventListener('click', function () {
    const plWidth = inputValueCatcher('pl-width');
    const plHeight = inputValueCatcher('pl-height');
    const areaOfPl = areaCalculator(1, plHeight, plWidth);

    innerTextChanger('areaOfPl', areaOfPl);
    if(isNaN(areaOfPl)){
        return;
    }
    else{
        elementAdder('pl-area')
    }

})

/*-------------------------------------------------------------
----------------------event handeller for Rhombus--------------
 -------------------------------------------------------------*/

document.getElementById('btn-Rhombus-calculate').addEventListener('click', function () {
    const rmD1 = inputValueCatcher('rm-d1');
    const rmD2 = inputValueCatcher('rm-d2');
    const areaOfRm = areaCalculator(0.5, rmD1, rmD2);

    innerTextChanger('areaOfRm', areaOfRm);

    if(isNaN(areaOfRm) ){
        return;
    }
    else{
        elementAdder('rhombus-area')
    }

})

/*------------------------------------------------------------
----------------------event handeller for pentagon------------
-------------------------------------------------------------*/

document.getElementById('btn-pentagon-calculate').addEventListener('click', function () {
    const input1 = inputValueCatcher('pn-1');
    const input2 = inputValueCatcher('pn-2');
    const areaOfPn = areaCalculator(0.5, input1, input2);
    innerTextChanger('areaOfPn', areaOfPn);

    if(isNaN(areaOfPn)){
        return;
    }
    else{
        elementAdder('pentagon-area')
    }

})

/*------------------------------------------------------------
----------------------event handeller for ellipse------------
 -------------------------------------------------------------*/
document.getElementById('btn-ellipse-calculate').addEventListener('click', function () {
    const input1 = inputValueCatcher('el-1');
    const input2 = inputValueCatcher('el-2');
    const areaOfEL = areaCalculator(3.1416, input1, input2);

    innerTextChanger('areaOfEl', areaOfEL);
    if(isNaN(areaOfEL)){
        return;
    }
    else{
        elementAdder('el-area');
    }
    
})


