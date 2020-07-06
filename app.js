const express = require('express');
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser')


function resultadoNumeros(arrayDados) {
    
    let arrayA = [];

    const valor1 = -1000;
    const valor2 = 1000;

    for (let i = 0; i < arrayDados.length; i++) {

        if (valor1 <= arrayDados[i]  || arrayDados[i] <=  valor2) {
            if (arrayA.length == 0) {
                arrayA.push(arrayDados[i]);
            } else {
                if (arrayA.indexOf(arrayDados[i]) < 0) {
                    arrayA.push(arrayDados[i]);
                }
            }
        }
    }

    arrayA.sort(function(a, b) {
        return a - b;
    });

    return (arrayA);
}

app.engine('handlebars', handlebars({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('app/public/'))

app.get('/', (req, resp) => {
    return resp.render('index')
});


app.post('/resultados', (req, resp) => {

    let arrayDados = [];
    let data = req.body.valor;

    data.forEach(function (item) {
        
        arrayDados.push(item);
        
    });

    resp.send(resultadoNumeros(arrayDados));
});

app.listen(8000);