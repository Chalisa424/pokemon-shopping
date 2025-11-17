import { defineStore } from "pinia";
import { authService } from "../services/auth.service";
import type { User } from "../models/user";
//เอาไว้เก็บค่าอย่างเดียวกับ setค่า
export const useAuthStore = defineStore("auth", {
//state ตัวแปรที่เก็บข้อมูลในระบบ
  state: () => ({
    user: null as User | null,
    token: null as string | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAdmin: (state) => state.user?.role === "admin", //เช็ค user.role เป็น admin มั้ย 
  },
  actions: {//เอาไว้ในหน้าLogin.vue
    async login(username: string, password: string) {
      const { token } = await authService.login({ username, password });//ยิง API login
      this.token = token;//เก็บ token ไว้ใน store
      localStorage.setItem("pokemon-shopping-token", token);//save token ลง localStorage
      // ถ้า backend มี me(ใน service) ให้ดึงโปรไฟล์
      try {
        this.user = await authService.me();
      } catch (error) {
        this.user = null; //ถ้า backend ยังไม่มี me
      }
    },
    restore() {//โหลด token จาก localStorage
      const t = localStorage.getItem("pokemon-shopping-token");
      this.token = t;
    },
    logout() {//ล้างข้อมูล user ล้าง token ลบ token จาก localStorage
      this.user = null;
      this.token = null;
      localStorage.removeItem("pokemon-shopping-token");
    },
  },
});
