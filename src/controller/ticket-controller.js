const EmailService = require('../services/email-services');

const emailService = new EmailService();

const create = async (req,res) => {
    try {
        const response = await emailService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            error:{},
            message:"Notification created successfully",
        });
    } catch (error) {
        return res.status(500).json({
            success:false,
            data:{},
            error:error,
            message:"Notification creation failed",
        });
    }
}

module.exports = {
    create,
}