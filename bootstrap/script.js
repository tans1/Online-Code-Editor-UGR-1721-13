// for the compiler part
const htmlCode = document.querySelector(".html__coding")
const cssCode = document.querySelector(".css__coding")
const jsCode = document.querySelector(".js__coding")
const runButton = document.querySelector(".run--button")



function compile(){
  if (document.querySelector(".codeResult")){
    const result = document.querySelector(".codeResult").contentWindow.document
    result.open();
    result.writeln(html.value+"<style>"+css.value+"</style>"+"<script>" + js.value + "</script>");
    result.close();

  }
}
if (runButton){
  runButton.addEventListener("click",compile)
}




// from the bootstrap form validation

(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
