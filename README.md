# Taskly Health Expo

O Taskly Health é um aplicativo mobile desenvolvido em React Native com Expo Go e JavaScript. O objetivo do projeto é ajudar o usuário a organizar sua rotina de saúde de forma simples, com telas para login, dashboard, hidratação, exercícios, alimentação, fichas alimentares, rotina e acompanhamento de progresso.

## Objetivo do projeto

O projeto foi criado para funcionar como um organizador pessoal de hábitos saudáveis. A aplicação permite que o usuário acompanhe tarefas do dia, registre consumo de água, visualize exercícios, organize refeições e acompanhe sua evolução. A proposta é manter uma navegação simples, visual limpa e código dividido em partes menores para facilitar manutenção e entendimento.

## Tecnologias utilizadas

O projeto utiliza React Native para criação das telas mobile.

O Expo Go é utilizado para executar o aplicativo no celular sem precisar gerar APK durante o desenvolvimento.

O JavaScript foi utilizado como linguagem principal do projeto.

O AsyncStorage é utilizado para salvar informações localmente no dispositivo.

O Expo Router ou navegação interna organiza a troca entre as telas do aplicativo.

O StyleSheet do React Native organiza os estilos visuais da aplicação.

## Como executar o projeto

Primeiro instale as dependências do projeto com o comando:

npm install

Depois execute o aplicativo com o comando:

npx expo start -c

Para abrir no celular, escaneie o QR Code usando o aplicativo Expo Go.

Para abrir no navegador, utilize:

npx expo start --web

## Tela de login

A tela de login é responsável pela entrada inicial do usuário no aplicativo. Ela possui campos para e-mail e senha, mantendo uma apresentação mais profissional e sem textos desnecessários na interface. O objetivo dessa tela é permitir acesso ao app de forma direta, limpa e organizada.

## Dashboard

O dashboard é a tela principal após o login. Ele apresenta uma visão geral da rotina do usuário, mostrando os principais módulos de saúde em um só lugar. Essa tela serve como ponto central de navegação para hidratação, alimentação, exercícios, rotina e progresso.

## Módulo de hidratação

O módulo de hidratação permite acompanhar o consumo diário de água. Ele ajuda o usuário a registrar quantidades consumidas e visualizar o andamento da meta diária. Esse módulo foi pensado para incentivar constância durante o dia.

## Módulo de exercícios

O módulo de exercícios apresenta atividades físicas organizadas para consulta e execução. Ele pode conter informações como nome do exercício, grupo muscular, séries, repetições e tempo de execução. A ideia é facilitar a criação de uma rotina prática de treino.

## Módulo de alimentação

O módulo de alimentação permite organizar refeições e visualizar opções alimentares. Ele ajuda o usuário a planejar melhor café da manhã, almoço, lanche e jantar. A proposta é apoiar uma rotina alimentar mais equilibrada sem tornar o aplicativo complexo.

## Fichas alimentares

As fichas alimentares servem para montar combinações de refeições de acordo com o objetivo do usuário. Essa parte do projeto ajuda a organizar sugestões e escolhas alimentares de forma mais clara, mantendo a lógica principal do Taskly Health.

## Rotina personalizada

A rotina personalizada permite que o usuário organize seus hábitos diários. Ela reúne informações de exercícios, hidratação, alimentação e progresso em uma estrutura simples. Essa tela ajuda o usuário a acompanhar pequenas tarefas de saúde durante o dia.

## Progresso

A área de progresso mostra o acompanhamento das atividades feitas pelo usuário. Ela serve para visualizar evolução e manter registro dos hábitos concluídos. O objetivo é transformar os dados do uso diário em uma percepção clara de avanço.

## Organização do código

O código foi organizado em arquivos menores para facilitar leitura e manutenção. As telas ficam separadas por responsabilidade, os componentes reutilizáveis ficam isolados, os dados ficam em arquivos próprios e os serviços cuidam das funções de armazenamento e controle. Essa separação evita arquivos muito grandes e deixa o projeto mais fácil de explicar.

## Comentários no código

Os comentários foram mantidos de forma profissional para explicar o papel de cada parte importante do projeto. A intenção é ajudar na apresentação acadêmica e facilitar o entendimento de quem for ler o código posteriormente.

## Observação sobre uso de IA

Foi utilizado IA para poder facilitar o adiantamento do projeto.
