import 'highlight.js/styles/dark.css'
import hljs from 'highlight.js'
import Vue from "vue";

const highlight=Vue.directive('highlight',(el)=>{
    let blocks = el.querySelectorAll('pre code')
    blocks.forEach((block) => {
        hljs.highlightBlock(block)
    })
});

export default { highlight }