var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}

var sidemen = document.getElementById("sidemenu");
function openmenu(){
    sidemen.style.right ="0";
}
function closemenu(){
    sidemen.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxMZQY7aAOmADka55JNNmJ9gBS0j1FA8O2GYQpjWHzjDudJ-kuyaI2qZToO7qyohvGr/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

/*------text auto type--------*/

var typed = new Typed(".text",{
    strings:["Frontend Developer" , "Backend Developer" , "UI/UX Designer" , "Web Developer" , "Youtuber" , "Teacher" , "Blogger"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
