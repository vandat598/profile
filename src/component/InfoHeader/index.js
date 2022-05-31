import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import styles from './InfoHeader.module.scss';
import avatar from '../../assets/images/tvd_avatar.jpg';
const cx = classNames.bind(styles);

function InfoHeader() {
    return (
        <div className={cx('info-header')}>
            <div className={cx('info-header_left')}>
                <img className={cx('avatar')} src={avatar} alt="tvd_avatar" />
                <div className={cx('content')}>
                    <div className={cx('name')}>Trần Văn Đạt</div>
                    <div className={cx('description')}>
                        <FontAwesomeIcon icon={faGraduationCap} />
                        Tốt nghiệp Đại học Nha Trang
                    </div>
                    <div className={cx('contact')}>
                        <a href="https://www.facebook.com/TVD598/" target="_blank" rel="noreferrer">
                            <div className={cx('contact-icon')} style={{ '--bgColor': '#3B5998' }}>
                                <FontAwesomeIcon icon={faFacebookF} />
                                <div className={cx('icon_popup')}>Facebook</div>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@thewine99" target="_blank" rel="noreferrer">
                            <div className={cx('contact-icon')} style={{ '--bgColor': '#333' }}>
                                <FontAwesomeIcon icon={faTiktok} />
                                <div className={cx('icon_popup')}>Tiktok</div>
                            </div>
                        </a>
                        <a href="https://github.com/vandat598?tab=repositories" target="_blank" rel="noreferrer">
                            <div className={cx('contact-icon')} style={{ '--bgColor': '#903b98' }}>
                                <FontAwesomeIcon icon={faGithub} />
                                <div className={cx('icon_popup')}>Github</div>
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCNxPlB7dG_p7mOg5kbk2osg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={cx('contact-icon')} style={{ '--bgColor': '#EA4335' }}>
                                <FontAwesomeIcon icon={faYoutube} />
                                <div className={cx('icon_popup')}>Youtube</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('info-header_right')}>alo</div>
        </div>
    );
}

export default InfoHeader;
