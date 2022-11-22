// document.getElementById("sideBarOpen").addEventListener("click",function(){
//     let topBar=document.getElementById("topBar");
//     let sideBar=document.getElementById("sideBar");
//     sideBar.style.display="block";
//     topBar.style.display="none";
//     document.getElementById("content").style.width="80vw";
//     document.getElementById("aboutMe_").style.width="80vw";
//     document.getElementById("skills_").style.width="80vw";
// });
// document.getElementById("sideBarCross").addEventListener("click",function(){
//     let topBar=document.getElementById("topBar");
//     let sideBar=document.getElementById("sideBar");
//     sideBar.style.display="none";
//     topBar.style.display="flex";
//     // document.getElementById("content").style.display="block";
//     // document.getElementById("aboutMe_").style.display="none";
//     // document.getElementById("skills_").style.display="none";
//     document.getElementById("content").style.width="100vw";
//     document.getElementById("aboutMe_").style.width="100vw";
//     document.getElementById("skills_").style.width="100vw";
//     // document.getElementById("projects_").style.width="100vw";
    
//     // document.getElementById("projects_").style.display="none";
    
// });

let mode=document.getElementById("darkmode");
let img=document.getElementById("darkmodeimg");
let sideBar=document.getElementById("sideBar");
let content=document.getElementById("mainContent");
let query=document.querySelector("body");
let topbarimg=document.getElementsByClassName("topbarimg");
let one=document.getElementById("one");
function turnOnDark(){
    img.src="img/sun.png";
    mode.style.backgroundColor="black";
    sideBar.style.color="rgb(199, 199, 199)";
    sideBar.style.backgroundColor="#d15618";
    query.style.backgroundColor="black";
    query.style.color="white";
    content.style.backgroundColor="black";
    content.style.color="white";
    one.style.backgroundColor="black";
    one.style.color="white";
    topbarimg.style.color="white";
    document.getElementsByClassName("contrib-number").style.color="white";
}
document.getElementById("darkmode").addEventListener("click",function(){
    
    // let java1=document.getElementById("javadark1");
    // let java=document.getElementById("javadark");
    if(mode.innerHTML=='<img id="darkmodeimg" src="img/moon.png" alt="">'){
        img.src="img/sun.png";
        mode.style.backgroundColor="black";
        sideBar.style.color="rgb(199, 199, 199)";
        sideBar.style.backgroundColor="#d15618";
        query.style.backgroundColor="black";
        query.style.color="white";
        content.style.backgroundColor="black";
        content.style.color="white";
        one.style.backgroundColor="black";
        one.style.color="white";
        topbarimg.style.color="white";
    }else{
        img.src="img/moon.png";
        mode.style.backgroundColor="white";
        // mode.style.backgroundColor="black";
        sideBar.style.color="black";
        sideBar.style.backgroundColor="rgb(199, 199, 199)";
        query.style.color="black";
        query.style.backgroundColor="white";
        content.style.backgroundColor="white";
        content.style.color="black";
        one.style.backgroundColor="white";
        one.style.color="black";
    }
})
function goToGit(){
    window.open("https://github.com/sumitpanchal08","_blank");
}
function goToIn(){
    window.open("https://www.linkedin.com/in/sumitpanchal08","_blank");
}
function showHome(){
    document.getElementById("content").style.display="block";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
function showAbout(){
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="block";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
if(screen.width< 700){
    document.getElementById("content").style.display="block";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("projects_").style.display="none";

}
function showSkills(){
    document.getElementById("skills_").style.display="block";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("projects_").style.display="none";
}
function showProjects(){
    document.getElementById("skills_").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("projects_").style.display="block";
    document.getElementById("projects_").style.width="80vw";
}
function goToMail(){
    window.open("mailto:sumitpanchal9034@gamil.com");
}
function goToResume(){
    // window.open("https://drive.google.com/file/d/1uXhdN0aRukVBCJm5lKZ0P1xO6aOLm_Ob/view?usp=sharing","_blank");
    window.open("https://drive.google.com/u/0/uc?id=1uXhdN0aRukVBCJm5lKZ0P1xO6aOLm_Ob&export=download","_blank");
}
function goToWhatsapp(){
    window.open("https://wa.me/918168471581?text=Hello!%20Can%20you%20tell%20me%20more%20about%20you?");
}



