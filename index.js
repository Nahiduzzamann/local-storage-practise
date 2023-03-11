function saveInputFieldText(id){
    const inputFieldValue = document.getElementById(id).value;
    console.log(inputFieldValue);



    document.getElementById(id).value='';
}
function saveAllInputFieldText(nameID,emailId,messageId){
    const nameFieldValue = document.getElementById(nameID).value;
    const emailFieldValue = document.getElementById(emailId).value;
    const messageFieldValue = document.getElementById(messageId).value;

    console.log(nameFieldValue,emailFieldValue,messageFieldValue);



    document.getElementById(nameID).value='';
    document.getElementById(emailId).value='';
    document.getElementById(messageId).value='';

}