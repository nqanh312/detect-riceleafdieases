// const express = require('express'),
//       Disease = require('./dbFiles/disease'),
//       dbOperation = require('./dbFiles/dbOperation'),
//       cors    = require('cors');

// const API_PORT = process.env.PORT || 5000;
// const app = express();

// //defining some variables for mongoDB
// let client;
// let session;
// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cors());

// app.post('/api', async(req, res) => {
//     console.log('called');
//     const result = await dbOperation.getDiseases(req.body.name);
//     res.send(result.recordset);
// });

// app.post('/hello', async(req, res)  => {
//     await dbOperation.createDisease(req.body);
//     const result = await dbOperation.getDiseases(req.body.Name);
//     console.log('called');
//     res.send(result.recordset);
// });

// let Pam = new Disease('Demo11', 'Demo', 'Demo', 'Demo', 'Demo', 'Demo', 'Demo');
// console.log(Pam);

// dbOperation.getDiseases().then(res => {
//     console.log(res.recordset);
// })
// dbOperation.createDisease(Pam);

// app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));