const express = require('express')
const bodyParser = require('body-parser')
const {PORT} = require('./config/serverConfig');
const {EMAIL,EMAI_PASSWORD} = require('./config/serverConfig');
// const {sendBasicEmail} = require('./services/email-services');
const jobs = require('./utils/jobs');
const {create} = require('./controller/ticket-controller');

function setUpAndStartServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extends:true}));

    app.post('/api/v1/tickets',create);

    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'qwertypushkar123@gmail.com',
        //     'This is for testing',
        //     'Hello from notification service demo '
        // );
    })

}

setUpAndStartServer();