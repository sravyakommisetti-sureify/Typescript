// import { UserAccess, Status} from '../../app.types' 
export var Status;
(function (Status) {
    Status["Active"] = "Active";
    Status["Blocked"] = "Blocked";
})(Status || (Status = {}));
class Login {
    static authenticate(user) {
        if (user.status === Status.Blocked) {
            return false;
        }
        return true;
    }
}
const user = {
    username: 'john',
    password: 'password',
    status: Status.Active,
};
export const getAuthenticated = (userCard) => {
    console.log('ganeshaa');
    return Login.authenticate(userCard);
};
