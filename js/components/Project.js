/**
 * Returns an 'a' element - with title, description, and dates - that redirects to the repository
 */
export function Project({title_text, description_text, updated_at_text, created_at_text, link_text}, content){
    const container = document.createElement("a");
    container.className = "project-box";
    container.href = link_text;
    container.target = "_blank";

    const top_container = document.createElement("div");
    top_container.className = "project-top-container";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = title_text;

    const linkBtn = document.createElement("img");
    linkBtn.className = "newtab-icon";
    linkBtn.src = "../../static/NewTab.png";

    top_container.append(title, linkBtn);
    container.appendChild(top_container);

    const description = document.createElement("p");
    description.className = "project-description";
    description.textContent = description_text;
    container.appendChild(description);

    const dates = document.createElement("p");
    dates.className = "project-dates-text";
    dates.textContent = content.projects.block_description_dates;
    dates.textContent = dates.textContent.replace("{updated_at}", updated_at_text);
    dates.textContent = dates.textContent.replace("{created_at}", created_at_text);
    container.appendChild(dates);

    return container;    
}