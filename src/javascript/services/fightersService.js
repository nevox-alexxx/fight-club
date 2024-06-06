import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);

            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(fighterId) {
        try {
            const endpoint = `details/fighter/${fighterId}.json`;
            const fighterData = await callApi(endpoint);
            return fighterData;
        } catch (err) {
            console.error(`Failed to fetch fighter details: ${err.message}`);
            return null;
        }
    }
}

const fighterService = new FighterService();

export default fighterService;
