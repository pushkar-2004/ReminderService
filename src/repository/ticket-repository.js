const { Op } = require('sequelize');
const {NotificationTicket} = require('../models/index');

class TicketRepository {
    async getAll(){
        try {
            const result = await NotificationTicket.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    async create(data){
        try {
            const ticket = await NotificationTicket.create(data);
            return ticket;
        } catch (error) {
            throw error;
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where:{
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]:new Date()
                    }
                }
            });
            return tickets;
        } catch (error) {
            throw error;
        }
    }

    async update(tickedId,data){
        try {
            const tickets = await NotificationTicket.findByPk(tickedId);
            if(data.status){
                tickets.status=data.status;
            }
            await tickets.save();
            return tickets;
        } catch (error) {
            throw error;
        }
    }

}

module.exports = TicketRepository;