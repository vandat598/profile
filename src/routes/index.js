// Layouts import
import Introduce from '~/component/pages/Introduce';
import Education from '~/component/pages/Education';
import Target from '~/component/pages/Target';
import Interests from '~/component/pages/Interests';

// Public Route
const publicRoutes = [
    { path: '/profile/', component: Introduce },
    { path: '/profile/education', component: Education },
    { path: '/profile/target', component: Target },
    { path: '/profile/interests', component: Interests },
];

// Private Routes Dùng khi đăng nhập thành công
const privateRoutes = [];

export { publicRoutes, privateRoutes };
