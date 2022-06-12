import classNames from 'classnames/bind';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './Popup.module.scss';
import theBand from '~/assets/images/theBand.png';
import musicPlayer from '~/assets/images/Music_player.png';
import shopee from '~/assets/images/shopee.png';

// import required modules

const cx = classNames.bind(styles);

function PopupProject({ value }) {
    const { open, setOpen, bodyScroll } = value;

    return (
        <div
            className={cx('wrapper_modal', { 'show-modal': open })}
            onClick={() => {
                setOpen(false);
                bodyScroll.classList.remove('no-scroll');
            }}
        >
            <div
                className={cx('modal')}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className={cx('modal_inner')}>
                    <div className={cx('modal_content')}>
                        <div className={cx('demo')}>
                            <h3>
                                <span>demo</span>
                            </h3>
                            <div className={cx('gallery')}>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-indicators">
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2"
                                        ></button>
                                        <button
                                            type="button"
                                            data-bs-target="#carouselExampleIndicators"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3"
                                        ></button>
                                    </div>
                                    <div
                                        className="carousel-inner"
                                        style={{ borderRadius: '15px', boxShadow: '0 0 7px #ffc107' }}
                                    >
                                        <div className="carousel-item active">
                                            <img src={theBand} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={musicPlayer} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={shopee} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button
                                        className="carousel-control-prev"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="prev"
                                    >
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button
                                        className="carousel-control-next"
                                        type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide="next"
                                    >
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('details')}>
                            <h3>
                                <span>details</span>
                            </h3>
                            <div className={cx('details_content')}>
                                <ul>
                                    <li>
                                        <span> HTML, CSS</span>
                                    </li>
                                    <li>
                                        Made by:
                                        <span> HTML, CSS</span>
                                    </li>
                                    <li>
                                        Sử dụng:
                                        <span> HTML, CSS</span>
                                    </li>
                                </ul>
                            </div>
                            <button
                                className={cx('access')}
                                onClick={() => {
                                    console.log('truy cap');
                                }}
                            >
                                Truy cập
                            </button>
                        </div>
                        <button
                            className={cx('close-btn')}
                            onClick={() => {
                                setOpen(false);
                                bodyScroll.classList.remove('no-scroll');
                            }}
                        >
                            X
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopupProject;
