export type roles = "student" | "admin";

export interface IUserInfo {
    id: string;
    role: roles;
    avatar: string;
    name: string;
}
