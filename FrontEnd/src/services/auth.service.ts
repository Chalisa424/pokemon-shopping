import {httpClient} from "../services/main.service";//นำเข้า httpinstace
import type { LoginRequest, LoginResponse, RegisterRequest } from "../models/auth.model";
import type { User } from "../models/user";

export const authService = {
    async login(payload: LoginRequest): Promise<LoginResponse> {
        const {data} = await httpClient.post<LoginResponse>('/api/auth/login', payload)
        return data
    },//method สำหรับ login

    async register(payload: RegisterRequest): Promise<{message?: string}> {
        const {data} = await httpClient.post<{message?: string}>('/api/auth/register', payload)
        return data
    },//method สำหรับ register

    async me(): Promise<User> {// // ถ้ามี endpoint นี้ใน back ให้ใช้ดึงข้อมูลผู้ใช้หลังจากมี token
        const {data} = await httpClient.get<User>('/api/auth/me')
        return data
    }//me()มีไว้เพื่อดึงข้อมูลผู้ใช้ปัจจุบัน

}//รวมฟังก์ชันเกี่ยวกับ Auth ทั้งหมด