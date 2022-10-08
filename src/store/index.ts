import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		todoList: [
			{
				text: '123',
				complete: false,
				index: 1
			},
			{
				text: '1234',
				complete: false,
				index: 2
			},
		]
	},
	getters: {
	},
	mutations: {
		updateTodoList(state, { index, content }) {
			state.todoList[index].text = content
		},
		todoItemComplete(state, index) {
			state.todoList[index].complete = true
		},
	},
	actions: {
	},
	modules: {
	}
})
