document.getElementById("sideBarOpen").addEventListener("click",function(){
    let topBar=document.getElementById("topBar");
    let sideBar=document.getElementById("sideBar");
    sideBar.style.display="block";
    topBar.style.display="none";
    document.getElementById("content").style.width="80vw";
    document.getElementById("aboutMe_").style.width="80vw";
    document.getElementById("skills_").style.width="80vw";
});
document.getElementById("sideBarCross").addEventListener("click",function(){
    let topBar=document.getElementById("topBar");
    let sideBar=document.getElementById("sideBar");
    sideBar.style.display="none";
    topBar.style.display="flex";
    document.getElementById("content").style.display="block";
    document.getElementById("aboutMe_").style.display="none";
    document.getElementById("skills_").style.display="none";
    document.getElementById("content").style.width="100vw";
    document.getElementById("aboutMe_").style.width="100vw";
    document.getElementById("skills_").style.width="100vw";
    document.getElementById("projects_").style.display="none";
    
});
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
}
function goToResume(){
    window.open("https://drive.google.com/file/d/1uXhdN0aRukVBCJm5lKZ0P1xO6aOLm_Ob/view?usp=sharing","_blank");
}