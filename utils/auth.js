const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mysecretssshhhhhhh';
const expiration = '2h';

const authMiddleWare = (req, res, next) => {

    let token = req.body.token || req.query.token || req.headers.authorization;
    console.log('token: ' + token);

    if (req.headers.authorization) {
        token = token.split(' ').pop().trim();
    }

    if (!token) {
        res.status(400).json({message: 'Bearer Token not supplied or Invalid' });
        return;
    }

    try {
        const { data } = jwt.verify(token, secret, {maxAge: expiration});
        req.user = data;
        next()
    } catch (err) {
        console.log('Invalid Token');
        res.status(400).json({message: 'Invalid Token: ' + err.message})
    }

    return req;
}

const signToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName
    };
    return jwt.sign({data: payload}, secret, {expiresIn: expiration});
}

module.exports = {authMiddleWare, signToken};