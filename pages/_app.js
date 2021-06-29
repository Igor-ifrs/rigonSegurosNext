//import { useCallback, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import Menu from '../components/menu';
export default function App({ Component, pageProps }) {
    // useEffect(() => {
    //     let scroll = function () {
    //         return console.log(window.scrollY);
    //     };
    //     window.addEventListener('scroll', scroll);
    //     return () => {
    //         window.removeEventListener('scroll', scroll);
    //     };
    // }, []);
    return (
        <>
            <div className="container_warpper">
                <Menu />
                <Component {...pageProps} />
            </div>
        </>
    );
}
