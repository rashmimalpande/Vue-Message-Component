Vue.component('message', {
    template: `
    
        <div class="message">
            <div class="title">
                <h3>Title</h3>
                <button class="close">X</button>
            </div>
            <div class="body">
                <p>Body</p>
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