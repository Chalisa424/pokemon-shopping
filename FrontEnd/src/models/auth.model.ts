//การลงทะเบียน/ล็อกอินเข้าสู่ระบบ
export interface LoginRequest{
    username:string;
    password:string;
}

export interface LoginResponse{
    token: string;
}

// แบบฟอร์ม register 
export interface RegisterRequest{
    username:string;
    fullname:string;
    phone:string;
    password:string;
    confirmPassword:string;
    role:'user' | 'admin';
}