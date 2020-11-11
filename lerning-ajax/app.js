document.getElementById('button').addEventListener('click', loadData);


function loadData() {
    //Create the new XMLHTTPRequest Object
    const xhr = new XMLHttpRequest();

    //Open the connection
    xhr.open('GET', 'data.txt', true);

    //Execution of the ajax call
    //1st option
    // xhr.onload = function () {
    //     //Codes
    //     //200: Correct
    //     //403: Forbidden
    //     //404: Not found
    //     if (this.status === 200){
    //         document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    //     }
    // }
    //2nd option
    xhr.onreadystatechange = function () {
        //Ready States
        //0 - Unsent
        //1 - Opened
        //2 - Received
        //3 - Loading
        //4 - Done
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`

        }
    }


    //Send the request
    xhr.send();
}