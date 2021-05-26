export function loginByUsername (username, password) {
  return new Promise((resolve) => {
    console.log(password);
    const data = {
      token: 'renming'
    }
    resolve(data);
  });
};

export function getUserInfo() {
  return new Promise((resolve) => {
    const data = {
      id: 2,
      name: 'Admin',
      roles: ['admin', 'edit']
    }
    resolve(data);
  });
}