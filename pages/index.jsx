import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <h1 className="titulo">Zoológico do Joaquim</h1>
      <main className="loginBox">
        <form action="">
          <input type="password" name="password" id="pass" name="password" required placeholder="Senha" className="caixaSenha" />
          <button className="button">ENTRAR</button>
        </form>
      </main>
      <img className="animaisEntrada" src="OBJECTS.png"></img>
    </React.Fragment>
  )
}
