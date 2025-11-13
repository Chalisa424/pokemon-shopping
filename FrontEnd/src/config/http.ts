import axios from 'axios';

export const http =axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
})//สร้าง axios instance ชื่อ http

//แนบ token อัตโนมัติทุก request ถ้ามี
http.interceptors.request.use((config)=>{
    const raw = localStorage.getItem('pokemon-shopping-token')
    const token = raw ? JSON.parse(raw) : null
    const access = token?.accessToken
    if (access) config.headers.Authorization = `Bearer ${access}`
    return config
}) //interceptor แนบ token อัตโนมัติ  (รันก่อน request ทุกครั้ง)
   //intercetor ดักทุก request/response ที่ axios ทำงาน         