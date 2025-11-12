import { fetchProjects } from "./content/fetchProjects.js";
import content_pt from "./content/texts_pt.js";
import content_en from "./content/texts_en.js";
import { ProjectsGrid } from "./components/ProjectsGrid.js";

async function init(){
    const body = document.body;
    const raw_data = await fetchProjects();
    const data = raw_data.map(data => ({
        title_text: data.name,
        description_text: data.description,
        updated_at_text: data.pushed_at,
        created_at_text: data.created_at,
        link_text: data.html_url,
    }));
    let content;
    if (!(navigator.language == "pt-BR")){
        const root = document.documentElement;
        root.lang = "en";
        content = content_en;
    } else {
        content = content_pt;
    }

    const projects = ProjectsGrid({content, data})
    body.appendChild(projects);
}

if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function DateCompare(a, b){
    let dateA = new Date(a.pushed_at);
    let dateB = new Date(b.pushed_at);
    return (dateB.getTime() - dateA.getTime());
}