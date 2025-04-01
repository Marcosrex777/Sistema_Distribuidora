function abrirIngreso() {
    
    const width = 600;
    const height = 400;

    const left = (Window.innerWidth = width) /2;
    const top = (Window.innerHeigth = height) /2;


    window.open(        
        "Insertar.html",
        'width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes'

    )
}
function abrirConsulta() {
    window.open();
}