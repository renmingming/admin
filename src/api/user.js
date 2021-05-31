// import request from "@/utils/request";
export function login(data) {
  return new Promise((resolve) => {
    console.log(data);
    const data = {
      token: "renming",
      code: 20000,
    };
    resolve(data);
  });
}

export function getInfo(token) {
  return new Promise((resolve) => {
    console.log(token);
    const data = {
      id: 2,
      name: "Admin",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      roles: ["admin"],
      code: 20000,
    };
    resolve(data);
  });
}

export function logout() {
  return new Promise(() => {
    resolve({
      code: 20000,
    });
  });
}
