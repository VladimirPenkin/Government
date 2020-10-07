import Singleton from "./law"

let acceptLaw = document.querySelector("#accept").addEventListener("click", () => {

    let idLaw = document.querySelector("#idLaw").value;
    let nameLaw = document.querySelector("#nameLaw").value;
    let textLaw = document.querySelector("#textLaw").value;

    Singleton.add({ id: idLaw, name: nameLaw, text: textLaw });

    document.querySelector("#idLaw").value = "";
    document.querySelector("#nameLaw").value = "";
    document.querySelector("#textLaw").value = "";

});

export default acceptLaw;