Documentação do Projeto - BotFather FURIA
1. Introdução
O projeto BotFather FURIA é um bot desenvolvido utilizando a API do Telegram com a biblioteca `node-telegram-bot-api`, com o objetivo de fornecer uma interface interativa para fãs da organização de eSports FURIA. O bot responde a comandos específicos e fornece informações sobre a equipe, partidas, lineup atual e produtos oficiais.
2. Objetivo
Proporcionar aos usuários uma maneira rápida e prática de acessar informações relevantes sobre a FURIA através de uma interface de chat no Telegram.
3. Tecnologias Utilizadas
- Node.js
- node-telegram-bot-api
- Telegram Bot API
4. Funcionalidades
/start - Envia mensagem de boas-vindas com botões interativos
/team - Fornece informações sobre o time
/lastmatch - Informa o resultado da última partida
/merch - Redireciona para a loja oficial da FURIA
/news - Exibe últimas notícias
/lineup - Mostra os jogadores atuais do time
5. Como Executar o Projeto
1. Instale as dependências:
   npm install node-telegram-bot-api
2. Crie um arquivo com o código do bot.
3. Substitua o token pelo fornecido pelo BotFather do Telegram.
4. Execute com:
   node nome_do_arquivo.js
6. Explicação do Código
O bot é inicializado com polling ativado. Cada comando como /start, /team, /lastmatch etc. é tratado por um listener com `bot.onText`. O comando /start apresenta um menu de botões interativos com opções que disparam uma `callback_query`. Essa query é tratada separadamente para envio das mensagens relacionadas.
7. Possíveis Melhorias
- Integração com API para partidas em tempo real
- Respostas dinâmicas baseadas em banco de dados
- Adição de comandos personalizados por usuário
