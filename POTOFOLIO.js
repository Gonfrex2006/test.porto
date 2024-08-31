const opinioninput = document.getElementById("opinion-input");
const listopinion = document.getElementById("listopinion");
const errorcatch = document.getElementById("errorcatch");
const opinioncatch = document.getElementById("opinioncatch");

function sendopinion(){
    if(opinioninput.value === ""){
        errorcatch.style.display = "block"
        setTimeout(() => {
            errorcatch.style.display = "none";   
        },3000);

    }
    else{
        opinioncatch.style.display = "block"
        setTimeout(() => {
            opinioncatch.style.display = "none";   
        },3000);

        errorcatch.style.display = "none"

        let opinion = document.createElement("li")
        opinion.innerHTML = opinioninput.value;

        listopinion.appendChild(opinion);
    }

opinioninput.value = ""
savedata()

}

function savedata(){
    localStorage.setItem("data",listopinion.innerHTML)
}
function showopinion(){
    listopinion.innerHTML = localStorage.getItem("data");
}

function clearopinion(){
    localStorage.removeItem("data");
    showopinion()
}

showopinion()