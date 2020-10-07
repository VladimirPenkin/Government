import Singleton from "./law"

let makeEvent;

window.addEventListener("load", function () {

    makeEvent = document.querySelector("#event").addEventListener("click", () => {
        Singleton.spendHoliday();
        alert(`Budget after party: ${Singleton.getBudget()}\nSatisfactions after party: ${Singleton.getAllSatisfactions()}`
        );
    });

});

export default makeEvent;