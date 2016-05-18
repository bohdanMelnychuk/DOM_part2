'use strict';

var form = document.createElement('form');
var att = document.createAttribute('name');
att.value = "login";
var att_1 = document.createAttribute('action');
att_1.value = "google.gom";
form.setAttributeNode(att);
form.setAttributeNode(att_1);
var age = "<input type='text' name='age'  placeholder='age'><br>";
var name = "<input type='text' name='username' placeholder='user_name'> <br>";
var date = "<input type='text' name='date' placeholder='dd/mm/yyyy'><br>";
var valid = "<input type='submit' value='Validate me!' class='validate'>";
form.innerHTML = age + name + date + valid;
document.body.insertBefore(form, document.body.firstChild);
var validate = document.querySelector('input[type="submit"]');

validate.onclick = function(e) {
    e.preventDefault();
    checkAge();
    checkUser();
    checkDate();
}


function checkAge() {
    var ageValue = document.querySelector('input[name="age"]').value;
    var showResultAge = document.querySelector('input[name="age"]');
    var success;
    for (var i = 0; i < ageValue.length; i++) {
        if (isNaN(parseInt(ageValue[i])) || ageValue <= 0) {
            success = false;
            break;
        } else {
            success = true;

        }
    }
    if (success) {
        setTimeout(function() {
            showResultAge.style.backgroundColor = "green";
        }, 300);
    } else {
        showResultAge.style.backgroundColor = 'red';
        setTimeout(function() {
            showResultAge.style.backgroundColor = 'white';
            showResultAge.style.transition = 'all .7s';

        }, 1000);
    }
    return ageValue;
}

function checkUser() {
    var nameValue = document.querySelector('input[name="username"]').value;
    var showResultUser = document.querySelector('input[name="username"]');
    var corectValue = nameValue.slice(0, 5);
    if (corectValue !== 'user_') {
        showResultUser.style.backgroundColor = 'red';
        setTimeout(function() {
            showResultUser.style.backgroundColor = 'white';
            showResultUser.style.transition = 'all .7s';

        }, 1000);
    } else {
        setTimeout(function() {
            showResultUser.style.backgroundColor = "green";
        }, 300);
    }
    return nameValue;
}

function showResultFalse() {
    var resultFalse = document.querySelector('input[name="date"]');
    resultFalse.style.backgroundColor = 'red';
   setTimeout(function() {
        resultFalse.style.backgroundColor = 'white';
        resultFalse.style.transition = 'all .7s';

    }, 1000);
}

function showResultTrue() {
    var resultTrue = document.querySelector('input[name="date"]');
    setTimeout(function() {
        resultTrue.style.backgroundColor = "green";
    }, 300);
}

function checkDate() {
    var dateValue = document.querySelector('input[name="date"]').value;
    if (dateValue.charAt(2) != '/' || dateValue.charAt(5) != '/') {
        showResultFalse();
        alert("date must have dd/mm/yyyy");
    } else {
        var dateValid = dateValue.split('/');
        var day = dateValid[0];
        var month = dateValid[1];
        var year = dateValid[2];
        var parse = isNaN(parseInt(day)) || isNaN(parseInt(month)) || isNaN(parseInt(year));
        if (!parse) {
            if ((day < 1 || day > 31) || (month < 1 || month > 12) || (year < 1900 || year > 2020)) {
                showResultFalse();
            } else {
                showResultTrue();
            }
        } else {
            showResultFalse();
            alert('date must be number');
        }
    }
    return dateValue;
}