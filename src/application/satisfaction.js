import Singleton from "./law"

let showSatisfactions = document.querySelector("#satisfaction").addEventListener("click", () => {
    alert(`Satisfactions after accepted laws: ${Singleton.getAllSatisfactions()}`
    );

});

export default showSatisfactions;