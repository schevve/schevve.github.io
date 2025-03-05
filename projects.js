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

let project_div_a_container_base = document.createElement('a');
project_div_a_container_base.classList = 'project-div'
let project_div_base = document.createElement('div');
let project_title_base = document.createElement('h3');
project_title_base.classList = 'project-title'
let newtab_img_base = document.createElement('img');
newtab_img_base.src = 'static/NewTab.png';
newtab_img_base.classList = 'newtab-icon'
let project_desc_base = document.createElement('p');
project_desc_base.classList = 'project-desc'


/**/
document.addEventListener('DOMContentLoaded', () => {
    fetch_projects().then(data => {
        var projects = data;
        console.log(data);
        for(let i = 0; i < projects.length; i++)
        {
            //instantiate a clone of project_div_base and project_div_a_container
            let project_div_a_container = project_div_a_container_base.cloneNode();
            let project_div = project_div_base.cloneNode();

            //2 divs in the head of the project block
            let head_div_1 = project_div_base.cloneNode();
            head_div_1.classList = 'project-div-half'
            project_div.appendChild(head_div_1);
            let head_div_2 = project_div_base.cloneNode();
            head_div_2.classList = 'project-div-half'
            project_div.appendChild(head_div_2);


            //title
            let project_title = project_title_base.cloneNode();
            project_title.innerHTML = projects[i].name;
            head_div_1.appendChild(project_title);

            //icon new tab
            let newtab_img = newtab_img_base.cloneNode();
            head_div_2.appendChild(newtab_img);

            //description
            let project_desc = project_desc_base.cloneNode();
            project_desc.innerHTML = projects[i].description;
            project_div.appendChild(project_desc);

            //add link to a
            project_div_a_container.href = projects[i].html_url;
            project_div_a_container.target = '_blank'
            
            //append div to a and a to table
            project_div_a_container.appendChild(project_div);
            document.getElementById("projects-table").appendChild(project_div_a_container);
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