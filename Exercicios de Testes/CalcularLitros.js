function LitrosNecessários(distânciaPercurso, tipoCombustível){
    if(tipoCombustível === "gasolina"){
        resultado = distânciaPercurso / 16
        return resultado
    }
    else if(tipoCombustível === "etanol"){
        resultado = distânciaPercurso / 11
        return resultado

    }else{return "Tipo de combustível inválido"}
};

module.exports = {LitrosNecessários};