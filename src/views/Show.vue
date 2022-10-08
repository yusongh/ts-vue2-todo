<template>
  <div class="todo-page">
    <p
      v-for="item in list"
      :key="item.index"
      :style="{textDecoration: item.complete ? 'line-through' : ''}"
    >{{ item.text }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class'

@Component({
  name: 'showpage'
})
export default class Show extends Vue {
  @State('todoList') public list
}
</script>
