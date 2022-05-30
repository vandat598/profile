import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return <div className={cx('sidebar', 'col', 'l-2')}>Bản Thân</div>;
}

export default Sidebar;
