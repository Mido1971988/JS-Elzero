//to be imported when the custom error is needed

//ES5 factory function version
//   new SteveError('some message')
const SteveError = function (msg) {
    //the constructor function for our SteveError
    return Object.create(Error.prototype, {
      name: { value: 'SteveError', enumerable: true }, //instead of error
        message: { value: msg, enumerable: true },
        bob: { value: 'hello', enumerable: true },
    });
};

  //class version
const NetworkError = class extends Error {
    constructor(response) {
        super(response.statusText);
    
        this.name = 'NetworkError';
        this.message = response.statusText;
        this.code = response.status;
        this.response = response;
    }
};

export { SteveError, NetworkError };