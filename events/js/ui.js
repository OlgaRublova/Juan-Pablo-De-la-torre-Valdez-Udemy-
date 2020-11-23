class UI {
    constructor() {

        this.init();
    }

    //method when the app starts
    init() {
        //display categories in <select>
        this.printCategories();
    }

    //prints the categories
    printCategories() {
        const categoriesList = eventbrite.getCategoriesAPI();
    }
}