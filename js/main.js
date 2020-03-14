(function() {
  var MainComponent = {
    template: `
      <div>
        <el-input v-model="form.todo"></el-input>
        <el-button type="primary" :plain="true" @click="doAdd">追加</el-button>
        <ul>
          <li v-for="(item, idx) in todos">
            <span>{{ item }}</span>
            <el-button type="success" :plain="true" @click="done(idx)" icon="el-icon-check" circle></el-button>
            <el-button type="danger" :plain="true" @click="doRemove(idx)" icon="el-icon-delete" circle></el-button>
          </li>
        </ul>
      </div>
    `,
    data: function() {
      return {
        todos: [],
        form: {
          todo: ''
        }
      }
    },
    methods: {
      doAdd() {
        // 未入力の場合は何もしない
        if (!this.form.todo) {
          return
        }
        this.todos.push(this.form.todo)
        this.$message(`「${this.form.todo}」を追加しました！`)
        this.form.todo = ''
      },
      done(idx) {
        this.$message({
          message: `「${this.todos[idx]}」が完了しました。`,
          type: 'success'
        })
        this.todos.splice(idx, 1)
      },
      doRemove(idx) {
        this.$message({
          message: `「${this.todos[idx]}」を削除しました。`,
          type: 'error'
        })
        this.todos.splice(idx, 1)
      }
    },
  }

  // =======================
  new Vue({
    el: '#app',
    components: {
      'main-component': MainComponent
    }
  })
})();