const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
    session: 'whatsbot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
    .then((client) =>
    
        client.onMessage((message) => {
            console.log(JSON.parse(JSON.stringify(message)));            
            client.sendText(message.from, `Olá, como vai ${message.sender.formattedName}. Sua mensagem é ${message.body}`)
                .then((result) => {
                    console.log('Pong retornado: ', result); 
                })
                .catch((erro) => {
                    console.error('ERRO: ', erro);
                });
        }))
        
    .catch((error) =>
        console.log(error));
