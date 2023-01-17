// variables
const htmlCode = document.querySelector(".html__coding");
const cssCode = document.querySelector(".css__coding");
const jsCode = document.querySelector(".js__coding");
const result = document.querySelector(".codeResult").contentWindow.document
const runButton = document.querySelector(".run-btn")



function compile(){
    result.open();
    result.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
    result.close();
}




runButton.addEventListener("click",compile)
