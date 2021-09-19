const wppconnect = require('@wppconnect-team/wppconnect');

wppconnect.create({
    session: 'whatsbot',
    autoClose: false,
    puppeteerOptions: { args: ['--no-sandbox'] }
})
    .then((client) =>

        client.onMessage((message) => {
            console.log(JSON.parse(JSON.stringify(message)));
            // client.
            // client.sendText(message.from, message.sender.formattedName === 'Vivi Dev' ? 'Olá infiltrada!, pare de tentar me quebrar!' : `Olá, como vai ${message.sender.formattedName}.`)
            //     .then((result) => {
            //         console.log('Pong retornado: ', result);
            //     })
            //     .catch((erro) => {
            //         console.error('ERRO: ', erro);
            //     });
        }))

    .catch((error) =>
        console.log(error));
