// index.ts
import { usersArray, User } from './users';
import { UserInfo, UsersInfoArray } from './userinfo';

interface UserWithJobPosition {
    name: string;
    position: string;
    age: number;
    gender: string;
}
function getUsersJobPositions(users: User[], userInfo: UserInfo[]): UserWithJobPosition[] {
    const updatedUsersArray: UserWithJobPosition[] = [];
    users.forEach(user => {
        const userInformation = userInfo.find(info => info.userid === user.userid);
        if (userInformation) {
            updatedUsersArray.push({
                name: user.name,
                position: userInformation.organization.position,
                age: userInformation.age,
                gender: user.gender
            });
        }
    });
    return updatedUsersArray;
}

const usersPositions = getUsersJobPositions(usersArray, UsersInfoArray);
console.log('userPositions', usersPositions);