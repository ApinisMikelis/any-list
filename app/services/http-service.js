export class HttpService {

    constructor() {}

    async get(endpoint) {
        return await fetch(endpoint).then(
            response => response.ok ? response.json() : Promise.reject(response),
        ).catch(
            err => console.warn(err)
        );
    }

}
