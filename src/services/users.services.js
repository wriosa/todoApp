const Users = require('../models/users.model');

class UserServices {
    static async getAll(){
        try {
            const result = await Users.findAll();
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async getById(id){
        try {
            const result = await Users.findByPk(id);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices;