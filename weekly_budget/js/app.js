//classes
class Budget {
    constructor(budget) {
        this.budget = Number(budget);
        this.budgetLeft = this.budget;
    }

    //substract from the budget
    substractFromBudget(amount) {
        return this.budgetLeft -= amount
    }
}

//everything related to html
class HTML {
//insert the budget when the user submits it
    insertBudget(amount) {
//insert into HTML
        budgetTotal.innerHTML = `${amount}`;
        budgetLeft.innerHTML = `${amount}`;
    }

    //Displays a message (correct or invalid)
    printMessage(message, className) {
        const messageWrapper = document.createElement('div');
        messageWrapper.classList.add('text-center', 'alert', className);
        messageWrapper.appendChild(document.createTextNode(message));

        //insert into html
        document.querySelector('.primary').insertBefore(messageWrapper, addExpenseForm);

        //clear the error
        setTimeout(function () {
            document.querySelector('.primary .alert').remove();
            addExpenseForm.reset();
        }, 2000);
    }

    //displays the expenses from the form into the list
    addExpenseToList(name, amount) {
        const expensesList = document.querySelector('#expenses ul');

//create li
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        //create template
        li.innerHTML = `${name}
        <span class="badge badge-primary badge-pill">$ ${amount}</span>
        `;
        //insert into html
        expensesList.appendChild(li);
    }

    //substract expenses amount from budget
    trackBudget(amount) {
        const budgetLeftDollars = budget.substractFromBudget(amount);
        budgetLeft.innerHTML = `${budgetLeftDollars}`;

//check when 25% is spent
        if ((budget.budget / 4) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success', 'alert-warning');
            budgetLeft.parentElement.parentElement.classList.add('alert-danger');

        } else if ((budget.budget / 2) > budgetLeftDollars) {
            budgetLeft.parentElement.parentElement.classList.remove('alert-success');
            budgetLeft.parentElement.parentElement.classList.add('alert-warning');

        }
    }
}


//variables
const addExpenseForm = document.querySelector('#add-expense'),
    budgetTotal = document.querySelector('span#total'),
    budgetLeft = document.querySelector('span#left');

let budget, userBudget;

//instanciate the html class
const html = new HTML();


//event listeners
eventListeners();

function eventListeners() {

    //App Init
    document.addEventListener("DOMContentLoaded", function () {
        //Ask the visitor the weekly budget
        userBudget = prompt('What\'s your budget for this week?');
        //validate the userBudget
        if (userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload();
        } else {
            // Budget is valid, then instanciate the budget class
            budget = new Budget(userBudget);

            //instanciate html class
            html.insertBudget(budget.budget);
        }
    })

    //When a new expense is added
    addExpenseForm.addEventListener('submit', function (e) {
        e.preventDefault();
//read the input values
        const expenseName = document.querySelector('#expense').value;
        const amount = document.querySelector('#amount').value;

        if (expenseName === '' || amount === '') {
            html.printMessage('There was an error, all the fields are mandatory', 'alert-danger');
        } else {
            //add the expenses into the list
            html.addExpenseToList(expenseName, amount);
            html.trackBudget(amount);
            html.printMessage('Added...', 'alert-success');
        }
    })

}