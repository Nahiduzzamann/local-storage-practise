// set value from local storage to form 
function setValueFromLocalStorageToForm(key = '', key1 = 'name', key2 = 'email') {

    if (key === '' || key === 'message') {
        if (localStorage.getItem(key1) === null) {

        }
        else {
            const oldName = localStorage.getItem(key1);
            document.getElementById(key1).value = oldName;
        }
        if (localStorage.getItem(key2) === null) {

        }
        else {
            const oldName = localStorage.getItem(key2);
            document.getElementById(key2).value = oldName;
        }
        document.getElementById('message').value = '';
    }
    else {
        if (localStorage.getItem(key) === null) {

        }
        else {
            const oldName = localStorage.getItem(key);
            document.getElementById(key).value = oldName;
        }
    }

}
// get value from form 
function saveInputFieldText(id) {
    const inputFieldValue = document.getElementById(id).value;
    // console.log(document.getElementById(id).value);
    // document.getElementById('message').value = '';
    saveValueToLocalStorage(inputFieldValue, id);
}
// save value to local storage 
function saveValueToLocalStorage(value, key) {
    // let save 
    // console.log(localStorage.getItem(key));
    console.log(document.getElementById(key).value[0]);

    if (document.getElementById(key).value[0] === ' ' || document.getElementById(key).value === '') {
        alert('Please input valid value');

    }
    else if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, value);
    }
    else {
        localStorage.removeItem(key);
        localStorage.setItem(key, value);
    }
    setValueFromLocalStorageToForm(key);
}

// get all value from form 
function saveAllInputFieldText(nameID, emailId, messageId) {
    const nameFieldValue = document.getElementById(nameID).value;
    const emailFieldValue = document.getElementById(emailId).value;
    const messageFieldValue = document.getElementById(messageId).value;

    console.log(nameFieldValue, emailFieldValue, messageFieldValue);



    document.getElementById(nameID).value = '';
    document.getElementById(emailId).value = '';
    document.getElementById(messageId).value = '';

}
// local storage checker
function localStorageObjectChecker(key, value, object) {

}
// delete all local storage value 
function deleteAllInputFieldText(nameID, emailId, messageId) {
    if (localStorage.getItem(nameID) === null) {
        document.getElementById(nameID).value = '';
    }
    else {
        localStorage.removeItem(nameID);
        document.getElementById(nameID).value = '';

    }
    if (localStorage.getItem(emailId) === null) {
        document.getElementById(emailId).value = '';

    }
    else {
        localStorage.removeItem(emailId);
        document.getElementById(emailId).value = '';
    }
    if (localStorage.getItem(messageId) === null) {
        document.getElementById(messageId).value = '';

    }
    else {
        localStorage.removeItem(messageId);
        document.getElementById(messageId).value = '';
    }
}
// form value delete field 
function deleteInputFieldText(key) {
    if (localStorage.getItem(key) === null) {
        alert('No data stored');
        setValueFromLocalStorageToForm()
        return;
    }
    else if (key === 'message' && document.getElementById(key).value === '') {
        const message = localStorage.getItem(key);
        const isAgree = prompt(`your text is: 
        "${message}"
        Do you want to delete your Text?`,'ok');
        if (isAgree != null) {
            localStorage.removeItem(key);
            document.getElementById(key).value = '';
            return;
        }
        return
    }
    else if (key === 'message') {
        const message = localStorage.getItem(key);
        const isAgree = prompt(`your text is: 
        "${message}" 
        Do you want to delete your Text?`,'ok');
        if (isAgree != null) {
            localStorage.removeItem(key);
            document.getElementById(key).value = '';
            return;
        }
        return
    }
    else if (document.getElementById(key).value[0] === ' ' || document.getElementById(key).value === '') {
        alert('Please delete the stored visual name');
        setValueFromLocalStorageToForm()
        return;
    }
    else {
        localStorage.removeItem(key);
        document.getElementById(key).value = '';
        return;
    }
}
setValueFromLocalStorageToForm()