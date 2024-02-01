var result = document.getElementById('result');
var dotflag = '';
var lastinput = '';

function clickbutton(value) {

    if(value ==='.' && dotflag ==='true'){
        return;
    }

    if(value ==='+' && lastinput ==='operator'){
        return;
    }

    if(value ==='-' && lastinput ==='operator'){
        return;
    }

    if(value ==='*' && lastinput ==='operator'){
        return;
    }

    if(value ==='/' && lastinput ==='operator'){
        return;
    }

    if(result.textContent == '0'){
        result.textContent = '';
    }
    
    if(result.textContent == '00'){
        result.textContent = '';
    }

    result.textContent += value;

    if (value === '.'){
        dotflag = 'true';
    }else{
        lastinput = 'number';
    }

    if(value === '+' || value === '-'|| value === '*' || value === '/'){
        lastinput = 'operator';
        dotflag = 'false';
    }
}

function equalbutton() {
    var displayValue = result.textContent;
    var equal = eval(displayValue);
    result.textContent = equal;
    dotflag = 'false';
}

function clearbutton() {
    result.textContent = '0';
    dotflag = 'false';
}
