function animation_skills() {
    var skill_elements = document.getElementsByClassName("content_skill");
    for (var i = 0; i < skill_elements.length; i++) {
        skill_elements[i].addEventListener("mouseover", function () {
            if (window.innerWidth >= 500) {
                this.style.margin = "10px 30px 30px 30px";
            }
        });
        skill_elements[i].addEventListener("mouseout", function () {
            if (window.innerWidth >= 500) {
                this.style.margin = "30px";
            }
        });
    }
}

function generate_skills(data) {
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

        animation_skills()

        update_background_images();
    }
}

fetch('./data/skills_data.json')
    .then(response => response.json())
    .then(data => {
        generate_skills(data);
    })
    .catch(error => console.error(error));

