import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 300, behavior: 'smooth' });
        console.log(location);
    }, [location]);

    return null;
}
