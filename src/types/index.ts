export interface LoginData {
  email: string;
  password: string;
}

export interface ValidationErrors {
  email?: string;
  password?: string;
  general?: string;
  [key: string]: string | undefined;
}
