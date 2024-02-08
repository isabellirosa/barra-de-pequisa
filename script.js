function pesquisar() {
    
    let input = document.getElementById('pesquisar').value;
    input = input.toLowerCase()

    let nomes = document.querySelectorAll('.nome');
    /*
       for (let index = 0; index < nomes.length; index++) {
        const element = nomes[index];
        if (!nomes[index].innerHTML.toLowerCase().includes(input)){
            nomes[index].style.display="none";
        }
        else{
            nomes[index].style.display="list-item";
        }
    }}
    */
    
    let itens = [];
    nomes.forEach((nome) => {
        itens.push(nome)
    });
    alert(`${itens}`)
    for (let item of itens) {
        if (!item.innerHTML.toLowerCase().includes(input)){
            item.style.display="none";
            alert(`oi`)
        }
       /* else{
            item.style.display="list-item";
        }*/
    }
}