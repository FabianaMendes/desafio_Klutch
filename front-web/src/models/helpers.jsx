
export function formatCurrency(price) {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(price);
}

export function select(){
    var tabela = document.getElementById("table");
    var linhas = tabela.getElementsByTagName("tr");
    for(var i = 0; i < linhas.length; i++){
        var linha = linhas[i];
        linha.addEventListener("click", function(){
            selLinha(this, false); 
        });
    }
    function selLinha(linha, multiplos){
        if(!multiplos){
        var linhas = linha.parentElement.getElementsByTagName("tr");
        for(var i = 0; i < linhas.length; i++){
        var linha_ = linhas[i];
        linha_.classList.remove("selected");    
        }
    }
    linha.classList.toggle("selected");
    }
}