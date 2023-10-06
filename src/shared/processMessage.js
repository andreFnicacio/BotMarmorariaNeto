const whatsappModel = require("../shared/whatsappmodels");
const whatsappService = require("../services/whatsappService");

function Process(textUser, number){
    textUser= textUser.toLowerCase();
    var models = [];

    if(textUser.includes("Oi")){
        //SAUDAR
        var model = whatsappModel.MessageText("Olá seja bem vindo. 👋", number);
        models.push(model);
        var modelList = whatsappModel.MessageList(number);
        models.push(modelList);
    }
    else if(textUser.includes("Obrigado")){
        // agradecimiento
        var model = whatsappModel.MessageText("Obrigado você por entrar em contato 😉😎", number);
        models.push(model);       

    }
    else{
        //No entiende
        var model = whatsappModel.MessageText("No entiendo lo que dices", number);
        models.push(model);
    }

    models.forEach(model => {
        whatsappService.SendMessageWhatsApp(model);
    });
    


}

module.exports = {
    Process
};
