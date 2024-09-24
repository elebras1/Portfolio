let experiences_data = [];

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
    const contentexperiences = document.querySelectorAll(".content_experience");

    for (i = 0; i < contentexperiences.length; i++) {
        const contentexperienceDiv = contentexperiences[i].querySelector(".content_experience_div");

        if (window.innerWidth < 900) {
            contentexperienceDiv.style.backgroundImage = `url("${experiences_data[i].demo}")`;
        } else {
            contentexperienceDiv.style.backgroundImage = `none`;
        }
    }
}

function generate_experiences(data) {
    const experiences_section = document.getElementById("experiences_section");

    for (const experience of data) {
        const experienceContainer = document.createElement("div");
        experienceContainer.classList.add("content_experience");

        const experienceHTML = `
            <img class="gif" src="${experience.demo}" alt="experience ${experience.titre}"/>
            <div>
                <span class="experience_date_type">${experience.date}</span>
                <div class="content_experience_div">
                    <span class='content_title'>${experience.titre}</span>
                    </br>
                    <span class="content_experience_text">${experience.description}</span>
                    </br>
                    <div class="content_experience_lg_link">
                        <div class="list_techno">
                            ${experience.techno.map(tech => `<a href="${tech[1]}" target="_blank"><div class="techno">${tech[0]}</div></a>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;

        experienceContainer.innerHTML = experienceHTML;
        experiences_section.appendChild(experienceContainer);

        color_skills();

        update_background_images();
    }
}

fetch('./data/experiences_data.json')
    .then(response => response.json())
    .then(data => {
        experiences_data = data;
        generate_experiences(data);
    })
    .catch(error => console.error(error));

window.addEventListener("resize", update_background_images);