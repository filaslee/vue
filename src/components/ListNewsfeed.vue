<template>
    <div class="list">
        <div class="jumbotron">
            <div class="container-fluid pt-5">
                <div class="row justify-content-center mt-5">
                        <div class="col-2"></div>
                        <div class="col-8 my-2">
                            <div class="form-group">
                                <b-form-input id="uname" class="cssinput form-control form-control-lg" v-model="search" type="text" name="uname" placeholder="search news title" required></b-form-input>
                            </div>
                        </div>
                        <div class="col-2"></div>
                </div>
                <div class="row justify-content-center ">
                        <div class="col- mx-2 mt-4">
                            <div class="b-form-group">
                                <select v-model="selectedTitle" class="form-control cssselect" >
                                    <option value="">Title order by</option>
                                    <option v-for="sort in SortType" :value="sort" :key="sort">{{sort}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col- mx-2 mt-4">
                            <div class="b-form-group">
                                <select v-model="selectedContent" class="form-control">
                                    <option value="" class=" text-secondary">Content order by</option>
                                    <option v-for="sort in SortType" :value="sort" :key="sort">{{sort}}</option>
                                </select>
                            </div>
                        </div>
                        <div class="col- mx-2 mt-4">
                            <div class="b-form-group">
                                <select v-model="selectedAuthor" class="form-control">
                                    <option value="">Author order by</option>
                                    <option v-for="sort in SortType" :value="sort" :key="sort">{{sort}}</option>
                                </select>
                            </div>
                        </div>
                </div>
             </div>
        </div>
        <div class="container-fluid pb-5">
            <div class="row mx-3 justify-content-center" v-for="newsfeed in orderNewsfeed" :key="newsfeed.id">
                <NewsFeed :newsfeed="newsfeed"/>
            </div>
        </div>
    </div>
</template>

<script>
 import NewsFeed from './NewsFeed.vue'
 import { mapGetters} from "vuex"
 export default {
     data(){
         return{
            search: '',
            selectedTitle:'',
            selectedContent:'',
            selectedAuthor:'',
            SortType: ['asc', 'desc'],
         }
     },
     
    components: {
      NewsFeed,
     },
    computed:{
         ...mapGetters(["allNewsfeed","searched"]),
        orderNewsfeed() {
             return this._.orderBy(this.searched(this.search), ['title', 'content','author'], [this.selectedTitle, this.selectedContent, this.selectedAuthor])
       }
        
         
      },
    }
</script>

<style scoped>
  .cssinput{
      border-radius: 30px;
  }
  .jumbotron
  {
    background-color: white;
  }
  .list
  {
     background-color: rgb(240, 240, 240);
  }

</style>