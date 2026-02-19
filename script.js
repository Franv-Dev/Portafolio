const skills = [
    { n: "PYTHON", i: "python-original.svg" },
    { n: "FLASK", i: "flask-original.svg" },
    { n: "TAILWIND", i: "tailwindcss-original.svg" }, // Corregido: tailwindcss
    { n: "NEXT.JS", i: "nextjs-original.svg" },
    { n: "MYSQL", i: "mysql-original.svg" },
    { n: "JAVASCRIPT", i: "javascript-original.svg" },
    { n: "TYPESCRIPT", i: "typescript-original.svg" }
];

function init() {
    const track = document.getElementById('skills-scroller');
    if (!track) return;

    const full = [...skills, ...skills, ...skills, ...skills];
    
    full.forEach(s => {
        const div = document.createElement('div');
        div.className = 'scroller-item';
        
        // El ícono de tailwind necesita su nombre de carpeta específico
        const iconFolder = s.n === "TAILWIND" ? "tailwindcss" : s.n.toLowerCase().replace('.', '');

        div.innerHTML = `
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${iconFolder}/${s.i}" width="25"> 
            <span>${s.n}</span>
        `;
        track.appendChild(div);
    });
}
window.onload = init;