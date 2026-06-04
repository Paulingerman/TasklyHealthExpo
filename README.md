# Taskly Health Expo

O Taskly Health Expo é um aplicativo desenvolvido em React Native com Expo Go e JavaScript. O projeto foi criado para ajudar o usuário a organizar hábitos de saúde em uma rotina simples, com acesso a hidratação, exercícios, alimentação, fichas alimentares, rotina personalizada e progresso.

O aplicativo foi migrado para Expo para facilitar a execução no celular usando o Expo Go. Com isso, o projeto pode ser testado de forma prática durante o desenvolvimento, sem precisar gerar APK. A linguagem utilizada no projeto é JavaScript.

## Como o projeto funciona

Ao abrir o aplicativo, o usuário acessa a tela de login. Essa tela serve como entrada principal do sistema e foi organizada para apresentar apenas os campos necessários, mantendo uma aparência mais profissional e sem mensagens desnecessárias na interface.

Depois do login, o usuário é levado para o dashboard. O dashboard funciona como a tela central do aplicativo, reunindo os principais caminhos do sistema. A partir dele, o usuário consegue acessar hidratação, alimentação, exercícios, rotina e progresso.

O módulo de hidratação permite acompanhar o consumo diário de água. Ele ajuda o usuário a registrar sua ingestão e visualizar melhor sua meta durante o dia.

O módulo de exercícios reúne atividades físicas para consulta e organização da rotina de treino. Ele pode apresentar informações como nome do exercício, grupo muscular, séries, repetições e tempo de execução.

O módulo de alimentação permite organizar refeições do dia. Ele ajuda o usuário a estruturar café da manhã, almoço, lanche e jantar de forma simples.

As fichas alimentares servem para organizar combinações de refeições. Elas ajudam o usuário a montar sugestões de alimentação de acordo com sua rotina e objetivo.

A rotina personalizada permite reunir hábitos diários em um só lugar. Ela funciona como uma organização das tarefas de saúde que o usuário deseja acompanhar.

A área de progresso permite observar a evolução do usuário. Ela mostra o andamento das atividades e ajuda a manter noção de constância dentro do aplicativo.

## Explicação dos arquivos principais

O arquivo package.json guarda as informações principais do projeto. Nele ficam o nome do aplicativo, os scripts de execução e as dependências necessárias para o Expo, React Native e demais bibliotecas.

O arquivo App.js é o ponto inicial da aplicação. Ele inicia o funcionamento do app e organiza a chamada das telas principais.

O arquivo app.json guarda configurações do Expo, como nome do projeto, versão, plataformas permitidas e informações usadas pelo Expo Go.

O arquivo babel.config.js configura o Babel, que ajuda o projeto a interpretar corretamente o código JavaScript usado pelo React Native.

O arquivo README.md explica o funcionamento do projeto, as tecnologias usadas, como rodar o aplicativo e qual é o objetivo de cada parte.

A pasta src guarda o código principal do aplicativo. Ela concentra as telas, componentes, dados, serviços e estilos usados no projeto.

A pasta telas guarda as telas acessadas pelo usuário. Cada tela representa uma parte visual do aplicativo, como login, dashboard, hidratação, exercícios, alimentação, rotina e progresso.

A pasta componentes guarda partes reutilizáveis da interface. Esses componentes evitam repetição de código e ajudam a manter o projeto mais organizado.

A pasta dados guarda informações usadas pelo aplicativo, como listas de exercícios, alimentos, fichas ou valores iniciais.

A pasta servicos guarda funções que cuidam da lógica de armazenamento, leitura e controle de dados. Essa separação ajuda a evitar que as telas fiquem grandes demais.

A pasta estilos guarda arquivos de estilo usados pelas telas e componentes. O objetivo é manter a aparência do aplicativo separada da lógica principal.

A pasta assets guarda imagens, ícones e arquivos visuais usados pelo aplicativo.

O arquivo .gitignore informa ao Git quais arquivos e pastas não devem ser enviados para o GitHub. Isso evita subir node_modules, cache do Expo e arquivos temporários.

## Tecnologias utilizadas

React Native foi usado para criar as telas do aplicativo.

Expo Go foi usado para executar o projeto no celular durante o desenvolvimento.

JavaScript foi usado como linguagem principal do projeto.

AsyncStorage foi usado para salvar dados localmente no dispositivo.

Git e GitHub foram usados para versionamento e publicação do código.

## Como rodar o projeto

Primeiro, instale as dependências com o comando abaixo.

npm install

Depois, inicie o projeto com o comando abaixo.

npx expo start -c

Para abrir no celular, escaneie o QR Code usando o aplicativo Expo Go.

Para abrir no navegador, use o comando abaixo.

npx expo start --web

## Observação sobre desenvolvimento

O código foi organizado em arquivos menores para facilitar leitura, manutenção e apresentação acadêmica. A refatoração buscou diminuir repetições, separar responsabilidades e deixar o projeto mais simples de entender.

Foi utilizado IA para poder facilitar o adiantamento do projeto.
