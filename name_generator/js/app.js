document.querySelector('#generate-names').addEventListener('submit', loadNames);

//execute the function to query the API
function loadNames(e) {
    e.preventDefault();


//read the values from the form and create the variables
    const origin = document.getElementById('country').value;
    const genre = document.getElementById('genre').value;
    const amount = document.getElementById('quantity').value;

    //build the url
    let url = 'http://uinames.com/api/?';

    //read the origin and apend to the url
    if (origin !== '') {
        url += `?region=${origin}&`;
    }

    //read the gender and apend to the url
    if (genre !== '') {
        url += `?region=${genre}&`;
    }

    //read the amount and apend to the url
    if (amount !== '') {
        url += `?region=${amount}&`;
    }

    // //ajax call
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', url, true);
    // xhr.onload = function () {
    //     if (this.status === 200) {
    //         const names = JSON.parse(this.responseText);
    // //insert into html
    //         let html = '<h2>Generated Names</h2>';
    //         html += '<ul class="list">';
    //         names.forEach(function (name) {
    //             html += `
    //             <li>${name.name}</li>
    //             `;
    //         })
    //         html += '</ul';
    //         document.querySelector('#result').innerHTML = html;
    //     }
    // }
    // xhr.send();

    // Fetch API
    getNames(url)
        .then(names => {
            let namesResponse = names.names;


            let html = '<h2>Generated Names</h2>';
            html += '<ul class="list">';
            namesResponse.forEach(name =>  {
                html += `
                         <li>${name.name}</li>
                    `;
            });
            html += '</ul>';

            document.querySelector('#result').innerHTML = html;
        })
        .catch(error =>  console.log(error) )
}


async function getNames(url) {
    const response = await fetch(url);
    const names = await response.json();

    return {
        names
    }
}
