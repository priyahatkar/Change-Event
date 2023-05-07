console.log("hello world!");

const cl= console.log;

const changeColor = document.getElementById("changeColor");

const allDivs = document.querySelectorAll(".all");

const onFillterColor = (color) => {
    let selectedColor = color.target.value;
    // cl(selectedColor);
    allDivs.forEach(div => div.classList.add("d-none"));
    let selectedDiv = [...document.querySelectorAll("." + selectedColor)]
    selectedDiv.forEach(div => div.classList.remove("d-none"))
}
changeColor.addEventListener("change",onFillterColor)

const imgChange = document.getElementById("imgChange");
const allDiv = [...document.querySelectorAll(".alls")];

const onFilterImage = (eve) =>{
    let selectedImage = eve.target.value;
    cl(selectedImage);
    allDiv.forEach(div => div.classList.add("d-none"));
    let selectedImg = [...document.querySelectorAll("." + selectedImage)]
    selectedImg.forEach(div => div.classList.remove("d-none"));
}

imgChange.addEventListener("change",onFilterImage)

const skillChange = document.getElementById("skillChange");
const AllSkill = [...document.querySelectorAll(".skill")];

const onFillterSkill = (skill) =>{
    let selectedSkill= skill.target.value;
    cl(selectedSkill)
    AllSkill.forEach(div => div.classList.add("d-none"));
    let selectedSkills = [...document.querySelectorAll("." + selectedSkill)];
    selectedSkills.forEach(div => div.classList.remove("d-none"));
}

skillChange.addEventListener("change",onFillterSkill);