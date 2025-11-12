import content_en from "./content/texts_en.js";
import content_pt from "./content/texts_pt.js";

function init(){
    const body = document.body;
    let content;
    if (!(navigator.language == "pt-BR")){
        const root = document.documentElement;
        root.lang = "en";
        document.title = "about me";
        content = content_en;
    } else {
        content = content_pt;
    }

    const title = document.querySelector("#header-title");
    title.textContent = content.about.title;

    const about_body = document.querySelector("#about-section");
    const paragraphs = content.about.body.split('\n');
    for (const paragraph of paragraphs){
        const p = document.createElement("p");
        p.className = "about-section-body";
        p.textContent = paragraph;
        about_body.appendChild(p);
    }
}

if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}