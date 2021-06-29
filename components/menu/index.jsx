import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
export default function Menu(props) {
    return (
        <>
            <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
                <Navbar.Brand>
                    <Link href="/#home">
                        <a>LOGO</a>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link href="/#home">
                            <Navbar.Brand as="a">INÍCIO</Navbar.Brand>
                        </Link>

                        <Link href="paravc">
                            <Navbar.Brand as="a">PARA VOCÊ!</Navbar.Brand>
                        </Link>

                        <Link href="parasuaempresa">
                            <Navbar.Brand as="a">PARA SUA EMPRESA</Navbar.Brand>
                        </Link>

                        <Link href="parcerias">
                            <Navbar.Brand as="a">PARCEIRAS</Navbar.Brand>
                        </Link>

                        <Link href="sinistro">
                            <Navbar.Brand as="a">SINISTRO!</Navbar.Brand>
                        </Link>
                        <Link href="/#contato">
                            <Navbar.Brand as="a">CONTATO!</Navbar.Brand>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}
