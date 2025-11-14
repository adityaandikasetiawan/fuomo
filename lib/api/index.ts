import { request } from "./http";
import { AUTH_SIGNIN, AUTH_SIGNUP, CREATORS } from "./endpoints";
import { SignInRequest, SignInResponse, SignUpRequest, SignUpResponse, Creator } from "./types";

export function signIn(body: SignInRequest) {
  return request<SignInResponse>(AUTH_SIGNIN, { method: "POST", body: JSON.stringify(body) });
}

export function signUp(body: SignUpRequest) {
  return request<SignUpResponse>(AUTH_SIGNUP, { method: "POST", body: JSON.stringify(body) });
}

export function listCreators() {
  return request<Creator[]>(CREATORS, { method: "GET" });
}