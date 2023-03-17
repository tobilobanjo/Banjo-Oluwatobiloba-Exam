import {createStore} from 'vuex'
import * as Types from './types';

export default createStore({
    state: {
        count: 0
    },
    mutations: {
        increment(state, payload) {
            return state.count = state.count + payload.amount;
        },
        decrement(state, payload) {
            return state.count = state.count - payload.amount;
        },
        reset(state) {
            return state.count = 0;
        },
        setValue(state, payload) {
            return state.count = payload.amount;
        },
    },
    actions: {
        increment(context, payload) {
            context.commit(Types.Increment, payload)
        },
        decrement(context, payload) {
            context.commit(Types.Decrement, payload)
        },
        reset(context) {
            context.commit(Types.Reset)
        },
        setValue(context, payload) {
            context.commit(Types.SetValue, payload)
        }
    },
    getters: {}
})
