import { userService } from './user-service';
const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await userService.getAllUsers();
    }
    catch (err) {
        return next(err);
    }
    res.status(200);
    res.json({ users });
};
const register = async (req, res, next) => {
    const { name, email, password } = req.body;
    let createdUserId;
    try {
        createdUserId = await userService.register(name, email, password);
    }
    catch (err) {
        return next(err);
    }
    res.status(201);
    res.json({ userId: createdUserId });
};
const login = async (req, res, next) => {
    const { email, password } = req.body;
    let token;
    try {
        token = await userService.login(email, password);
    }
    catch (err) {
        return next(err);
    }
    res.cookie('nToken', token, { maxAge: 900000, httpOnly: true });
    res.status(200);
    res.json({ message: 'Log in' });
};
const logout = (req, res) => {
    res.clearCookie('nToken');
    res.status(200);
    res.json({ message: 'Log out' });
};
const authUser = async (req, res, next) => {
    const userRequest = req;
    const userId = userRequest.user._id;
    let loginUser;
    try {
        loginUser = await userService.authUser(userId);
    }
    catch (err) {
        return next(err);
    }
    res.status(200);
    res.json({ data: loginUser });
};
export const userControler = {
    getAllUsers,
    authUser,
    register,
    login,
    logout,
};
