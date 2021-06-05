import AddNewsfeed from '../components/AddNewsfeed.vue'
import ListNewsfeed from '../components/ListNewsfeed.vue'
import eachNews from '../components/eachNews.vue'


export default[
    {path:'/add',component:AddNewsfeed},
    {path:'/',component:ListNewsfeed},
    {path:'/news/:id',component:eachNews},
]