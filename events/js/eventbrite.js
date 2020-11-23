
class EventBrite {
    constructor() {
        this.auth_token = '4SICNWFFFHLAIJ2XBUAQ';
    }




    //get categories from API
    async getCategoriesAPI(){

        //query the API
const categoriesResponse = await fetch (`http://evenbriteapi.com/v3/categories/?token=4SICNWFFFHLAIJ2XBUAQ`);
    }
}
