

import './App.css'

function App() {
  

  return (
    <>
    <body>
        <div class="container">
            <div id="menu">
                <ul>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
        </div> <div class="container" id="introducao">
            <div class="titulo" id="headerCta">
                <h1>
                    Olá, eu sou Vitória<br/>
                    Desenvolvedora Tech Lead
                </h1>
                <p class="gray ptamanho">
                    Formada em Ciência da Computação em 2024, experiência na área de tecnologia como estagiaria, trabalhando com WordPress, PyCharm, javascript, json, react, typescript e php. Atualmente me especializando em Tech Lead na DNC, com projetos como portfólio, landing pages, currículo vitae, blog responsivo, lista de tarefas e site.
                </p>
                <a id="buttonCta" href="">Download resumo</a>
            </div>
            <div id="titulo"></div>
        </div>
        <div  id="blog">
            <div class="titulo">
            Blog</div>
            <div class="container">
                <div class="blog">
                    <h3>useState</h3>
                    <div class="datae">
                        <p>30 agosto 2025</p>
                        <p>React</p>
                    </div>
                    
                    <p class="ptamanho">O useState é um Hook do React que permite adicionar e controlar estado dentro de componentes funcionais.
                    👉 Antes dos Hooks (introduzidos no React 16.8), só componentes de classe podiam ter estado. Com o useState, qualquer componente funcional pode armazenar e atualizar valores que mudam ao longo da execução.</p>
                </div>
                <div class="blog">
                    <h3>useEffect</h3>
                    <div class="datae">
                        <p>6 setembro 2025</p>
                        <p>React</p>
                    </div>
                    
                    <p class="ptamanho">O useEffect é um Hook do React que permite executar efeitos colaterais em componentes funcionais.

                    👉 Efeito colateral (side effect) é qualquer operação que acontece “fora” do fluxo normal da renderização do componente, como:

                    <br />Buscar dados de uma API <br />
                    Manipular diretamente o DOM <br />
                    Configurar ou limpar timers (setInterval, setTimeout) <br />
                    Adicionar/remover event listeners <br />
                    Sintaxe básica</p>

                </div>
            </div>
        </div>
        <div  id="projetos">
            <div class="titulo">
                Projetos
            </div>
            
            <div class="container">
                <div class="img">
                    <img src="../src/assets/3.png" alt="" />
                </div>
                <div>
                   <h2>RID211491_desafio03</h2>
                    <p class="ptamanho">Esse é um projeto de um gerenciador de tarefas da Escola DNC. Link: https://gerenciador-tarefas-dnc.netlify.app/ 📋 Sobre o Projeto Este projeto é uma aplicação web simples para gerenciar tarefas. Ele permite que os usuários adicionem, listem e concluam tarefas com etiquetas e datas automaticamente registradas. A interface é responsiva e moderna, utilizando as fontes Rubik e Inter para uma melhor experiência visual.</p> 
                </div>
                
            </div>
           <img src="../src/assets/vetor.svg" alt="" class="linha"/>
            <div class="container">
                <div class="img">
                    <img src="../src/assets/2.png" alt="" />
                </div>
                <div>
                    <h2>RID211491_desafio02</h2>
                    <p class="ptamanho">Bem-vindo ao The Dev News, um site estático que simula um blog sobre desenvolvimento, tecnologia e produtividade. Este projeto apresenta um design moderno e responsivo, utilizando apenas HTML e CSS.</p>
                </div>
                
            </div>
            <img src="../src/assets/vetor.svg" alt="" class="linha"/>
            <div class="container">
                <div class="img">
                    <img src="../src/assets/1.png" alt="" />
                </div>
                <div>
                    <h2>RID211491_desafio01</h2>
                    <p class="ptamanho">Este projeto é um website estático que apresenta informações sobre a empresa ArcDNC, especializada em arquitetura residencial e comercial. O site exibe informações sobre os serviços da empresa, seus números de conquistas, uma breve história e um formulário de contato para visitantes interessados em seus serviços.</p>
                </div>
                
            </div>
            <img src="../src/assets/vetor.svg" alt="" class="linha"/>
        </div>
        
        <div  id="contato">
            
           
            <div id="site">
                <a href="http://www.facebook.com/vitoria.pinheiro.90"><img src="../fb.svg" alt="" class="rede" /></a>
                <a href="http://www.instagram.com/vitoria6302/"><img src="../insta.svg" alt="" class="rede"/></a>
                <a href="http://x.com/vitoriadagmar"><img src="../Group.svg" alt="" class="rede"/></a>
                <a href="http://linkedin.com/in/vitória-pinheiro-3792391b7/"><img src="../Linkedin.svg" alt="" class="rede"/></a>
            </div>

            <p id="copyright">Copyright ©2030 All rights reserved </p>
        </div>

    </body></>
  )
}

export default App
