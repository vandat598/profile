// Import Libraries
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames/bind';
// Import from WorkSpace
import styles from './App.module.scss';
import { publicRoutes } from '~/routes';
import InfoHeader from './component/InfoHeader';
import Sidebar from './component/Sidebar';

const cx = classNames.bind(styles);

function App() {
    return (
        <BrowserRouter>
            <div className={cx('wrapper')}>
                <InfoHeader />
                <div className={cx('content')}>
                    <Sidebar />
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            const Page = route.component;

                            return <Route key={index} path={route.path} element={<Page></Page>}></Route>;
                        })}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
