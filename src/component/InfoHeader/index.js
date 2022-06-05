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
                        <p>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <em className={cx('text_em')}>Tốt nghiệp Đại học Nha Trang</em>
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <em className={cx('text_em')}>Chuyên ngành Công nghệ kỹ thuật nhiệt</em>
                        </p>
                    </div>
                    <div className={cx('Social-network')}>
                        <a href="https://www.facebook.com/TVD598/" target="_blank" rel="noreferrer">
                            <div className={cx('SN-icon')} style={{ '--bgColor': '#3B5998' }}>
                                <FontAwesomeIcon icon={faFacebookF} />
                                <div className={cx('icon_popup')}>Facebook</div>
                            </div>
                        </a>
                        <a href="https://www.tiktok.com/@thewine99" target="_blank" rel="noreferrer">
                            <div className={cx('SN-icon')} style={{ '--bgColor': '#333' }}>
                                <FontAwesomeIcon icon={faTiktok} />
                                <div className={cx('icon_popup')}>Tiktok</div>
                            </div>
                        </a>
                        <a href="https://github.com/vandat598?tab=repositories" target="_blank" rel="noreferrer">
                            <div className={cx('SN-icon')} style={{ '--bgColor': '#903b98' }}>
                                <FontAwesomeIcon icon={faGithub} />
                                <div className={cx('icon_popup')}>Github</div>
                            </div>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCNxPlB7dG_p7mOg5kbk2osg"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className={cx('SN-icon')} style={{ '--bgColor': '#EA4335' }}>
                                <FontAwesomeIcon icon={faYoutube} />
                                <div className={cx('icon_popup')}>Youtube</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx('info-header_right')}>
                <div className={cx('row')}>
                    <div className={cx('contact', 'col', 'l-8')}>
                        <div className={cx('title')}>NGÀY SINH</div>
                        <p>05/09/1998</p>
                    </div>
                    <div className={cx('contact', 'col', 'l-4')}>
                        <div className={cx('title')}>QUÊ QUÁN</div>
                        <p>Khánh Hoà</p>
                    </div>
                </div>
                <div className={cx('row')}>
                    <div className={cx('contact', 'col', 'l-8')}>
                        <div className={cx('title')}>EMAIL</div>
                        <p>trandat5998@gmail.com</p>
                    </div>
                    <div className={cx('contact', 'col', 'l-4')}>
                        <div className={cx('title')}>SỐ ĐIỆN THOẠI</div>
                        <p>0966-883-859</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoHeader;
