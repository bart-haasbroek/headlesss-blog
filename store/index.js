import axios from 'axios';
import _siteConfig from "../config/_siteConfig";

export const state = () => ({
    posts: undefined,
});

export const mutations = {
    fillContent(state, payload) {
        payload.forEach((content) => {
            state[content.storeKey] = content.data;
        })
    },
}
const contentModules = _siteConfig.contentModules;

export const actions = {
    async nuxtServerInit({ commit, state }) {
        console.log('ServerInit');
        const responses = await Promise.all(contentModules.map(async module => {
            const res = await axios.get(module.endpoint);
            return {
                storeKey: module.storeKey,
                data: res.data
            }
        }));
        commit('fillContent', responses);
    },
}

export const getters = {
    getPosts: state => {
        return state.posts;
    },
    getPages: state => {
        return state.pages;
    },
    getKnowledgeBank: state => {
        return state.knowledgebank;
    },
    getKnowledgeBankCategories: state => {
        return state.knowledgeBankCategories;
    },
    getCategories: state => {
        return state.categories;
    },
    getTags: state => {
        return state.tags;
    },
    getOptions: state => {
        return state.options;
    },
    getPageBySlug: (_, getters) => (slug) => {
        const page = getters.getPages.find((p) => p.slug === slug);
        return page;
    },
    getPostBySlug: (_, getters) => (id) => {
        const post = getters.getPosts.find((p) => p.slug === id);
        return post;
    },
    getKnowledgebankBySlug: (_, getters) => (slug) => {
        const post = getters.getKnowledgeBank.find((p) => p.slug === slug);
        return post;
    },
    getKnowledgebankCategoryBySlug: (_, getters) => (slug) => {
        const post = getters.getKnowledgeBankCategories.find((p) => p.slug === slug);
        return post;
    },
    getPostByKnowledgebankCategory: (_, getters) => (slug) => {
        const categoryBySlug = getters.getKnowledgebankCategoryBySlug(slug);
        const postByCategory = getters.getKnowledgeBank.filter((p) => p.knowledgebank_categories.indexOf(categoryBySlug.id) > -1);
        return postByCategory;
    },
    getCategorybySlug: (_, getters) => (slug) => {
        const categoryBySlug = getters.getCategories.find((c) => c.slug === slug);
        return categoryBySlug;
    },
    getPostByCategory: (_, getters) => (slug) => {
        const categoryBySlug = getters.getCategorybySlug(slug);
        const postByCategory = getters.getPosts.filter((p) => p.categories.indexOf(categoryBySlug.id) > -1);
        return postByCategory;
    },
}