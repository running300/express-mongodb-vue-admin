<template>
  <div>
    <el-table :data="articles">
        <el-table-column prop="title" label="标题" width="350"></el-table-column>
        <el-table-column prop="body" label="内容" width="580"></el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
            <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
            <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
        </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: []
      }
    },
    created() {
        //获取后台里面的数据
       this.fetch();
    },
    methods: {
        //请求数据
        fetch() {
            this.$http.get('articles').then(res => {
                this.articles = res.data;
            })
        },
        edit(id) {
            this.$router.push(`/articles/${id}/edit`)
        },
        remove(id) {
            this.$http.delete(`articles/${id}`).then(res => {
                this.$message({
                    message: '删除成功',
                    type: 'success'
                });
                //刷新数据
                this.fetch();
            })
        }
    }
  };
</script>

<style>

</style>