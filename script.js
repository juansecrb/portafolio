// CONFIGURACIÓN DE PARTÍCULAS (LA RED)
particlesJS("particles-js", {
    "particles": {
        "number": { 
            "value": 110, 
            "density": { "enable": true, "value_area": 800 } 
        },
        "color": { "value": "#4CFF66" },
        "shape": { "type": "circle" },
        "opacity": { 
            "value": 0.4, 
            "random": true 
        },
        "size": { 
            "value": 2, 
            "random": true 
        },
        "line_linked": { 
            "enable": true, 
            "distance": 150, 
            "color": "#4CFF66", 
            "opacity": 0.25, 
            "width": 1 
        },
        "move": { 
            "enable": true, 
            "speed": 1.5, 
            "direction": "none", 
            "out_mode": "out" 
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": { 
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" }
        },
        "modes": { 
            "repulse": { "distance": 120, "duration": 0.4 } 
        }
    },
    "retina_detect": true
});

// RESTRICCIÓN DE CÓDIGO FUENTE Y CLIC DERECHO
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    // Bloquear F12
    if(e.keyCode == 123) return false;
    
    // Bloquear Ctrl+Shift+I, J, C
    if(e.ctrlKey && e.shiftKey && (e.keyCode == 'I'.charCodeAt(0) || e.keyCode == 'J'.charCodeAt(0) || e.keyCode == 'C'.charCodeAt(0))) {
        return false;
    }
    
    // Bloquear Ctrl+U (Ver código fuente)
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
};
