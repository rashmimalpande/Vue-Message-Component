Vue.component('message', {
    props: ['title', 'body'],

    data(){
        return{
            isVisible: true
        };
    },

    template: `
    
        <div class="message" v-show="isVisible">
            <div class="title">
                <h3>{{title}}</h3>
                <button class="close" @click="isVisible = false">X</button>
            </div>
            <div class="body">
                <p>{{body}}</p>
            </div>
        </div>
    
    `
});

var app = new Vue({
    el: '#app',
    data: {
        text: "",
    }
})