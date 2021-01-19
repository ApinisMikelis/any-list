export class HttpService {

    constructor() {}

    async get(endpoint) {
        return await fetch(endpoint).then(
            response => response.ok ? response.json() : Promise.reject(response),
        ).catch(
            err => console.warn(err)
        );
    }

    async delete(endpoint) {
        return await fetch(endpoint, {
            method: 'DELETE',

        }).then(
            response => response.ok ? response.json() : Promise.reject(response),
        );
    }

}
