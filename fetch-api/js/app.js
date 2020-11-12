document.getElementById('button1').addEventListener('click', loadText);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button2').addEventListener('click', loadREST);


//load txt
function loadText() {
    fetch('data.txt')
        .then( response => response.text())
        .then( data => document.getElementById('result').innerHTML = data)
        .catch( error => console.log(error));
}


//load json
function loadJSON() {
    fetch('employees.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(employee => {
                html += `
                <li>${employee.name} - ${employee.job}</li>`;
            });
            document.getElementById('result').innerHTML = html;
        })
}
//load rest

function loadREST() {
    fetch('https://picsum.photos/list')
        .then( response => response.json())
        .then(images => {
            let html = '';
            images.forEach(image => {
                html += `
                <li><a target="_blank" href="${image.post_url}">Viev image   </a>${image.author}</li>`;
            });
            document.getElementById('result').innerHTML = html;
        })
        .catch( error => console.log(error))
}