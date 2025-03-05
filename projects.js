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

let project_div_base = document.createElement('div');
project_div_base.classList = 'project-div'
let project_title_base = document.createElement('h3');
project_title_base.classList = 'project-title'
let project_desc_base = document.createElement('p');
project_desc_base.classList = 'project-desc'

/**/
document.addEventListener('DOMContentLoaded', () => {
    fetch_projects().then(data => {
        var projects = data;
        console.log(data);
        for(let i = 0; i < projects.length; i++)
        {
            //instantiate a clone of project_div_base
            let project_div = project_div_base.cloneNode();

            //title
            let project_title = project_title_base.cloneNode();
            project_title.innerHTML = projects[i].name;
            project_div.appendChild(project_title);

            //description
            let project_desc = project_desc_base.cloneNode();
            project_desc.innerHTML = projects[i].description;
            project_div.appendChild(project_desc);
            
            //append div to table
            document.getElementById("projects-table").appendChild(project_div);
        }
        
    });
});
/**/
/*
fetch_projects().then(data => {
    var projects = data;
    console.log(projects.length);
});
*/