import Singleton from "./law"

let showSatisfactions;

window.addEventListener("load", function () {

    showSatisfactions = document.querySelector("#satisfaction").addEventListener("click", () => {
        alert(`Satisfactions after accepted laws: ${Singleton.getAllSatisfactions()}`
        );
        
    });
});

export default showSatisfactions;