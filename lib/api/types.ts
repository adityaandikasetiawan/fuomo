export type SignInRequest = { email: string; password: string };
export type SignInResponse = { token: string; userId: string };

export type SignUpRequest = {
  username: string;
  email: string;
  gender?: string;
  password: string;
};
export type SignUpResponse = { userId: string };

export type Creator = { id: string; name: string; title?: string; description?: string };