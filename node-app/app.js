const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const flaskServerUrl = 'http://localhost:5000/ping'; // Endpoint do Flask

app.post('/pong', async (req, res) => {
    const { count } = req.body;

    if (count <= 0) {
        console.log("Ping-Pong completo!");
        return res.json({ message: "Ping-Pong completo!" });
    }

    console.log(`Recebido Ping ${count} da aplicacao Flask`);
    const nextCount = count - 1;

    // Enviar a próxima mensagem para o Flask
    const response = await axios.post(flaskServerUrl, { count: nextCount });
    res.json({ message: `Pong ${count} enviado para aplicacao Flask`, flask_response: response.data });
});

app.listen(3000, () => {
    console.log('Node.js app rodando em http://localhost:3000');
});
