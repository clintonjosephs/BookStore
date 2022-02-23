export default class ApiWrapper {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  getApi = async (apiEndpoint) => {
    const response = await fetch(this.baseUrl + apiEndpoint).then((data) => data.json());
    return response;
  };

  postApi = async (apiEndpoint, data) => {
    const response = await fetch(this.baseUrl + apiEndpoint, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  };

  deleteApi = async (apiEndpoint, data) => {
    const response = await fetch(this.baseUrl + apiEndpoint, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    });
    return response.ok;
  };
}
