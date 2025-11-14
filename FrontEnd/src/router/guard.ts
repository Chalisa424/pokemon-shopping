import type {NavigationGuard} from 'vue-router';
import { useAuthStore } from '../stores/auth';

export const requireAuth: NavigationGuard = (to, from, next) => {
    const auth = useAuthStore();
    
    // restore token ถ้าหายไปตอน refresh
    if(!auth.token){
        auth.restore();
    }
    if(auth.isAuthenticated){
        next();
    }else{
        next({
            name: 'Login',
            query: {redirect: to.fullPath}
        })
    }
};

export const requireAdmin: NavigationGuard = (to, from, next) => {
    const auth = useAuthStore();
    if(auth.isAdmin){
        auth.restore()
    } 

    if(!auth.isAuthenticated) {
        return next({name: 'Login'});
    }
    if(auth.isAdmin){
        next();
    }else{
        next('/shop');
    }
};