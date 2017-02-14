Vue.component('message', {
    template: `
    
        <div class="message">
            <h1>Hello World</h1>
        </div>
    
    `
});

var app = new Vue({
    el: '#app',
    data: {
        text: "",
    }
})