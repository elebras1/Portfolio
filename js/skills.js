function generate_skills(data) {
    const skills = document.getElementById("skills");
    const skillTypes = {
        "language_back": document.getElementById("language_back"),
        "language_front": document.getElementById("language_front"),
        "framework": document.getElementById("framework"),
        "library": document.getElementById("library"),
        "versioning": document.getElementById("versioning")
    };

    for (const skill of data) {
        const skillContainer = document.createElement("div");
        skillContainer.classList.add("content_skill");

        const skillHTML = `
            <a target="_blank" href="${skill.lien}">
                <div class="skill">
                    <span>${skill.nom}</span>
                    <img src="${skill.logo}" alt="${skill.nom}" />
                </div>
            </a>
        `;

        skillContainer.innerHTML = skillHTML;
        skillTypes[skill.type].appendChild(skillContainer);

        update_background_images();
    }
}

fetch('./data/skills_data.json')
    .then(response => response.json())
    .then(data => {
        generate_skills(data);
    })
    .catch(error => console.error(error));
