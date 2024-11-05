class Carro{
    Marca
    Modelo
    Categoria
    Ano
    Quilometragem
    Valor
    constructor(marca, modelo, categoria, ano, quilometragem, valor){
        this.Marca = marca
        this.Modelo = modelo
        this.Categoria = categoria
        this.Ano = ano
        this.Quilometragem = quilometragem
        this.Valor = valor
    }
};

let carro = new Carro()

function Get() {

    return fetch('https://apigenerator.dronahq.com/api/cCXKQCDm/Carro')
  
      .then((response) => response.json())
  
      .then((data) => console.log(data));
  
  }

  async function postData(url = '', data = {}) {

    const response = await fetch(url, {
  
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
  
      mode: 'cors',
  
      cache: 'no-cache',
  
      credentials: 'same-origin',
  
      headers: {
  
        'Content-Type': 'application/json'
  
      },
  
      redirect: 'follow',
  
      referrerPolicy: 'no-referrer',
  
      body: JSON.stringify(data)
  
    });
  
    return response.json();
  
  }
  
  
  postData('https://apigenerator.dronahq.com/api/cCXKQCDm/Carro', Carro /* Se POST ou PUT: Usar Objeto. Se GET by id/GET ou DELETE: Usar Class. */)
  
    .then((data) => {
  
      console.log(data);  
  
  });