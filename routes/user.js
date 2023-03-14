module.exports = app => {
    const user = require("../controllers/user.js");

    app.post("/api/user/register", user.register);

    app.get("/api/user/me", user.getProfile);

    app.post("/api/user/login", user.login);

    app.get("/api/user/logout", user.logout);

}
