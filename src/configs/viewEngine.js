import express from "express";

const configViewEngine = (app) => {
    app.use(express.static('./src/public'));//cho chep truy cap vao thu muc public
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

export default configViewEngine;

