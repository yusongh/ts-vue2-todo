import { Component, Prop, Watch,Emit, Vue } from 'vue-property-decorator'
import './index.less'

interface Item {
	text: string
	complete: boolean
}

@Component({
	name: 'todoItem'
})
export default class TodoItem extends Vue {
	@Prop(Object) public item!: Item
	@Prop(Number) public index!: number
	@Prop(Number) public isEdittingIndex!: number

	// data数据
	public edittingContent = ''

	@Watch('isEdittingIndex')
	public edittingChange(newIndex) {
		if (newIndex === this.index) {
			this.edittingContent = this.item.text
		} else {
			this.edittingContent = ''
		}
	}


	// 方式一：使用Emit装饰器
	@Emit('on-save')
	public save(index, content) {
		return {
			index,
			content
		}
	}

	// 方式二
	@Emit()
	public onEdit() {
		return this.index;
	}

	// 方式三
	public cancel() {
		this.$emit('on-cancel')
	}

	public complete() {
		this.$emit('on-complete', this.index)
	}

	protected render() {
		return (
			<li class='list-wrap'>
				{
					this.isEdittingIndex === this.index ?
					(<div>
						<a-input style='width: 200px;' v-model={this.edittingContent}></a-input>
						<a-icon type='check' on-click={this.save.bind(this, this.index, this.edittingContent)}></a-icon>
						<a-icon type='close' on-click={this.cancel}></a-icon>
					</div>)
					:(
						<div>
							<span style={this.item.complete ? { textDecoration: 'line-through'} : {}} on-click={this.complete}>{ this.item.text }</span>
							<a-icon type='edit' on-click={this.onEdit}></a-icon>
						</div>
					)
				}
			</li>
		)
	}
}
