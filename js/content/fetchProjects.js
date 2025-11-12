/**
 * Fetches all repos under schevve's profile
 */
export async function fetchProjects() {
    try{
        const raw_response = await fetch('https://api.github.com/users/schevve/repos');
        const json_response = await raw_response.json();
        return json_response;
    }
    catch (error){
        console.error('Error retrieving projects information\n', error)
    }
}