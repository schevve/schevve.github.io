import { Project } from "./project.js";

/**
 * Returns a section with title and a grid
 */
export function ProjectsGrid({content, data}){
    const container = document.createElement("section");
    container.id = "projects-section";

    const title = document.createElement("h2");
    title.textContent = content.projects.section_title;

    const grid = document.createElement("div")
    grid.id = "projects-grid";

    console.log(data);
    for (const project of data){
        grid.appendChild(Project(project, content))
    }

    container.append(title, grid);

    return container;
}