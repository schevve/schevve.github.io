async function fetch_projects() {
    try{
        let raw_response = await fetch('https://api.github.com/users/schevve/repos');
        let json_response = await raw_response.json();
        return json_response;
    }
    catch (error){
        console.error('Error retrieving projects information\n', error)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch_projects().then(data => {
        var projects = data;
        projects.sort(DateCompare);
        console.log(projects);
        for(let i = 0; i < projects.length; i++)
        {
            let project_box_base = document.getElementById("project-box-model").cloneNode(true);

            //title
            let project_title = project_box_base.querySelector(".project-title");
            project_title.innerHTML = projects[i].name;

            //description
            let project_desc = project_box_base.querySelector(".project-desc");
            project_desc.innerHTML = projects[i].description;

            let project_desc_created_date = project_box_base.querySelector(".project-desc.creation-date").querySelector(".created-date-span");
            let project_desc_updated_date = project_box_base.querySelector(".project-desc.creation-date").querySelector(".updated-date-span");
            let creation_date = new Date(projects[i].created_at);
            let updated_date = new Date(projects[i].pushed_at);
            project_desc_created_date.innerHTML += creation_date.toLocaleDateString();
            project_desc_updated_date.innerHTML += updated_date.toLocaleDateString();

            //add link to box <a>
            project_box_base.href = projects[i].html_url;
            
            //append box to table
            project_box_base.removeAttribute("id");
            project_box_base.removeAttribute("hidden");
            document.getElementById("projects-table").appendChild(project_box_base);
        }
        document.getElementById("project-box-model").remove();
    });
});

function DateCompare(a, b){
    let dateA = new Date(a.pushed_at);
    let dateB = new Date(b.pushed_at);
    return (dateB.getTime() - dateA.getTime());
}