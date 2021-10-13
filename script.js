// For dropdown menu 
document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-drowpdown-button");
    if(!isDropdownButton && e.target.closest("[data-drowpdown]") != null)
        return;

    let currentDropdown;
    if(isDropdownButton){
        currentDropdown = e.target.closest("[data-drowpdown]");
        currentDropdown.classList.toggle("active");
    }

    document.querySelectorAll("[data-drowpdown].active").forEach(dropdown => {
        if(dropdown === currentDropdown)
            return
        dropdown.classList.remove("active");
    })
});
// For dropdown menu 



let textArea = document.getElementById("text-area");

// For changing font
const defaultFont = document.getElementById("SansSerif");
const TimesNewRoman = document.getElementById("TimesNewRoman");
const CourierNew = document.getElementById("CourierNew");
const SegoeUI = document.getElementById("SegoeUI");
const Georgia = document.getElementById("Georgia");

defaultFont.addEventListener("click", () => {
    textArea.style.fontFamily = "sans-serif";
});

TimesNewRoman.addEventListener("click", () => {
    textArea.style.fontFamily = "Times New Roman";
});

CourierNew.addEventListener("click", () => {
    textArea.style.fontFamily = "Courier New";
});

SegoeUI.addEventListener("click", () => {
    textArea.style.fontFamily = "Segoe UI";
});

Georgia.addEventListener("click", () => {
    textArea.style.fontFamily = "Georgia";
});
// For changing font



// For changing font size
const fontSize10 = document.getElementById("fontSize10");
const fontSize12 = document.getElementById("fontSize12");
const fontSize16 = document.getElementById("fontSize16");
const fontSize18 = document.getElementById("fontSize18");
const fontSize24 = document.getElementById("fontSize24");
const fontSize36 = document.getElementById("fontSize36");
const fontSize48 = document.getElementById("fontSize48");

fontSize10.addEventListener("click", () => {
    textArea.style.fontSize = "10px";
});

fontSize12.addEventListener("click", () => {
    textArea.style.fontSize = "12px";
});

fontSize16.addEventListener("click", () => {
    textArea.style.fontSize = "16px";
});

fontSize18.addEventListener("click", () => {
    textArea.style.fontSize = "18px";
});

fontSize24.addEventListener("click", () => {
    textArea.style.fontSize = "24px";
});

fontSize36.addEventListener("click", () => {
    textArea.style.fontSize = "36px";
});

fontSize48.addEventListener("click", () => {
    textArea.style.fontSize = "48px";
});
// For changing font size

let darkMode = document.getElementById("dark");
let lightMode = document.getElementById("light");

let awit = document.getElementById("awit");
let interpreter = document.getElementById("interpreter");

let textTitle0 = document.querySelectorAll(".text-title")[0];
let textTitle1 = document.querySelectorAll(".text-title")[1];
let textTitle2 = document.querySelectorAll(".text-title")[2];
let textOutput = document.getElementById("text-output");
let analysisOutput = document.getElementById("analysis-output");

// Dark mode
darkMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#616161";
    awit.style.color = "white";
    interpreter.style.color = "white";
    textArea.style.backgroundColor = "rgb(40, 44, 52)";
    textArea.style.color = "white";
    textTitle0.style.color = "white";
    textTitle1.style.color = "white";
    textTitle2.style.color = "white";
    textOutput.style.backgroundColor = "white";
    analysisOutput.style.backgroundColor = "white";
    darkMode.style.display = "none";
    lightMode.style.display = "block";
})
// Dark mode



// Light mode
lightMode.addEventListener("click", () => {
    document.body.style.backgroundColor = "#ccc";
    awit.style.color = "#444";
    interpreter.style.color = "#444";
    textArea.style.backgroundColor = "#ccc";
    textArea.style.color = "black";
    textTitle0.style.color = "#444";
    textTitle1.style.color = "#444";
    textTitle2.style.color = "#444";
    textOutput.style.backgroundColor = "#ccc";
    analysisOutput.style.backgroundColor = "#ccc";
    lightMode.style.display = "none";
    darkMode.style.display = "block";
})
// Dark mode




function executeCode(){

    $.ajax({

        url: "/awitCodes/compiler.php",

        method: "POST",

        data: {
            code: textArea.value
        },

        // crossDomain: true,

        success: function(response){
            $(".output").text(response)
        },

    });


}