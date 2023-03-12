// set value from local storage to form 
function setValueFromLocalStorageToForm(key = '', key1 = 'name', key2 = 'email') {

    dataVisual();

    if (key === '' || key === 'message') {
        if (localStorage.getItem(key1) === null) {

        }
        else {
            const oldName = localStorage.getItem(key1);
            document.getElementById(key1).value = '';
        }
        if (localStorage.getItem(key2) === null) {

        }
        else {
            const oldName = localStorage.getItem(key2);
            document.getElementById(key2).value = '';
        }
        document.getElementById('message').value = '';
    }
    else {
        if (localStorage.getItem(key) === null) {

        }
        else {
            // const oldName = localStorage.getItem(key);
            document.getElementById(key).value = '';
        }
    }
    dataVisual();

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

    if (document.getElementById(key).value[0] === ' ' || document.getElementById(key).value === '') {
        alert('Please input valid value');

    }
    else if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, value);
        document.getElementById(key).value = '';

    }
    else {
        localStorage.removeItem(key);
        localStorage.setItem(key, value);
        document.getElementById(key).value = '';

    }
    // setValueFromLocalStorageToForm(key);
    dataVisual();

}
// local storage object checker and storing
function localStorageObjectChecker(nameFieldValue, emailFieldValue, messageFieldValue) {

    let Person = {};
    Person.message = messageFieldValue;
    Person.email = emailFieldValue;
    Person.name = nameFieldValue;
    const personObjectToString = JSON.stringify(Person);

    if (document.getElementById('name').value[0] === ' ' || document.getElementById('name').value === '' || document.getElementById('email').value[0] === ' ' || document.getElementById('email').value === '' || document.getElementById('message').value[0] === ' ' || document.getElementById('message').value === '') {
        alert('Please input valid value');

    }
    else if (localStorage.getItem('person') === null) {
        // set to local storage 
        localStorage.setItem('person', personObjectToString);
        //return object
        const personString = localStorage.getItem('person');
        const personStringToObject = JSON.parse(personString);
        return personStringToObject;
    }
    else {
        localStorage.removeItem('person');
        // set to local storage 
        localStorage.setItem('person', personObjectToString);
        //return object
        const personString = localStorage.getItem('person');
        const personStringToObject = JSON.parse(personString);
        return personStringToObject;
    }
}
// get all value from form 
function saveAllInputFieldText(nameID, emailId, messageId) {
    const nameFieldValue = document.getElementById(nameID).value;
    const emailFieldValue = document.getElementById(emailId).value;
    const messageFieldValue = document.getElementById(messageId).value;
    if (emailFieldValue === '' || emailFieldValue[0] === ' ') {
        alert('Please enter valid value');
        dataVisual();
        return;
    }

    //object checker
    const Person = localStorageObjectChecker(nameFieldValue, emailFieldValue, messageFieldValue);

    document.getElementById(nameID).value = '';
    document.getElementById(emailId).value = '';
    document.getElementById(messageId).value = '';
    // console.log(Person);
    //data visual
    document.getElementById('table').innerText = '';
    const tBody = document.getElementById('table');
    const tr = document.createElement('tr');
    try {
        tr.innerHTML = `<td>${Person.name}</td>
    <td>${Person.email}</td>
    <td>${Person.message}</td>`;
        tBody.appendChild(tr);
    } catch (e) {

    }

}


// delete all local storage value 
function deleteAllInputFieldText() {
    // getting key and value from local storage 
    for (let [key, value] of Object.entries(localStorage)) {
        if (localStorage.getItem(key) === null) {
            // document.getElementById(key).value = '';
        }
        else {
            localStorage.removeItem(key);
            // document.getElementById(key).value = '';
        }
    }
    document.getElementById('table').innerText = '';
    // dataVisual();
}
// form value delete field 
function deleteInputFieldText(key) {
    if (localStorage.getItem(key) === null) {
        alert('No data stored');
        setValueFromLocalStorageToForm()
        dataVisual();
        return;
    }
    else if (key === 'message' && document.getElementById(key).value === '') {
        const message = localStorage.getItem(key);
        const isAgree = prompt(`your text is: 
        "${message}"
        Do you want to delete your Text?`, 'ok');
        if (isAgree != null) {
            localStorage.removeItem(key);
            document.getElementById(key).value = '';
            dataVisual();

            return;
        }
        dataVisual();
        return
    }
    else if (key === 'message') {
        const message = localStorage.getItem(key);
        const isAgree = prompt(`your text is: 
        "${message}" 
        Do you want to delete your Text?`, 'ok');
        if (isAgree != null) {
            localStorage.removeItem(key);
            document.getElementById(key).value = '';
            dataVisual();
            return;
        }
        dataVisual();
        return
    }
    else if (document.getElementById(key).value[0] === ' ' || document.getElementById(key).value === '') {
        alert('Please delete the stored visual name');
        setValueFromLocalStorageToForm()
        dataVisual();
        return;
    }
    else {
        localStorage.removeItem(key);
        document.getElementById(key).value = '';
        dataVisual();
        return;
    }

}
// data visual from local storage 
function dataVisual() {
    // const Person = saveAllInputFieldText('name','email','message');
    // console.log(Person);
    const personString = localStorage.getItem('person');
    const Person = JSON.parse(personString);

    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const message = localStorage.getItem('message');

    document.getElementById('table').innerText = '';

    const tBody = document.getElementById('table');
    try {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name ? name : Person.name}</td>
    <td>${email ? email : Person.email}</td>
    <td>${message ? message : Person.message}</td>`;
        tBody.appendChild(tr);
    } catch (e) {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${name}</td>
    <td>${email}</td>
    <td>${message}</td>`;
        tBody.appendChild(tr);
    }
}
setValueFromLocalStorageToForm()