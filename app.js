Vue.component('message', {
    props: ['title', 'body'],

    template: `
    
        <div class="message">
            <div class="title">
                <h3>{{title}}</h3>
                <button class="close">X</button>
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