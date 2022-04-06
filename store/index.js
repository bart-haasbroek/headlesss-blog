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
        const {posts, pages, tags, categories, options} = payload;
        state.posts = posts;
        state.pages = pages;
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
    const optionsReq = axios.get('http://localhost:8888/headless/wp-json/acf/v3/options/options');
    const tagsReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/tags');
    const categoriesReq = axios.get('http://localhost:8888/headless/wp-json/wp/v2/categories');

// you could also use destructuring to have an array of responses
const data = await axios.all([postsReq, pagesReq, tagsReq, categoriesReq, optionsReq]).then(
    axios.spread((posts, pages, tags, categories, options) => {
        //console.log('options', options)
    commit('fillContent', {
        posts: posts.data,
        pages: pages.data,
        tags: tags.data,
        categories: categories.data,
        options: options.data.acf
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
        const options = getters.getOptions;
        const headerImage = page?.acf.contentImage?.url || options.defaultHeader.sizes.large

        console.log('page', page);
        return {
            ...page,
            headerImage: headerImage,
        }
    },
    getPostBySlug: (_, getters) => (id) => {
        const post = getters.getPosts.find((p) => p.slug === id);
        const options = getters.getOptions;
        const tags = getters.getTags;
        const categories = getters.getCategories;
        const headerImage = post.acf.contentImage?.url || options.defaultHeader.sizes.large
        const postTags = post.tags.map((tagId) => {
            return tags.find((t) =>t.id === tagId);
        })
        const postCategories = post.categories.map((catId) => {
            return categories.find((c) =>c.id === catId);
        })

        const res = {
            ...post,
            headerImage: headerImage,
            tags: postTags,
            categories: postCategories
        }
        return res;
    },
    getCategorybySlug: (_, getters) => (slug) => {
        const categoryBySlug = getters.getCategories.find((c) => c.slug === slug);
        return categoryBySlug;
    },
    getPostByCategory: (_, getters) => (slug) => {
        const categoryBySlug = getters.getCategorybySlug(slug);
        const postByCategory = getters.getPosts.filter((p) => p.categories.indexOf(categoryBySlug.id) > -1);
        return postByCategory;
    }
}