import data from './data.js'


//variables

const subMenuOne = document.querySelector(".show-submenu-one")
const subMenuTwo = document.querySelector(".show-submenu-two")
const Html_topics = document.querySelectorAll(".tutorial.topic")
const html_button = document.querySelector(".html--button")
const css_button = document.querySelector(".css--button")
const js_button = document.querySelector(".js--button")

// functions


function show_Submenu_One() {
    document.querySelector(".sub-menu.one").style.display = "block"
}
Html_topics.forEach(topic=>{
    topic.addEventListener("click", ()=>{
        document.querySelector(".sub-menu.one").style.display = "none"
    })
})


function show_Submenu_Two() {
    document.querySelector(".sub-menu.two").style.cssText = "display:block;"
}
Html_topics.forEach(topic=>{
    topic.addEventListener("click", ()=>{
        document.querySelector(".sub-menu.two").style.display = "none"
    })
})




Html_topics[0].addEventListener('click',()=>{
    document.querySelector(".tutorials__container").innerHTML = data.htmlCode.whatIsHtml
}) 
Html_topics[1].addEventListener('click',()=>{
    document.querySelector(".tutorials__container").innerHTML = data.htmlCode.tagElement
})
Html_topics[3].addEventListener('click',()=>{
    document.querySelector(".tutorials__container").innerHTML = data.htmlCode.metaTags
})
Html_topics[4].addEventListener('click',()=>{
    document.querySelector(".tutorials__container").innerHTML = data.htmlCode.headings
})

const temp = [...Html_topics]
Html_topics[5].addEventListener("click", ()=>{
    alert("I was not able to finish writing the lecture/tutorial for this topic due to insufficient time, I will improve it on way")
})
temp.slice(7,temp.length).forEach(topic=>{
    topic.addEventListener('click',()=>{
        alert("I was not able to finish writing the lecture/tutorial for this topic due to insufficient time, I will improve it on way")
    })   
})


function html_Tutorial() {
    document.querySelector(".main__page__content").innerHTML = data.htmlCode.mainPart;
}


function cssEdit(){
    document.querySelector(".main__page__content").innerHTML = data.css.mainCSSPage
    const CSStopic = document.querySelectorAll(".tutorial.topic.css")
    CSStopic.forEach(topic => {
        topic.addEventListener("click",()=>{
            alert("I was not able to finish writing the lecture/tutorial for this topic due to insufficient time, I will improve it on way")
        })
    })
}


function jsEdit() {
    document.querySelector(".main__page__content").innerHTML = data.js.mainJS
    const jstopic = document.querySelectorAll(".tutorial.topic.js")
    jstopic.forEach(topic => {
        topic.addEventListener("click", ()=>{
            alert("I was not able to finish writing the lecture/tutorial for this topic due to insufficient time, I will improve it on way")
        })
    })
}



//call the function
// navIconCont.addEventListener('click', showNavBar)
// sideIconCont.addEventListener('click',showSideBar)
subMenuOne.addEventListener('click',show_Submenu_One)
subMenuTwo.addEventListener('click',show_Submenu_Two)

if (css_button){
    css_button.addEventListener('click',cssEdit)
}
if (js_button){
    js_button.addEventListener('click',jsEdit)
}

if (html_button){
    html_button.addEventListener("click", html_Tutorial)
}






