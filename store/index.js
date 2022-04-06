import axios from 'axios';
// import router from '@/router'

export const state = () => ({
    posts: undefined,
});

function addTaxonomies(posts, {taxonomy, name}) {
    posts.map((post) => {
        const taxonomyList = post.map((taxId) => {
            return taxonomies.find((t) =>t.id === taxId);
        })
        return {
            ...post,
            [name]: taxonomyList
        }
    })
}

export const mutations = {
    fillContent(state, payload) {
        const {posts, pages, knowledgeBank, knowledgeBankCategories, tags, categories, options} = payload;
        state.posts = posts;
        state.pages = pages;
        state.knowledgeBank = knowledgeBank;
        state.knowledgeBankCategories = knowledgeBankCategories;
        state.tags = tags;
        state.categories = categories;
        state.options = options;
    },
}

export const actions = {
    async nuxtServerInit({ commit, state }) {
        console.log('ServerInit');
        // const { data } = await axios.get('http://localhost:8888/headless/wp-json/wp/v2/posts');
        // const { data } = await axios.get('http://localhost:8888/headless/wp-json/wp/v2/posts');
        // Promise.all([
        //     axios.get('http://localhost:8888/headless/wp-json/wp/v2/posts'),
        //     axios.get('http://localhost:8888/headless/wp-json/wp/v2/pages')
        // ]).then((data) => {
        //     commit('fillContent', data);
        // })

                // const data = await axios.all([
        //     'http://localhost:8888/headless/wp-json/wp/v2/posts',
        //     'http://localhost:8888/headless/wp-json/wp/v2/pages'
        // ].map((endpoint) => axios.get(endpoint)));
        // console.log('data', data);

        // console.log('NEEEEEW', state);
        // if (state.brood === undefined) {
        //     console.log("DATAAAAAAA", state.brood);
        // } else {
        //     console.log('defineddd',state.brood )
        //     //console.log('geeeeeeen content', state.content);
        // }

    const postsReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/posts');
    const pagesReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/pages');
    const knowledgeBankReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/knowledgebank');
    const knowledgeBankCategoriesReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/knowledgebank_categories');
    const optionsReq = axios.get('http://localhost:8888/headless/wp-json/acf/v3/options/options');
    const tagsReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/tags');
    const categoriesReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/categories');

// you could also use destructuring to have an array of responses
const data = await axios.all([postsReq, pagesReq, knowledgeBankReq, knowledgeBankCategoriesReq, tagsReq, categoriesReq, optionsReq]).then(
    axios.spread((posts, pages, knowledgeBank, knowledgeBankCategories ,tags, categories, options) => {
        //console.log('options', options)
    commit('fillContent', {
        posts: posts.data,
        pages: pages.data,
        knowledgeBank: knowledgeBank.data,
        knowledgeBankCategories: knowledgeBankCategories.data,
        tags: tags.data,
        categories: categories.data,
        options: options.data.acf,
    });
}));



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
        return state.knowledgeBank;
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
    getPageBySlug: (_, getters) => (id) => {
        const page = getters.getPages.find((p) => p.slug === id);
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