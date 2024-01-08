const dateNumber = document.getElementById("dateNumber");
const dateText   = document.getElementById("dateText");
const dateMonth  = document.getElementById("dateMonth");
const dateYear   = document.getElementById("dateYear");

//Tasks Container
const tasksContainer = document.getElementById("taskContainer");

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('jp', {day:"numeric"});
    dateText.textContent = date.toLocaleString('jp',{weekday:'long'});
    dateMonth.textContent = date.toLocaleString('jp',{month:"short"});
    dateYear.textContent = date.toLocaleString("jp", {year:"numeric"});
}