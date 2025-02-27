// Agregar estilos CSS necesarios para la animación
const style = document.createElement('style');
style.textContent = `

`;
document.head.appendChild(style);

// Envolver el menú en un contenedor si no existe
document.querySelectorAll('.mMenu').forEach(menu => {
    if (!menu.parentElement.classList.contains('menu-container')) {
        const container = document.createElement('div');
        container.className = 'menu-container';
        menu.parentNode.insertBefore(container, menu);
        container.appendChild(menu);
    }
});

