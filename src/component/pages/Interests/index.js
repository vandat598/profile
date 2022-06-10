import classNames from 'classnames/bind';
import styles from './Interests.module.scss';

import { movieList, bookList } from './MyFavorite';

const cx = classNames.bind(styles);

function Interests() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title_level1')}>
                <h1>Sở thích</h1>
            </div>

            <div className={cx('sub-item')}>
                <h2 className={cx('title_level2')}>
                    <img src="..." alt="" />
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
                    <img src="..." alt="" />
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
        </div>
    );
}

export default Interests;
