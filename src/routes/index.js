// Layouts import
import Introduce from '~/component/pages/Introduce';
import Education from '~/component/pages/Education';
import Interests from '~/component/pages/Interests';

// Public Route
const publicRoutes = [
    { path: '/', component: Introduce },
    { path: '/education', component: Education },
    { path: '/interests', component: Interests },
];

// Private Routes Dùng khi đăng nhập thành công
const privateRoutes = [];

export { publicRoutes, privateRoutes };
