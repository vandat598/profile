import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';

import styles from './Sidebar.module.scss';
import { MenuItems } from './MenuItems.js';

const cx = classNames.bind(styles);

function Sidebar() {
    const contentSection = useRef();

    const [fixed, setFixed] = useState(false);

    const srollToFixedNav = () => {
        if (window.scrollY >= 280) {
            setFixed(true);
        } else {
            setFixed(false);
        }
    };
    window.addEventListener('scroll', srollToFixedNav);

    const scrollToSection = () => {
        window.scrollTo({
            top: contentSection.current.offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <nav ref={contentSection} className={cx('sidebar', 'col', 'l-2', 'm-12', 's-12')}>
            <ul className={fixed ? cx('nav', 'fixed') : cx('nav')}>
                {MenuItems.map((navItem, index) => {
                    return (
                        <NavLink
                            key={index}
                            to={`/profile${navItem.url}`}
                            className={({ isActive }) => (isActive ? cx('link', 'active') : cx('link'))}
                        >
                            <li className={cx('nav-item')} onClick={scrollToSection}>
                                <lord-icon
                                    src={navItem.iconSrc}
                                    trigger="hover"
                                    style={{ width: '50px', height: '50px' }}
                                ></lord-icon>
                                <div className={cx('title')}>{navItem.title}</div>
                            </li>
                        </NavLink>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Sidebar;
