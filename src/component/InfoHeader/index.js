import classNames from 'classnames/bind';
import styles from './InfoHeader.module.scss';

const cx = classNames.bind(styles);

function InfoHeader() {
    return (
        <div className={cx('info-header')}>
            <div className={cx('info-header_left')}>
                <img className={cx('avatar')} src="../../assets/images/tvd_avatar.jpg" alt="tvd_avatar" />
            </div>
            <div className={cx('info-header_right')}></div>
        </div>
    );
}

export default InfoHeader;
