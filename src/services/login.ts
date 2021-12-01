import { useState } from "react";
import { request } from "./request";

export async function getToken(param: any) {
  return request.post("api/account/login", param);
}

export async function getUserOwnFunc() {
  return request.get("api/Menu/GetUserOwnFunc");
}
export async function getUserOwnMenu() {
  return request.get("api/Menu/GetUserOwnMenu");
}
