import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': 'bb27a9da-99f7-4d10-86a4-04b5510f924c'
    }
})

export const API = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {
                return res.data
            })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    unFollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
    authMe() {
        return instance.get(`auth/me`)


    }
}

// export const followAPI = {
//     follow(userId:number){
//         return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
//     }
// }
// export const unFollowAPI = {
//     unFollow(userId:number){
//         return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
//     }
// }