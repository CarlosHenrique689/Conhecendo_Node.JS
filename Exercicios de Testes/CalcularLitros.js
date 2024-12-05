function LitrosNecessários(distânciaPercurso, tipoCombustível){
    if(Number.isInteger(distânciaPercurso)){
        if(distânciaPercurso > 0){
            if(tipoCombustível === "gasolina"){
                resultado = distânciaPercurso / 16
                return resultado}
            else if(tipoCombustível === "etanol"){
                resultado = distânciaPercurso / 11
                return resultado
            }else{return "Tipo de combustível inválido"}
        }else{return "Distância do Percurso inválida"}
    }else{return "Distância do Percurso inválida"}
};

module.exports = {LitrosNecessários};