const skills = [
    { n: "PYTHON", i: "python-original.svg" },
    { n: "FLASK", i: "flask-original.svg" },
    { n: "TAILWIND", i: "tailwindcss-original.svg" },
    { n: "NEXT.JS", i: "nextjs-original.svg" },
    { n: "MYSQL", i: "mysql-original.svg" },
    { n: "JAVASCRIPT", i: "javascript-original.svg" },
    { n: "TYPESCRIPT", i: "typescript-original.svg" },
    { n: "JAVA", i: "java-original.svg" },
    { n: "GIT", i: "git-original.svg" },
    { n: "POSTMAN", i: "postman-plain.svg" },
    { n: "JINJA", i: "fa-code" } 
];

function init() {
    const track = document.getElementById('skills-scroller');
    if (!track) return;
    const full = [...skills, ...skills, ...skills, ...skills];
    
    full.forEach(s => {
        const div = document.createElement('div');
        div.className = 'scroller-item';
        
        if (s.n === "JINJA") {
        
            div.innerHTML = `<i class="fas ${s.i}" style="font-size: 20px; color: #a855f7;"></i> <span>${s.n}</span>`;
        } else {
        
            let folder = s.n.toLowerCase().replace('.', '');
            if (s.n === "TAILWIND") folder = "tailwindcss";
            div.innerHTML = `<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${folder}/${s.i}" width="25"> <span>${s.n}</span>`;
        }
        track.appendChild(div);
    });
}
window.onload = init;