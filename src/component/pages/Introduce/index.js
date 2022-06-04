import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';

import theBand from '~/assets/images/theBand.png';

const cx = classNames.bind(styles);

function Introduce() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('sub-item')}>
                <h1 className={cx('title_level1')}>Giới thiệu</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita cum hic esse eaque perspiciatis
                    veritatis cumque minima aut molestias illo. Ullam corrupti reprehenderit expedita molestiae, magnam
                    esse assumenda totam sequi!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid quas labore mollitia
                    accusantium. Unde incidunt adipisci, illo quas repudiandae saepe nesciunt tenetur porro minus,
                    itaque asperiores sint cupiditate voluptates!
                </p>
                <p style={{ color: '#9D0000' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quos libero, porro qui illo nisi nulla
                    cumque iusto repellendus, ratione aspernatur id debitis explicabo itaque velit est laborum quas
                    iste.
                </p>
            </div>
            <div className={cx('sub-item')}>
                <div className={cx('title_level2')}>
                    <h2>Sản phẩm của bản thân</h2>
                </div>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('otherProject')}>
                            <a href="https://info.nghiane.cf/products/the-band/">
                                <div className={cx('imageProject')}>
                                    <img src={theBand} alt="The Band" />
                                </div>
                            </a>
                            <h3>The band</h3>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('otherProject')}>
                            <a href="https://info.nghiane.cf/products/the-band/">
                                <div className={cx('imageProject')}>
                                    <img src={theBand} alt="The Band" />
                                </div>
                            </a>
                            <h3>Music Player</h3>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('otherProject')}>
                            <a href="https://info.nghiane.cf/products/the-band/">
                                <div className={cx('imageProject')}>
                                    <img src={theBand} alt="The Band" />
                                </div>
                            </a>
                            <h3>Shopee</h3>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('otherProject')}>
                            <a href="https://info.nghiane.cf/products/the-band/">
                                <div className={cx('imageProject')}>
                                    <img src={theBand} alt="The Band" />
                                </div>
                            </a>
                            <h3>Tiktok</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('sub-item')}></div>
        </div>
    );
}

export default Introduce;
