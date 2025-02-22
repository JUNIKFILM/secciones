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

// Get the container and movie list elements
const container = document.querySelector('.Container');
const movieList = document.querySelector('.MovieList');
const movieItems = document.querySelectorAll('.TPostMv');

// Create and add search input
function createSearchBar() {
    const searchDiv = document.createElement('div');
    searchDiv.className = 'search-container';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'movieSearch';
    searchInput.placeholder = 'Buscar películas...';
    searchInput.className = 'search-input';
    
    
    
    searchDiv.appendChild(searchInput);
    container.insertBefore(searchDiv, movieList);
    
    return searchInput;
}

// Filter function
function filterMovies(searchTerm) {
    movieItems.forEach(movie => {
        const text = movie.textContent.toLowerCase();
        const isVisible = text.includes(searchTerm.toLowerCase());
        movie.style.display = isVisible ? '' : 'none';
    });
}

// Initialize search functionality
function initializeSearch() {
    const searchInput = createSearchBar();
    
    searchInput.addEventListener('input', (e) => {
        filterMovies(e.target.value);
    });
}

// Call the initialization
initializeSearch();

document.getElementById("lupa").addEventListener("click", m_buscador);

function m_buscador(){
    movieSearch.style.display = "block";
 
}    

