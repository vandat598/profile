import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import animationData from '~/assets/animations/test.json';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar', 'col', 'l-2', 'm-12', 's-12')}>
            <ul className={cx('nav')}>
                <Link to="/" className={cx('link')}>
                    <li className={cx('nav-item', 'active')}>
                        <Lottie options={{ animationData: animationData }} height={40} width={40} />
                        <div className={cx('title')}>BẢN THÂN</div>
                    </li>
                </Link>
                <Link to="/education" className={cx('link')}>
                    <li className={cx('nav-item')} onClick={() => {}}>
                        <Lottie options={{ animationData: animationData }} height={40} width={40} />
                        <div className={cx('title')}>HỌC VẤN</div>
                    </li>
                </Link>
                <Link to="/target" className={cx('link')}>
                    <li className={cx('nav-item')}>
                        <Lottie options={{ animationData: animationData }} height={40} width={40} />
                        <div className={cx('title')}>MỤC TIÊU</div>
                    </li>
                </Link>
                <Link to="/interests" className={cx('link')}>
                    <li className={cx('nav-item')}>
                        <Lottie options={{ animationData: animationData }} height={40} width={40} />
                        <div className={cx('title')}>SỞ THÍCH</div>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Sidebar;
