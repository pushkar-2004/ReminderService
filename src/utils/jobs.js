const cron = require('node-cron');
const EmailService = require('../services/email-services');
const sender = require('../config/emailConfig');

const emailService = new EmailService();

const setupJobs = () => {
    cron.schedule('*/1 * * * *',async ()=>{
        const response = await emailService.fetchPendingEmail();
        console.log(response);
        response.forEach((email) => {
            sender.sendMail({
                to:email.recepientEmail,
                subject:email.subject,
                text:email.content
            },async (err,data)=>{
                if(err){
                    console.log(err);
                }
                else{
                    console.log(data);
                    await emailService.updateTicket(email.id,{status:"SUCCESS"}); 
                }
            });
        });
        
    });
}

module.exports = setupJobs;