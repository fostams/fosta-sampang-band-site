export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://project-1-api.herokuapp.com/';
    }

    async getComments() {
        try {
            const url = "https://project-1-api.herokuapp.com/comments?api_key=54399520-e616-4117-b2b4-05f395aafd4a";
            const response = await axios.get(url);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async postComment(newComment) {
        try {
            const url = "https://project-1-api.herokuapp.com/comments?api_key=54399520-e616-4117-b2b4-05f395aafd4a";
            const response = await axios.post(url, newComment);
            console.log(response.data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async getShows() {
        try {
            const url = "https://project-1-api.herokuapp.com/showdates?api_key=54399520-e616-4117-b2b4-05f395aafd4a";
            const response = await axios.get(url);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}