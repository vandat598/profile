import classNames from 'classnames/bind';
import styles from './Interests.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { favorites } from './MyFavorite';

const cx = classNames.bind(styles);

function Interests() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title_level1')}>
                <h1>Sở thích</h1>
            </div>
            {favorites.map((fav, index) => {
                return (
                    <div key={index} className={cx('sub-item')}>
                        <h2 className={cx('title_level2')}>
                            <FontAwesomeIcon className={cx('icon_title')} icon={fav.icon} />
                            {fav.favType}
                        </h2>
                        {fav.list.map((obj, index) => {
                            return (
                                <div key={index} className={cx('wrapper')}>
                                    <div className={cx('entertain')}>
                                        <div className={cx('poster')}>
                                            <img src={obj.poster} alt={obj.title} />
                                        </div>
                                        <div className={cx('content')}>
                                            <h3>{obj.title}</h3>
                                            <p>{obj.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Interests;
