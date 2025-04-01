document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aquí iría la lógica para guardar el producto
    console.log('Formulario enviado');
    
    // Opcional: Cerrar el modal después de guardar
    window.parent.postMessage({ action: 'closeModal' }, '*');
    
    // Opcional: Mostrar mensaje de éxito
    alert('Producto guardado correctamente');
});