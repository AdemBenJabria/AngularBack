const { CheckToken } = require("../utils/CheckToken.js");

module.exports = app => {
    const user = require("../controllers/user.js");

    app.post("/api/auth/register", user.register);

    app.get("/api/auth/me",CheckToken, user.getProfile);

    app.post("/api/auth/login", user.login);

    app.get("/api/auth/logout", user.logout);

}
