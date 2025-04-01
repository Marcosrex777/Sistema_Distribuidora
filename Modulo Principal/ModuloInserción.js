// Window controls functionality
const setupWindowControls = (windowElement) => {
    const closeBtn = windowElement.querySelector('.close-btn');
    const minBtn = windowElement.querySelector('.min-btn');
    const maxBtn = windowElement.querySelector('.max-btn');
    const windowHeader = windowElement.querySelector('.window-header');
    
    let isMaximized = false;
    let originalSize = {
        width: windowElement.style.width,
        height: windowElement.style.height,
        left: windowElement.style.left,
        top: windowElement.style.top
    };
    
    closeBtn.addEventListener('click', () => {
        windowElement.style.display = 'none';
    });
    
    minBtn.addEventListener('click', () => {
        windowElement.style.display = 'none';
        setTimeout(() => {
            windowElement.style.display = 'block';
        }, 1000);
    });
    
    maxBtn.addEventListener('click', () => {
        if(isMaximized) {
            windowElement.style.width = originalSize.width;
            windowElement.style.height = originalSize.height;
            windowElement.style.margin = '30px auto';
            windowElement.style.borderRadius = '8px';
            isMaximized = false;
        } else {
            originalSize = {
                width: windowElement.style.width,
                height: windowElement.style.height
            };
            
            windowElement.style.width = '100%';
            windowElement.style.height = '100vh';
            windowElement.style.margin = '0';
            windowElement.style.borderRadius = '0';
            windowElement.style.position = 'fixed';
            windowElement.style.top = '0';
            windowElement.style.left = '0';
            isMaximized = true;
        }
    });
    
    // Make window draggable
    let isDragging = false;
    let offsetX, offsetY;
    
    windowHeader.addEventListener('mousedown', (e) => {
        if(!isMaximized) {
            isDragging = true;
            offsetX = e.clientX - windowElement.getBoundingClientRect().left;
            offsetY = e.clientY - windowElement.getBoundingClientRect().top;
            windowElement.style.position = 'absolute';
            windowElement.style.margin = '0';
        }
    });
    
    document.addEventListener('mousemove', (e) => {
        if(isDragging && !isMaximized) {
            windowElement.style.left = (e.clientX - offsetX) + 'px';
            windowElement.style.top = (e.clientY - offsetY) + 'px';
        }
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
};

// Initialize window controls
const productWindow = document.getElementById('productWindow');
setupWindowControls(productWindow);

// Form validation
const productForm = document.getElementById('productForm');

productForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Validate required fields
    const requiredFields = [
        {id: 'productName', errorId: 'nameError'},
        {id: 'productCategory', errorId: 'categoryError'},
        {id: 'unitMeasure', errorId: 'measureError'},
        {id: 'unitPrice', errorId: 'priceError'},
        {id: 'minStock', errorId: 'minStockError'},
        {id: 'maxStock', errorId: 'maxStockError'}
    ];
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field.id);
        const error = document.getElementById(field.errorId);
        
        if(!input.value.trim()) {
            error.style.display = 'block';
            input.style.borderColor = 'red';
            isValid = false;
        } else {
            error.style.display = 'none';
            input.style.borderColor = '#ddd';
        }
    });
    
    // Additional validation for max > min stock
    const minStock = parseInt(document.getElementById('minStock').value);
    const maxStock = parseInt(document.getElementById('maxStock').value);
    
    if(minStock >= maxStock) {
        document.getElementById('maxStockError').textContent = 'El stock máximo debe ser mayor al mínimo';
        document.getElementById('maxStockError').style.display = 'block';
        document.getElementById('maxStock').style.borderColor = 'red';
        isValid = false;
    }
    
    if(isValid) {
        alert('Formulario válido. Enviando datos...');
        // Aquí iría el código para enviar el formulario
        // productForm.submit();
    }
});