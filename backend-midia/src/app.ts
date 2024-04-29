const express = require('express')
const app = express();

app.get('/', (req: any, res: any) => res.send('Hello Worldaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'))

// Executa o servidor na porta 3000
app.listen(3000, () => console.log('Running on port 3000'))