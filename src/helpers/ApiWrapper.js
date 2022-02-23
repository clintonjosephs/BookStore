export default class ApiWrapper {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    getApi = async (apiEndpoint) => {
        const response = fetch(this.baseUrl + apiEndpoint, {
            method: 'GET',
            headers: { 'content-type': 'application/json' },
        });
        return response.json();
    }

    postApi = async (apiEndpoint, data) => {
        const response = fetch(this.baseUrl + apiEndpoint, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        return response;
    }

    deleteApi = async (apiEndpoint, data) => {
        const response = fetch(this.baseUrl + apiEndpoint, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });

        return response;
    }

}