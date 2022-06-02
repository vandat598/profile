import className from 'classnames/bind';
import styles from './LayoutContent.module.scss';

const cx = className.bind(styles);

function LayoutContent({ children }) {
    return <div className={cx('content-body', 'col', 'l-10')}>{children}</div>;
}

export default LayoutContent;
