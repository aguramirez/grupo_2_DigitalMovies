window.addEventListener("load", () => {
    let form = document.querySelector(".form")
    form.name.focus();
    
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        let errors = [];
        let titulo = document.querySelector("#titulo")
        let descripcion = document.querySelector("input#descripcion")
        let inputImagen = document.querySelector("input#imagen")

        let peliError = document.querySelector("#peliError")

        if (titulo.value == "") {
            peliError.innerHTML = "<p> El campo titulo no puede estar vacío </p>"

            errors.push("El campo titulo no puede estar vacio")
            titulo.classList.remove("is-valid");
            titulo.classList.add("is-invalid");
        } else if (titulo.value.length < 5) {
            peliError.innerHTML = "<p> El campo titulo no puede tener menos de 5 caracteres </p>"

            errors.push("El campo titulo no tener menos de 5 caracteres")
            titulo.classList.remove("is-valid");
            titulo.classList.add("is-invalid");
        } else {
            peliError.innerHTML = "";

            titulo.classList.add("is-valid");
            titulo.classList.remove("is-invalid");
        }

        if (descripcion.value.length < 20) {
            alert("Debe tener al menos 20 caracteres")
        }
        let extension = inputImagen.files[0].name.split('.').pop().toLowerCase();
        let extensionesPermitidas = ['jpg', 'jpeg', 'png', 'gif'];
        if (extensionesPermitidas.indexOf(extension) === -1) {
            alert('La imagen debe ser de tipo JPG, JPEG, PNG o GIF.');
        }


        if (errors.length > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector(".errores");
            ulErrors.classList.add("alert-warning");
            ulErrors.innerHTML = "";
            for (let i = 0; i < errors.length; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        } else {
            alert("La validación fue exitosa")
            form.submit();
        }
    })
})