const express = require('express')
const app = express()

//允许跨域
app.use(require('cors')())
//识别客户端提交过来的json
app.use(express.json())
//数据库的东西
const mongoose = require('mongoose')
//链接数据库 7017默认端口
mongoose.connect('mongodb://localhost:27017/element-admin',{
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true
})

//数据操作的模型
const Article = mongoose.model('Article', new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    }
}))

//录入数据库
//新增文章
app.post('/api/articles', async(req, res) => {
    const article = await Article.create(req.body)//文章模型的 创建方法
    res.send(article)
})
// 文章列表
app.get('/api/articles', async(req,res) => {
    const articles = await Article.find();//查询数据
    res.send(articles)//发送给前端
})

//删除文章
app.delete('/api/articles/:id', async(req, res) => {
    await Article.findByIdAndDelete(req.params.id)
    res.send({
        status: true
    })
})

// 文章详情修改数据
app.get('/api/articles/:id', async(req, res) => {
    const article = await Article.findById(req.params.id);//通过id去查找
    res.send(article);
})

//修改数据(文章)
app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body);//通过id去查找并修改
    res.send(article);//返回修改后的article
})

app.get('/', async(req, res) => {
    res.send('index')
})
app.listen(3001, () => {
    console.log('http://localhost:3001/')
})