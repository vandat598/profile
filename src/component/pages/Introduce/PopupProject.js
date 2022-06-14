import classNames from 'classnames/bind';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import styles from './Popup.module.scss';

// import required modules

const cx = classNames.bind(styles);

function PopupProject({ value }) {
    const { bodyScroll, otherProject, setModalID, modalID } = value;

    const test = modalID === otherProject.id;

    return (
        <div
            className={cx('wrapper_modal', { 'show-modal': test })}
            onClick={() => {
                setModalID(false);
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
                                <span>
                                    <strong>{otherProject.title}</strong>
                                </span>
                            </h3>
                            <div className={cx('gallery')}>
                                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                                    <div
                                        className="carousel-inner"
                                        style={{ borderRadius: '15px', boxShadow: '0 0 7px #ffc107' }}
                                    >
                                        <div className="carousel-item active">
                                            <img src={otherProject.image} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={otherProject.image} className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={otherProject.image} className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('details')}>
                            <h3>
                                <strong>
                                    <span>Details</span>
                                </strong>
                            </h3>
                            <ul className={cx('details_content')}>
                                <li>
                                    <span>{otherProject.desc}</span>
                                </li>
                                <li>
                                    Made by - <span>{otherProject.madeBy}</span>
                                </li>
                            </ul>
                            <div className={cx('access-btn')}>
                                <a href={otherProject.url}>
                                    <button className={cx('access')}>
                                        <strong>Truy Cập</strong>
                                    </button>
                                </a>
                            </div>
                        </div>
                        <button
                            className={cx('close-btn')}
                            onClick={() => {
                                setModalID(0);
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
