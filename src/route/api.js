import express from "express";
import APIcontroller from '../controller/APIcontroller'
let router = express.Router();

const initAPIroute = (app) => {
    router.get('/users', APIcontroller.getAllUser);//method get->read data
    router.post('/create-user', APIcontroller.createNewUser);//method post->create data
    router.put('/update-user', APIcontroller.updateUser)//method put->update data
    router.delete('/delete-user/:id', APIcontroller.deleteUser)//method delete->delete data

    return app.use('/api/v1/', router);
}

export default initAPIroute
