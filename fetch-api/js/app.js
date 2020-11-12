document.getElementById('button1').addEventListener('click', loadText);
document.getElementById('button2').addEventListener('click', loadJSON);
document.getElementById('button2').addEventListener('click', loadREST);


//load txt
function loadText() {
    fetch('data.txt')
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
            document.getElementById('result').innerHTML = data;
        })
        .catch(function (error) {
            console.log(error);
        })
}


//load json
function loadJSON() {
    fetch('employees.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let html = '';
            data.forEach(function (employee) {
                html += `
                <li>${employee.name} - ${employee.job}</li>`;
            });
            document.getElementById('result').innerHTML = html;
        })
}

//load rest

function loadREST() {
    fetch('https://picsum.photos/list')
        .then(function (response) {
            return response.json();
        })
        .then(function (images) {
            let html = '';
            images.forEach(function (image) {
                html += `
                <li><a target="_blank" href="${image.post_url}">Viev image   </a>${image.author}</li>`;
            });
            document.getElementById('result').innerHTML = html;
        })
        .catch(function (error) {
            console.log(error);
        })
}