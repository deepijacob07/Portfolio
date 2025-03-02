/* typing animation */

var typed = new Typed(".typing", {
    strings:["","Web Developer","Web Designer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* Aside */

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {
            for(let j=0; j<totalNavList; j++){
                navList[j].querySelector("a").classList.remove("active")
            }
            this.classList.add("active")
        })
    }


    function sendMail(){
        var params={
             name:document.getElementById("name").value,
             email:document.getElementById("email").value,
             message:document.getElementById("message").value,

        };
        const serviceId="service_3a6ioy9";
    const templateId="template_1vu62ca"


    emailjs.send(serviceId,templateId,params)
    .then(
        res=>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("your message sent successfully")
        }
    )
    .catch((err)=>console.log(err));
    }
    