/**
 * Função auxiliar de sort para ordenar os repos por data
 */
function dateCompare(a, b){
    let dateA = new Date(a.pushed_at);
    let dateB = new Date(b.pushed_at);
    return (dateB.getTime() - dateA.getTime());
}
export default dateCompare;