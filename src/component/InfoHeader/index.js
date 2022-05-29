import classNames from 'classnames/bind';
import styles from './InfoHeader.module.scss';

const cx = classNames.bind(styles);

function InfoHeader() {
    return <div className={cx('info-header')}>Trần Văn Đạt</div>;
}

export default InfoHeader;
