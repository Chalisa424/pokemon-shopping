import {createRouter, createWebHistory} from 'vue-router';
import {requireAdmin, requireAuth} from './guard';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {path: '/', redirect: '/auth/login'},
        
        {
            path:'/auth',
            component: () => import('../layouts/AuthLayout.vue'),
            children: [
                {path:'login',name:'Login', component: () => import('../views/auth/Login.vue')},
                // {path:'register',name:'Register', component: () => import('../views/auth/Register.vue')},
            ]
            
        }
    ]
})
export default router;
