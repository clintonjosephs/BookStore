import ApiWrapper from './ApiWrapper';

export default class ApiCalls {
  static apiWrapper = new ApiWrapper(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/',
  );

  static appId = 'oU1tLSzTYhb9li3AI4JP';

  static fetchBooks = () => {
    const response = this.apiWrapper.getApi(`apps/${this.appId}/books/`);
    return response;
  };

  static addBooks = ({
    id, title, author, category,
  }) => {
    const data = {
      item_id: id,
      title: `${title};;${author}`,
      category,
    };
    const response = this.apiWrapper.postApi(
      `apps/${this.appId}/books/`,
      data,
    );
    return response;
  };

  static removeBooks = (id) => {
    const data = {
      item_id: id,
    };
    const response = this.apiWrapper.postApi(
      `apps/${this.appId}/books/${id}`,
      data,
    );
    return response;
  };
}
