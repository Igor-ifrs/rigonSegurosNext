import Link from 'next/link';

export default function Menu(props) {
    return (
        <menu>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/parasuaempresa">
                        <a>Para sua Empresa</a>
                    </Link>
                </li>
                <li>
                    <Link href="/paravc">
                        <a>Para você</a>
                    </Link>
                </li>
                <li>
                    <Link href="/parcerias">
                        <a>Parcerias</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sinistro">
                        <a>Sinistro</a>
                    </Link>
                </li>
            </ul>
        </menu>
    );
}
