import connection from "../configs/connectDB"

let getHomePage = (req, res) => {
    let data = [];
    //ket noi db
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            //console.log(results); // results contains rows returned by server
            results.map((row) => {
                data.push({
                    id: row.id,
                    email: row.email,
                    address: row.address,
                    firstName: row.firstName,
                    lastName: row.lastName
                })
            });
            //JSON.stringify: chuyen doi object, arr, chuoi,..thanh chuoi JSON
            return res.render('index.ejs', { dataUser: JSON.stringify(data) })
        }
    );

}

module.exports = {
    getHomePage
}