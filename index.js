const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

/*
router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/', router);

ou
*/

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});


/*
app.get('/', (req, res) => {
    return res.json({
        mensagem: 'Api ta on pai'
    })
});*/

//porta padrão ou 3000
app.listen(process.env.port || 3000, () => {
    console.log('Api on')
});