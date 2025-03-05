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

/**/
document.addEventListener('DOMContentLoaded', () => {
    fetch_projects().then(data => {
        var projects = data;
        for(let i = 0; i < projects.length; i++)
        {
            let project_div = project_div_base.cloneNode();
            
            project_div.innerHTML = projects[i].name;
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