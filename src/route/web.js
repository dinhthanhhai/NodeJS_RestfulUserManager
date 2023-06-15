import express from "express";
import homeController from '../controller/homeController';
let router = express.Router();

const initWebroute = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/detail/user/:userId', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:userId', homeController.getEditPage);
    router.post('/', homeController.postUpdateUser)
    return app.use('/', router);

}

export default initWebroute

//method get: khi muon lay thong tin server ve
//method post: khi muon them moi data vao database()-create
//CRUD: create/read/update/delete~POST/GET/PUT/DETETE