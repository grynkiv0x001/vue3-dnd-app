import { URL } from '@/core/constants/URL';
import Home from '@/components/Home/Home.vue';
import SandBox from '@/components/SandBox/SandBox.vue';
import SignUp from '@/components/Authorization/SignUp.vue';
import SignIn from '@/components/Authorization/SignIn.vue';
import NotFound from '@/components/NotFound/NotFound.vue';

export const routes = [
  {
    path: URL.HOME,
    name: 'home',
    component: Home,
  },
  {
    path: URL.SANDBOX,
    name: 'sandbox',
    component: SandBox,
  },
  {
    path: URL.REGISTER,
    name: 'sign-up',
    component: SignUp,
  },
  {
    path: URL.LOGIN,
    name: 'sign-in',
    component: SignIn,
  },
  {
    path: URL.NOTFOUND,
    name: 'not-found',
    component: NotFound,
  },
];
