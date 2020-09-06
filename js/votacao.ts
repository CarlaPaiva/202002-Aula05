let candidato1:number = 0, candidato2:number = 0, 
    candidato3:number = 0, candidato4:number = 0, 
    candidato5:number = 0, nulo:number = 0;
$(document).ready(function(){

    $("#btnVotar").click(function(){
        let numeroCandidato:Number = Number($("#txtCandidato").val());

        if (numeroCandidato > 5)
            alert("Voto nulo registrado.");

        Votar(numeroCandidato);
        $("#txtCandidato").val('');
    });

    $("#btnApurarVotos").click(function(){
        SetResultados();
    });

    $("#btnLimpar").click(function(){
        Reset();
    });
});

function Votar(voto:Number){
    switch (voto){
        case 1:
            candidato1++;
            break;
        case 2:
            candidato2++;
            break;
        case 3:
            candidato3++;
            break;
        case 4:
            candidato4++;
            break;
        case 5:
            candidato5++;
            break;
        default:
            nulo++;
            break;
    }
}

function SetResultados(){
    $("#lblQtd1").text(candidato1);
    $("#lblQtd2").text(candidato2);
    $("#lblQtd3").text(candidato3);
    $("#lblQtd4").text(candidato4);
    $("#lblQtd5").text(candidato5);

    GetVencedor();

    $(".resultados").css('display', 'block');
}

function GetVencedor(){
    let results = [
        {id: 1, qtd: candidato1},
        {id: 2, qtd: candidato2},
        {id: 3, qtd: candidato3},
        {id: 4, qtd: candidato4},
        {id: 5, qtd: candidato5}
    ];

    let resultadoFinal = results.sort((a,b) =>{
        if (a.qtd < b.qtd) {
            return 1;
        }
        if (a.qtd > b.qtd) {
            return -1;
        }
        return 0;
    });


    $("#lblVencedor").text(`O vencedor da votação foi o candidato com código ${resultadoFinal[0].id} - com ${resultadoFinal[0].qtd} votos`);
}

function Reset(){
    candidato1 = 0;
    candidato2 = 0;
    candidato3 = 0;
    candidato4 = 0;
    candidato5 = 0;
    nulo = 0;

    
    $(".resultados").css('display', 'none');
}