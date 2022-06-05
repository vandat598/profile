// Import Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
// Import from WorkSpace
import styles from './App.module.scss';
import { publicRoutes } from '~/routes';
import InfoHeader from './component/InfoHeader';
import Sidebar from './component/Sidebar';
import LayoutContent from './component/LayoutContent';
import ScrollToTop from './component/Sidebar/ScrollToTop.js';

const cx = classNames.bind(styles);

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className={cx('wrapper', 'grid', 'wide')}>
                <InfoHeader />
                <div className={cx('content', 'row')}>
                    <Sidebar />

                    <LayoutContent>
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                return <Route key={index} path={route.path} element={<Page />}></Route>;
                            })}
                        </Routes>
                    </LayoutContent>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
