const user = require('../models/user')
module.exports = function authRole(Role) {
    return (req, res, next) => {
        const user = req.user;

        if (user.role !== Role) {
            res.status(401).json({ msg: 'access rejected' })
        }
        else {
            next()
        }
    }
}