import '../styles/global.css';
import Menu from '../components/menu/menu';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <Component {...pageProps} />
        </>
    );
}
