import theBand from '~/assets/images/slider/theband.png';
import musicPlayer from '~/assets/images/slider/musicPlayer.png';
import chatApp from '~/assets/images/slider/chatApp.png';
import myProfile from '~/assets/images/slider/myProfile.png';

export const otherProjects = [
    {
        id: 1,
        url: 'https://vandat598.github.io/chatapp/',
        image: chatApp,
        alt: 'Chat app',
        title: 'Chat App',
        madeBy: 'HTML, SCSS, ReactJS-18, antd, firebase-9, date-fns, lodash, React-Router-Dom.',
        respon: 'Chỉ mới responsive giao diện cho mobile, về cửa sổ tin nhắn chưa được responsive',
        desc: 'Trang web làm về Chat App, sử dụng real-time databese của Firebase để lưu trữ tin nhắn và tài khoản người dùng. Có thể đăng nhập bằng Google hoặc Facebook.',
    },
    {
        id: 2,
        url: 'https://vandat598.github.io/musicPlayer/',
        image: musicPlayer,
        alt: 'Music Player',
        title: 'Music Player',
        madeBy: 'HTML, CSS, JavaScript',
        respon: 'Đã được responsive cho giao diện mobile',
        desc: 'Music Player là trang web được dựng bằng HTML, CSS thuần và được xử logic bằng JavaScript',
    },
    {
        id: 3,
        url: 'https://vandat598.github.io/profile/',
        image: myProfile,
        alt: 'My Profile',
        title: 'My Profile',
        madeBy: 'HTML, SCSS, ReactJS-18, custom-grid.css, classnames, Bootstrap, React-Router-Dom.',
        respon: 'Đã được responsive cho giao diện mobile',
        desc: 'Trang web được dựng layout bằng file custom-grid.css, sử dụng Bootstrap cho phần Modal.',
    },
    {
        id: 4,
        url: 'https://vandat598.github.io/theband/',
        image: theBand,
        alt: 'The Band',
        title: 'The Band',
        madeBy: 'HTML, CSS, JavaScript, (Trang web đã được Responsive)',
        respon: 'Trang web đã được responsive',
        desc: 'The Band trang web cơ bản, clone theo trang The band của W3school, Sử dụng hoàn toàn HTML, CSS thuần và modal được xử lý bằng JavaScript.',
    },
];
