import axios from 'axios';
// import router from '@/router'

export const state = () => ({
    posts: undefined,
});

export const mutations = {
    // fillContent(state, payload) {
    //     const {posts, pages, knowledgeBank, knowledgeBankCategories, tags, categories, options} = payload;
    //     state.posts = posts;
    //     state.pages = pages;
    //     state.knowledgeBank = knowledgeBank;
    //     state.knowledgeBankCategories = knowledgeBankCategories;
    //     state.tags = tags;
    //     state.categories = categories;
    //     state.options = options;
    // },
    fillContent(state, payload) {
        payload.forEach((content) => {
            state[content.name] = content.data;
        })
    },
}

// const apiEndpoint = 'http://apibase.ga/testsite';
const apiEndpoint = 'http://localhost:8888/headless';
const contentModules = [
    {
        endpoint: `${apiEndpoint}/wp-json/wp/v2/posts`,
        name: 'posts'
    },
    {
        endpoint: `${apiEndpoint}/wp-json/wp/v2/pages`,
        name: 'pages'
    },
    {
        endpoint: `${apiEndpoint}/wp-json/wp/v2/knowledgebank`,
        name: 'knowledgebank'
    },
    {
        endpoint: `${apiEndpoint}/wp-json/wp/v2/knowledgebank_categories`,
        name: 'knowledgeBankCategories'
    },
];

export const actions = {
    async nuxtServerInit({ commit, state }) {
        console.log('ServerInit');
        const responses = await Promise.all(contentModules.map(async module => {
            const res = await axios.get(module.endpoint);
            return {
                name: module.name,
                data: res.data
            }
        }));
        commit('fillContent', responses);

    // const postsReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/posts`);
    // const pagesReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/pages`);
    // const knowledgeBankReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/knowledgebank`);
    // const knowledgeBankCategoriesReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/knowledgebank_categories`);
    // const optionsReq = axios.get(`${apiEndpoint}/wp-json/acf/v3/options/options`);
    // const tagsReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/tags`);
    // const categoriesReq = axios.get(`${apiEndpoint}/wp-json/wp/v2/categories`);

    // // you could also use destructuring to have an array of responses
    // const data = await axios.all([postsReq, pagesReq]).then(
    //     axios.spread((posts, pages) => {
    //     commit('fillContent', {
    //         posts: posts.data,
    //         pages: pages.data
    //     });
    // }));
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