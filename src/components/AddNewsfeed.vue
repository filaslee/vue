<template>
    <div class="pad">
        <div class="row mx-4 justify-content-center"> 
            <b-form class="col">
                <h3 class="p-3 my-3 text-center text-white">Add Newsfeed</h3>
                <b-form-input id="uname" v-model="titletext" type="text" name="uname" placeholder="Enter Title" required></b-form-input>
                <b-form-textarea id="uname" v-model="textarea" type="text" class="form-control my-3" name="uname" placeholder="Enter Content" required></b-form-textarea>
                <b-form-input id="uname" v-model="textauthor" type="text" class="form-control my-3" name="uname" placeholder="Enter Author" required></b-form-input>
                <div class="row justify-content-center my-4">
                    <b-button @click="addTextI" class="btn btn-light" required >add Newsfeed</b-button>
                </div>  
            </b-form>    
        </div>
    </div>
</template>

<script>
    import { mapActions} from "vuex"
    import { v1 } from "uuid"
    export default {
        data(){
            return{
                titletext:"",
                textarea:"",
                textauthor:""
            }
        },
        methods:{
            ...mapActions(["addText"]),
            addTextI(e){
                   if (this.titletext && this.textarea && this.textauthor ) {
                         this.addText({
                            id:v1(),
                            title:this.titletext,
                            content:this.textarea,
                            author:this.textauthor
                            })
                            e.preventDefault();
                            this.$alert('Newsfeed Saved');
                            this.titletext='',
                            this.textarea='',
                            this.textauthor=''
                        }
            }
        }
    }
    
</script>

<style scoped>
        form {
           max-width: 700px;
           border-radius: 15px;
           background-image: linear-gradient(-90deg, #348ac7, #7474bf  );
        }
        .title
        {
            color:white;
        }
        .pad
        {
            padding-top: 150px; 
        }
</style>