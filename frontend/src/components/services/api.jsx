const API = "https://anythingai-task-backend.onrender.com/api/v1";

export const request = (url, method, body) => {
    const token = localStorage.getItem("token");

    return fetch(API + url, {
        method,
        headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : ""
        },
        body: body ? JSON.stringify(body) : null
    }).then(res => res.json());
};
