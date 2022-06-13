import classNames from 'classnames/bind';
import styles from './Introduce.module.scss';
import React, { useState } from 'react';

import PopupProject from './PopupProject';
import { otherProjects } from './OtherProject';

const cx = classNames.bind(styles);

const bodyScroll = document.querySelector('body');

function Introduce() {
    const [modalID, setModalID] = useState(0);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('sub-item')}>
                <h1 className={cx('title_level1')}>Giới thiệu</h1>
                <p>
                    Tôi tên Đạt, Từng học tại trường Đại Học Nha Trang, tốt nghiệp chuyên ngành Công Nghệ Kỹ Thuật Nhiệt
                    vào cuối năm 2020.
                </p>
                <p>
                    Lúc còn là sinh viên, những môn về lập trình hệ thống tự động hoá, đã truyền cảm hứng cho tôi về
                    ngành lập trình. Sau 2 năm ra trường, đi làm tại các công trình, phân xưởng. Tôi quyết định thử học
                    lập trình web và vô tính tìm được trang https://fullstack.edu.vn/. Tôi cảm thấy mình thật sự muốn
                    theo đuổi Lập trình.
                </p>
                <p style={{ color: '#9D0000' }}>
                    Tôi mong muốn theo làm hướng <strong>Front-end Web Developer</strong>, và ứng tuyển vào vị trí{' '}
                    <strong>Intern</strong>. Mong muốn được trải nghiệm các dự án thực tế để có thêm kinh nghiệm.
                </p>
            </div>
            <div className={cx('sub-item')}>
                <div className={cx('title_level2')}>
                    <h2>Sản phẩm của bản thân</h2>
                </div>
                <div className={cx('row')}>
                    {otherProjects.map((otherProject, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className={cx('col', 'l-6')}>
                                    <div className={cx('otherProject')}>
                                        <div
                                            className={cx('imageProject')}
                                            onClick={() => {
                                                setModalID(otherProject.id);
                                                bodyScroll.classList.add('no-scroll');
                                            }}
                                        >
                                            <img src={otherProject.image} alt={otherProject.alt} />
                                        </div>
                                        <h3>{otherProject.title}</h3>
                                    </div>
                                </div>
                                <PopupProject value={{ bodyScroll, index, otherProject, setModalID, modalID }} />
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Introduce;
