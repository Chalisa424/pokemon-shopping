//ข้อมูลของผู้ใช้งานในระบบ
export interface User{
    id: string;
    username: string;
   fullname:string;
    phone:string;
    password:string;
    confirmPassword:string;
    role:'user' | 'admin';
}