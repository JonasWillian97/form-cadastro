import React, { useState } from "react";
const DadosPessoais = () => {
  //USESTATE
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [endereco, setEndereco] = useState("");
  const [vetor, setVetor] = useState([]);

  //FUNÇÃO P/ ENVIAR DADOS
  const Cadastrar = (e) => {
    e.preventDefault();
    let obj = {
      name: name,
      email: email,
      password: password,
      endereco: endereco,
    };
    setVetor([...vetor, obj]);
    setName("");
    setEmail("");
    setPassword("");
    setEndereco("");
  };
  return (
    <div>
      <>
        <h1>Formulário de Cadastro</h1>
        <input
          type="text"
          placeholder="Digite seu nome"
          className="form-control name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite seu email"
          className="form-control email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          className="form-control password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite seu endereço"
          className="form-control address"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
        />
      </>
    </div>
  );
};
export default DadosPessoais;
