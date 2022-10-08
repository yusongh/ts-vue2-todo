<template>
  <div class="todo-page">
    <ul>
      <todo-item
        v-for="(item, index) in list"
        :key="item.index"
        :item="item"
        :index="index"
        :isEdittingIndex="isEdittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="hanleComplete"
      ></todo-item>
    </ul>

    <a-button @click="turn">跳转</a-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoItem from '../components/TodoItem'
import { State, Mutation } from 'vuex-class'

@Component({
  name: 'todoPage',
  components: {
    TodoItem
  }
})
export default class Show extends Vue {
  public isEdittingIndex = -1

  @State('todoList') public list
  @Mutation('updateTodoList') public updateList
  @Mutation('todoItemComplete') public itemComplete

  public handleSave({ index, content }) {
    console.log(index, content);
    
    // this.list[index].text = content
    this.updateList({ index, content })
    this.handleCancel()
  }

  public handleEdit(index: number) {
    this.isEdittingIndex = index
  }

  public handleCancel() {
    this.isEdittingIndex = -1
  }

  public hanleComplete(index) {
    this.itemComplete(index)
  }

  public turn() {
    this.$router.push({
      name: 'show'
    })
  }
}
</script>
