let projects_data = [];

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
                        <span class="content_project_text">${project.techno.join(' - ')}</span>
                        <a target="_blank" href="${project.github_link}"><img src="media/logo/github_white.png" alt="github"/></a>
                    </div>
                </div>
            </div>
        `;

        projectContainer.innerHTML = projectHTML;
        projects_section.appendChild(projectContainer);

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