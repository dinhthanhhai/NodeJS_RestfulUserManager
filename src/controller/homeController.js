import pool from "../configs/connectDB"

let getHomePage = async (req, res) => {

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows })
}

let getDetailPage = async (req, res) => {
    let id = req.params.userId;
    let user = await pool.execute('SELECT * from users where id = ?', [id])
    return res.send(JSON.stringify(user[0]));
}
let createNewUser = async (req, res) => {
    console.log('>>>checkreq: ', req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES (?, ?, ?, ?)',
        [firstName, lastName, email, address]);
    return res.redirect('/');//ve trang home khi submit
}

let deleteUser = async (req, res) => {
    let userId = req.body.userId;
    await pool.execute('DELETE FROM users WHERE id = ?', [userId]);
    return res.redirect('/');
}

let getEditPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    //cau lenh tren tra ve mang -> lenh duoi [0]
    return res.render('update.ejs', { dataUser: user[0] }); //x <- y 
}

let postUpdateUser = async (req, res) => {
    let { firstName, lastName, email, address, id } = req.body;
    await pool.execute('UPDATE users SET firstName=?, lastName=?, email=?, address=? WHERE id=?',
        [firstName, lastName, email, address, id]);
    return res.redirect('/')
}

module.exports = {
    getHomePage, getDetailPage, createNewUser, deleteUser, getEditPage, postUpdateUser
}