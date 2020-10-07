import Singleton from "./law"

let showAllLaws;

window.addEventListener("load", function () {

    showAllLaws = document.querySelector("#laws").addEventListener("click", () => {

        let lawObj = Singleton.getAllLaw();

        document.querySelector("#conteiner").innerHTML = "";
        let table = document.createElement("table");

        table.innerHTML +=
            `<tr><td>№</td><td>Name</td><td>Text</td></tr>`
        for (let i = 0; i < lawObj.length; i++) {
            table.innerHTML +=
        			`<tr><td>${lawObj[i].id}</td><td>${lawObj[i].name}</td><td>${lawObj[i].text}</td></tr>`
        };

        document.querySelector("#conteiner").prepend(table);
    
    })
});

export default showAllLaws;