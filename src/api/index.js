import axios from "axios";

const qs = require("querystring");

const provider = axios.create({
  baseURL: "http://test.kluatr.ru/api/",
  timeout: 5000,
  withCredentials: true
});

export function logIn(email, password) {
  return provider.post("user/login", qs.stringify({ email, password }));
}

export function logOut() {
  return provider.get("user/logout");
}

export function getProfile() {
  return provider.get("user/profile");
}

export function getOrders() {
  return provider.get("orders");
}

export function updateUser(name) {
  return provider.post("user/profile/edit", qs.stringify({ name }));
}
