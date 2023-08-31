let projects_data = [];

function color_skills() {
    var techno_elements = document.getElementsByClassName("techno");
    for (var i = 0; i < techno_elements.length; i++) {
        techno_elements[i].addEventListener("mouseover", function () {
            this.style.backgroundColor = "#5B9A8B";
        });
        techno_elements[i].addEventListener("mouseout", function () {
            this.style.backgroundColor = "#6cc2ae";
        });
    }
}

function update_background_images() {
    const contentProjects = document.querySelectorAll(".content_project");

    for (i = 0; i < contentProjects.length; i++) {
        const contentProjectDiv = contentProjects[i].querySelector(".content_project_div");

        if (window.innerWidth < 900) {
            contentProjectDiv.style.backgroundImage = `url("${projects_data[i].demo}")`;
        } else {
            contentProjectDiv.style.backgroundImage = `none`;
        }
    }
}

function generate_projects(data) {
    const projects_section = document.getElementById("projects_section");

    for (const project of data) {
        const projectContainer = document.createElement("div");
        projectContainer.classList.add("content_project");

        const projectHTML = `
            <img class="gif" src="${project.demo}" alt="projet ${project.titre}"/>
            <div>
                <span class="project_date_type">${project.date} - Projet ${project.type}</span>
                <div class="content_project_div">
                    <span class='content_title'>${project.titre}</span>
                    </br>
                    <span class="content_project_text">${project.description}</span>
                    </br>
                    <div class="content_project_lg_link">
                        <div class="list_techno">
                            ${project.techno.map(tech => `<a href="${tech[1]}" target="_blank"><div class="techno">${tech[0]}</div></a>`).join('')}
                        </div>
                        <a target="_blank" href="${project.github_link}"><img src="media/logo/github_white.png" alt="github"/></a>
                    </div>
                </div>
            </div>
        `;

        projectContainer.innerHTML = projectHTML;
        projects_section.appendChild(projectContainer);

        color_skills();

        update_background_images();
    }
}

fetch('./data/projects_data.json')
    .then(response => response.json())
    .then(data => {
        projects_data = data;
        generate_projects(data);
    })
    .catch(error => console.error(error));

window.addEventListener("resize", update_background_images);