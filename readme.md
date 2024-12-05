# Comunicação Ping-Pong entre Flask e Node.js

Este projeto demonstra a comunicação entre duas aplicações (Flask e Node.js) utilizando APIs REST. As aplicações trocam mensagens de forma alternada ("ping" e "pong") até que uma contagem predefinida seja atingida. A aplicação Flask inicia a interação e alterna mensagens com a aplicação Node.js até o término do ciclo.

---

## 🗂 Estrutura do Projeto

### **Flask**
- **Local**: `flask-pingpong/`
- **Função**: Servidor que inicia a troca de mensagens enviando "Ping" para o Node.js.

### **Node.js**
- **Local**: `nodejs-pingpong/`
- **Função**: Servidor que responde com "Pong" e envia o próximo "Ping" de volta ao Flask.

---

## 🚀 Instalação

### Pré-requisitos:
- Python 3.8 ou superior
- Node.js 16 ou superior
- Gerenciadores de pacotes (`pip` para Python e `npm` para Node.js)

### **1. Configurar o Flask**
1. Navegue até o diretório `flask-pingpong`:
    ```bash
    cd python-app
    ```

2. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

3. Inicie o servidor Flask:
    ```bash
    python app.py
    ```


### **2. Configurar o Node.js**
1. Navegue até o diretório nodejs-pingpong:
    ```bash
    cd nodejs-pingpong
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Inicie o servidor Node.js:

    ```bash
    npm start
    ```

O servidor estará disponível em http://localhost:3000.


## **🛠 Como Usar**
1. Faça uma POST request para o endpoint Flask /ping:

```http
POST http://localhost:5000/ping
Content-Type: application/json
Body:
{
    "count": 5
}
```
2. O servidor Flask e o Node.js trocarão mensagens alternadamente. A troca será exibida nos consoles de ambas as aplicações.

## **🔄 Fluxo de Comunicação**

1. O Flask recebe o pedido inicial de /ping e envia "Ping" para o Node.js no endpoint /pong.
2. O Node.js responde com "Pong" e envia o próximo "Ping" para o Flask.
3. Esse ciclo continua até que a contagem (count) atinja zero.