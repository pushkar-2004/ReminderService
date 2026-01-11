const sender = require("../config/emailConfig");
const TicketRepository = require("../repository/ticket-repository");

class EmailService {
  constructor() {
    this.repo = new TicketRepository();
  }

  async sendBasicEmail(mailFrom, mailTo, mailSubject, mailBody) {
    try {
      sender.sendMail({
        from: mailFrom,
        to: mailTo,
        subject: mailSubject,
        text: mailBody,
      });
    } catch (error) {
      throw error;
    }
  }

  async fetchPendingEmail() {
    try {
      const result = await this.repo.get({ status: "PENDING" });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async updateTicket(ticketId, data) {
    try {
      const result = await this.repo.update(ticketId, data);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async createNotification(data) {
    try {
      const result = await repo.create(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmailService;
