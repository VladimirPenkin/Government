import Singleton from "./law"

let makeEvent = document.querySelector("#event").addEventListener("click", () => {
    Singleton.spendHoliday();
    alert(`Budget after party: ${Singleton.getBudget()}\nSatisfactions after party: ${Singleton.getAllSatisfactions()}`
    );
});

export default makeEvent;