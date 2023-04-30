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
    const userId = req.user.userId;
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
    logout
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb250cm9sZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi91c2VyL3VzZXItY29udHJvbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUk3QyxNQUFNLFdBQVcsR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDMUUsSUFBSSxLQUFpQixDQUFDO0lBQ3RCLElBQUk7UUFDQSxLQUFLLEdBQUcsTUFBTSxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUE7S0FDMUM7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ25CO0lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFBO0FBQ3ZCLENBQUMsQ0FBQTtBQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUN2RSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBRTFDLElBQUksYUFBYSxDQUFDO0lBQ2xCLElBQUk7UUFDQSxhQUFhLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDcEU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0tBQ25CO0lBRUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNmLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQUE7QUFFRCxNQUFNLEtBQUssR0FBRyxLQUFLLEVBQUUsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDcEUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFBO0lBRXBDLElBQUksS0FBYSxDQUFBO0lBQ2pCLElBQUk7UUFDQSxLQUFLLEdBQUcsTUFBTSxXQUFXLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQTtLQUNuRDtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7S0FDbkI7SUFFRCxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ2hFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUE7QUFDbkMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUU7SUFDM0MsR0FBRyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ2YsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUVELE1BQU0sUUFBUSxHQUFHLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQUUsRUFBRTtJQUM5RCxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLFNBQVMsQ0FBQztJQUNkLElBQUk7UUFDQSxTQUFTLEdBQUcsTUFBTSxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0tBQ2pEO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtLQUNuQjtJQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDZixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQ3pCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLEtBQUs7SUFDTCxNQUFNO0NBQ1QsQ0FBQyJ9