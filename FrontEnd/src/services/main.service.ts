import axios from 'axios';
import { useAuthStore } from '../stores/auth';

export const httpClient =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
})//สร้าง axios instance ชื่อ http

//แนบ token อัตโนมัติทุก request ถ้ามี
httpClient.interceptors.request.use((config)=>{
    const auth = (() =>{//ดึง token จาก Pinia store
        try{
            const store = useAuthStore()
            return store
        }catch (error){ 
            console.error('Cannot access Pinia store', error)
            return null
        }
    })()
    const token = auth?.token ?? localStorage.getItem("pokemon-shopping-token") 
    if (token) config.headers.Authorization = `Bearer ${token}`//แนบ token ให้ header อัตโนมัติ
    return config//คืนค่า config กลับไปให้ axios

}) //interceptor แนบ token อัตโนมัติ  (รันก่อน request ทุกครั้ง)
   //intercetor ดักทุก request/response ที่ axios ทำงาน         