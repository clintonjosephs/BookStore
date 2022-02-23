import ApiWrapper from "./apiWrapper";

export default class ApiCalls {
    static fetchWrapper = new ApiWrapper("https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/");
    static appId = "oU1tLSzTYhb9li3AI4JP";

    static fetchBooks = async () => {
        const response = await this.fetchWrapper.getApi(`apps/${this.appId}/books/`);
        return response;
    }

    static addBooks = async ({id, title, author, category}) => {
        const data = {
            item_id: id,
            title: title + ';;' + author,
            category
        };
        const response = await this.fetchWrapper.postApi(`apps/${this.appId}/books/`, data);
        return response;
    }

    static removeBooks = async (id) => {
        const data = {
            item_id: id,
        };
        const response = await this.fetchWrapper.postApi(`apps/${this.appId}/books/${id}`, data);
        return response;
    }
}