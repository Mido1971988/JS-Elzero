import { ValidationError } from './error.js';

export const USER = {
    // destructuring
    submit({email, endpoint, language, password}) {
        //check the values
        //do the validation...
        //we can return errors here too
        if (email) {
        if (!USER.validateEmail(email)) {
            let err = new ValidationError('Failed email validation', email.id);
            return Promise.reject(err);
        }
        }
        //send to the server
        let data = new FormData();
        return USER.upload(endpoint, data);
    },
    validateEmail(input) {
        //do your email validation on the input field
        return true;
    },
    upload(endpoint, data) {
        let req = new Request(endpoint, {
        method: 'POST',
        body: data,
        });
        return fetch(req);
    },
};