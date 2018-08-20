import Vue from 'vue';
import Vuex from 'vuex';
import { getUserInfo, getTopics } from '@/api/index';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        loginUserInfo: {},
        topics: []
    },
    mutations: {
        loginUserInfo(state, data) {
            state.loginUserInfo = data;
        },
        topics(state, data) {
            state.topics = data;
        }
    },
    actions: {
        async getLoginUserInfo({ commit }, loginName) {
            let userInfo = await getUserInfo({ loginname: loginName });
            commit('loginUserInfo', userInfo);
        },
        async getTopics({ commit }, params) {
            let list = await getTopics({
                page: params.page || 1,
                tab: params.tab || "all",
                limit: params.limit || 40
            });
            commit('topics', list);
        }
    }
})

export default store;