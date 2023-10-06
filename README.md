# Bot Marmoraria

Bem-vindo ao projeto Bot Marmoraria! Este é um chatbot simples para uma marmoraria que pode lidar com perguntas de clientes e fornecer respostas. Neste README, vamos guiá-lo na configuração do ambiente do projeto e explicar como trabalhar com o script de conversação.

## Primeiros Passos

### Instalando o Node.js

Antes de executar este projeto, você precisará instalar o Node.js em seu sistema. Aqui estão as instruções para Windows e Linux:

#### Windows:

1. Visite o site do [Node.js](https://nodejs.org/).
2. Faça o download da versão LTS (Long Term Support) mais recente para Windows.
3. Execute o instalador e siga as instruções de instalação.

#### Linux:

Na maioria das distribuições Linux, você pode instalar o Node.js usando um gerenciador de pacotes. Veja como fazer isso com o `apt` em sistemas baseados em Debian/Ubuntu:

```bash
sudo apt update
sudo apt install nodejs npm
```

### Instalando o Express

O Express é um framework de aplicação web Node.js que usaremos para nosso bot. Para instalá-lo, abra seu terminal/prompt de comando e execute:

```bash
npm install express
```

### Configurando o Projeto

1. Clone este repositório para sua máquina local:

```bash
git clone <repository_url>
cd Bot-Marmoraria
```

2. Uma vez dentro da pasta do projeto, instale as bibliotecas e componentes necessários executando:

```bash
npm install
```

3. Seu projeto está pronto para ser usado!

### Trabalhando com o Script de Conversação

O script de conversação está localizado no diretório `src/shared/processMessage.js` dentro da pasta do projeto. Este script lida com o recebimento de mensagens e formula respostas. Para personalizar o comportamento do bot, você pode fazer alterações neste script.

Aqui está uma visão geral básica de como o script funciona:

```javascript
// src/shared/processMessage.js

function processMessage(message) {
   if(textUser.includes("Oi")){
        //SAUDAR
        var model = whatsappModel.MessageText("HOlá, tudo bem ?!. 👋", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("Obrigado")){
        // agradecimiento
        var model = whatsappModel.MessageText("Obrigado voce por entrar em contato! 😉😎", number);
        models.push(model);       

    }
}

module.exports = processMessage;
```

Basta modificar as condições `if-else` e as respostas para atender à lógica de conversa do seu bot.

## Executando o Bot

Para executar o bot, use o seguinte comando em seu diretório de projeto:
npm start

Não se preocupe!! O bot so sera ativado no servidor, foque em construir o roteiro de conversa e boa sorte! :)
