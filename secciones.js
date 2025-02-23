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

// Crear paneles de contenido para cada elemento del menú
document.querySelectorAll('.mMenu > li').forEach(item => {
    const contentPanel = document.createElement('div');
    contentPanel.className = 'content-panel';
    item.appendChild(contentPanel);

    item.addEventListener('click', function(e) {
        // Evitar que el clic se propague si es en el panel de contenido
        if (e.target.closest('.content-panel')) {
            return;
        }

        const wasActive = this.classList.contains('active');
        
        // Cerrar todos los paneles primero
        document.querySelectorAll('.mMenu > li').forEach(li => {
            li.classList.remove('active');
            li.querySelector('.content-panel').classList.remove('visible');
        });
        
        if (!wasActive) {
            // Activar este panel
            this.classList.add('active');
            const panel = this.querySelector('.content-panel');
            panel.classList.add('visible');
            
            // Agregar solo el botón de cerrar
            panel.innerHTML = `
                <button class="close-button" id="close" >×</button>
            `;

            // Agregar evento al botón de cerrar
            const closeButton = panel.querySelector('.close-button');
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.classList.remove('active');
                panel.classList.remove('visible');
                boton.style.display = "block"
            });
        }
    });
});

document.getElementById("boton").addEventListener("click", ocultar_boton);

//ocultas lista de articulos

function ocultar_boton(){
  boton.style.display = "none";
 
}

document.getElementById("sharecomp").addEventListener("click", m_boton);

function m_boton(){
  boton.style.display = "block";
 
}    
