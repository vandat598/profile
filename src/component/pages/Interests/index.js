import classNames from 'classnames/bind';
import styles from './Interests.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faBook, faPersonBiking, faMotorcycle, faFish } from '@fortawesome/free-solid-svg-icons';

import { movieList, bookList } from './MyFavorite';
import fixedGear from '~/assets/images/favorites/bicycle.png';
import benda300 from '~/assets/images/favorites/benda300.png';
import ranchu from '~/assets/images/favorites/ranchu.png';

const cx = classNames.bind(styles);

function Interests() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title_level1')}>
                <h1>Sở thích</h1>
            </div>

            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <FontAwesomeIcon className={cx('icon_title')} icon={faBook} />
                    Xem Phim
                </h2>
                {movieList.map((movie, index) => {
                    return (
                        <div key={index} className={cx('wrapper')}>
                            <div className={cx('entertain')}>
                                <div className={cx('poster')}>
                                    <img src={movie.poster} alt={movie.title} />
                                </div>
                                <div className={cx('content')}>
                                    <h3>{movie.title}</h3>
                                    <p>{movie.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <FontAwesomeIcon className={cx('icon_title')} icon={faFilm} />
                    Đọc sách
                </h2>
                {bookList.map((book, index) => {
                    return (
                        <div key={index} className={cx('wrapper')}>
                            <div className={cx('entertain')}>
                                <div className={cx('poster')}>
                                    <img src={book.poster} alt={book.title} />
                                </div>
                                <div className={cx('content')}>
                                    <h3>{book.title}</h3>
                                    <p>{book.desc}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <FontAwesomeIcon className={cx('icon_title')} icon={faPersonBiking} />
                    Thể thao
                </h2>
                <div className={cx('wrapper')}>
                    <div className={cx('entertain')}>
                        <div className={cx('poster')}>
                            <img src={fixedGear} alt="Fixed Gear" />
                        </div>
                        <div className={cx('content')}>
                            <h3>Fixed Gear</h3>
                            <p>
                                Xe đạp Fixed Gear hay còn gọi là xe đạp không phanh là dòng xe có cấu tạo đơn giản. Xe
                                chuyển động động nhờ vào dây xích nối giữa líp và đùi đĩa và chỉ có thể chuyển động khi
                                nào bàn đạp chuyển động.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <FontAwesomeIcon className={cx('icon_title')} icon={faMotorcycle} />
                    Phân khối lớn
                </h2>
                <div className={cx('wrapper')}>
                    <div className={cx('entertain')}>
                        <div className={cx('poster')}>
                            <img src={benda300} alt="Fixed Gear" />
                        </div>
                        <div className={cx('content')}>
                            <h3>Benda BD300cc</h3>
                            <p>
                                Benda BD300 mang phong cách đặc trưng của một chiếc cruiser với yên xe võng, và tay lái
                                ngang, tạo tư thế lái xe thoải mái cho người sử dụng trong suốt hành trình dài. Bên cạnh
                                đó, xe cũng mang đậm tính cổ điển với các thiết kế đèn pha, gương chiếu hậu và đồng hồ
                                điều khiển hình tròn.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <FontAwesomeIcon className={cx('icon_title')} icon={faFish} />
                    Nuôi cá
                </h2>
                <div className={cx('wrapper')}>
                    <div className={cx('entertain')}>
                        <div className={cx('poster')}>
                            <img src={ranchu} alt="Fixed Gear" />
                        </div>
                        <div className={cx('content')}>
                            <h3>Cá vàng ranchu</h3>
                            <p>
                                Cá Ranchu là một dòng cá vàng không có vây lưng, có thân hình trứng là dòng cá được lai
                                tạo phát triển từ dòng cá Lan Thọ. Cá có khả năng bơi lội khoan thai, cử động nhẹ nhàng
                                và duyên dáng cộng với thân hình đáng yêu nên cá Ranchu là loài cá vàng được ưa chuộng
                                nhất ở Việt Nam cũng như trên thế giới.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Interests;
