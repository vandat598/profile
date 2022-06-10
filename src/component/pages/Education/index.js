import classNames from 'classnames/bind';
import styles from './Education.module.scss';

import { mySkills } from './MySkills';

const cx = classNames.bind(styles);

function Education() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title_level1')}>
                <h1>Học Vấn</h1>
            </div>
            <div className={cx('sub-item')}>
                <div className={cx('title_level2')}>
                    <img src="..." alt="" />
                    <h2>Giáo dục</h2>
                </div>
                <div className={cx('timeline')}>
                    <h4 className={cx('title')}>Trường Đại Học Nha Trang</h4>
                    <div className={cx('note')}>2016-2020</div>
                    <p>Làm Trái ngành, tay ngang</p>
                </div>
                <div className={cx('timeline')}>
                    <h4 className={cx('title')}>Học tại F8</h4>
                    <div className={cx('note')}>01/2022</div>
                    <p>HTML,CSS,ReactJS</p>
                </div>
            </div>
            <div className={cx('sub-item')}>
                <div className={cx('title_level2')}>
                    <h2>Kỹ năng</h2>
                </div>
                {mySkills.map((skill, index) => {
                    return (
                        <div key={index} className={cx('timeline')}>
                            <h4 className={cx('title')}>{skill.title}</h4>
                            <div className={cx('note')}>{skill.note}</div>
                            <p>{skill.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Education;
