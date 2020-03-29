<template>
  <div>
      <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
        <el-form-item label="文章标题">
            <el-input v-model="article.title"></el-input>
        </el-form-item> 
        <el-form-item label="活动形式">
            <el-input type="textarea" v-model="article.body"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">立即创建</el-button>
            <el-button @click="goBack">取消</el-button>
        </el-form-item>
        </el-form>
  </div>
</template>

<script>
export default {
    data() {
      return {
        article: {
          title: '',
          body: ''
        }
      }
    },
    methods: {
      saveArticle() {
        this.$http.post('articles', this.article).then(res => {
            console.log(res.data);
            this.$message({
                message: '文章创建成功',
                type: 'success'
            });
            //跳转到文章列表页
            this.$router.push('/articles/index')
        })
      },
      goBack() {
          this.$router.go(-1);
      }
    }
  }
</script>

<style>

</style>