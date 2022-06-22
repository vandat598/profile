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
        madeBy: 'HTML, SCSS, ReactJS-18, antd, firebase-9',
        desc: '3',
    },
    {
        id: 2,
        url: 'https://vandat598.github.io/musicPlayer/',
        image: musicPlayer,
        alt: 'Music Player',
        title: 'Music Player',
        madeBy: 'HTML, CSS, JavaScript',
        desc: 'Music Player là trang web được dựng bằng HTML, CSS thuần và được xử logic bằng JavaScript',
    },
    {
        id: 3,
        url: 'https://vandat598.github.io/profile/',
        image: myProfile,
        alt: 'My Profile',
        title: 'My Profile',
        madeBy: 'HTML, CSS, ReactJS-18, (Responsived)',
        desc: 'The Band trang web cơ bản, clone theo trang The band của W3school, Sử dụng hoàn toàn HTML, CSS thuần và modal được xử lý bằng JavaScript.',
    },
    {
        id: 4,
        url: 'https://vandat598.github.io/theband/',
        image: theBand,
        alt: 'The Band',
        title: 'The Band',
        madeBy: 'HTML, CSS, JavaScript, (Trang web đã được Responsive)',
        desc: 'The Band trang web cơ bản, clone theo trang The band của W3school, Sử dụng hoàn toàn HTML, CSS thuần và modal được xử lý bằng JavaScript.',
    },
];
