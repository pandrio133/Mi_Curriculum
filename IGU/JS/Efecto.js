

const toggleBtn = document.getElementById("BPrincipal");

const submenu = document.getElementById("submenu");

let estado = false;
toggleBtn.addEventListener("click", () => {

    submenu.classList.toggle("activo");
    estado=!estado;
    if (estado) {
        toggleBtn.innerHTML="Here";
        toggleBtn.classList.add("txtB1")
    }
    else{
        toggleBtn.innerHTML="Aquí";

    }

});