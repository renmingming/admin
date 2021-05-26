
export const loginByUsername = (username, password) => {
 return new Promise((resolve, reject) => {
   const userInfo = {
     name: username,
     id: 1,
     roles: ['*'],
     token: 'renmingming'
   };
   resolve(userInfo);
 })
}