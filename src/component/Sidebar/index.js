import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import logo from '~/assets/images/8-account-outline.png';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('sidebar', 'col', 'l-2')}>
            <ul className={cx('nav')}>
                <li className={cx('nav-item', 'active')}>
                    <div className={cx('title')}>BẢN THÂN</div>
                </li>
                <li className={cx('nav-item')}>
                    <div className={cx('title')}>HỌC VẤN</div>
                </li>
                <li className={cx('nav-item')}>
                    <div className={cx('title')}>MỤC TIÊU</div>
                </li>
                <li className={cx('nav-item')}>
                    <div className={cx('title')}>SỞ THÍCH</div>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
