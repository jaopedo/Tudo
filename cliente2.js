
const cliente = {
    nome: "Robson",
    idade: 29,
    cpf: "09086678086",
    email: "robinho@polo.com.br",
  };

  const cliente2 = {
    nome: "Nãosei",
    idade: 50,
    cpf: "12345678998",
    email: "vaisaber@polo.com.br"
  }

  const cliente3 = {
    nome: "Eu",
    idade: 16,
    cpf: "056866780986",
    email: "joao@polo.com.br",
  };

  const cliente4 = {
    nome: "Cliente",
    idade: 50,
    cpf: "45645748998",
    email: "legal@polo.com.br"
  }
 
  const chaves = ["nome", "idade", "cpf", "email"];
  chaves.forEach((chave) => {
    console.log(`O campo ${chave} tem valor ${cliente[chave]}`);
  });

  const tabela = ["nome", "idade", "cpf", "email"];
  tabela.forEach((tabela) => {
    console.log(`O campo ${tabela} tem valor ${cliente2[tabela]}`);
  });

  const chaves1 = ["nome", "idade", "cpf", "email"];
  chaves.forEach((chave1) => {
    console.log(`O campo ${chave1} tem valor ${cliente3[chave1]}`);
  });

  const tabela1 = ["nome", "idade", "cpf", "email"];
  tabela.forEach((tabela1) => {
    console.log(`O campo ${tabela1} tem valor ${cliente4[tabela1]}`);
  });