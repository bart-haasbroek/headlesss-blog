import axios from 'axios';
import _siteconfig from "../config/_siteconfig";

export const state = () => ({
    pageTitle: 'Home'
});

export const actions = {
    async subscribeToNewsletter(_, payload) {
        console.log('payload', payload);
const { data } = await axios.get('http://localhost:8888/api/post-to-airtable?email='+payload);
console.log('data', data);
    }
}

export const mutations = {
    setPagetitle(state, payload) {
        state.pageTitle = payload
    }
}