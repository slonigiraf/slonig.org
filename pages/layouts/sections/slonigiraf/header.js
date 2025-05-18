import React, { useState } from 'react'
import Nav from './nav'
import Link from 'next/link'
import { Container, Row, Col } from 'reactstrap'
import CookieManagerClient from './cookieManagerClient'

const Header = props => {
    const [show, setShow] = useState(false)
    const [sidebar, setSidebar] = useState(false);
    const [search, setSearch] = useState(false);

    const clickSidebar = () => {
        setSidebar(!sidebar)
        document.querySelector('.navbar').classList.add('openSidebar')
    }

    return (
        <header className={`${props.className || 'app2'} loding-header nav-abs custom-scroll  `}>
            <CookieManagerClient />
            <Container>
                <Row>
                    <Col>
                        <nav>
                            <a className="m-r-auto" href="/">
                                <img alt="" className="img-fluid" src="/assets/images/logo/named-logo.svg" style={{ maxWidth: '150px' }} />
                            </a>
                            <div className="responsive-btn">
                                <a className="toggle-nav" onClick={clickSidebar} >
                                    <i aria-hidden="true" className="fa fa-bars text-white"></i>
                                </a>
                            </div>
                            <Nav />
                            {props.shop &&
                                <div className="top-header-right">
                                    <ul>
                                        <li className="search" >
                                            <a href="#" onClick={() => setSearch(!search)}>
                                                <i className="icon-search"></i>
                                            </a>
                                            <div aria-labelledby="dropdownMenuButton" className={`dropdown-menu ${search && `show`} dropdown-menu-right`}>
                                                <form className="search-form">
                                                    <div className="form-group">
                                                        <label className="sr-only">Email</label>
                                                        <input className="form-control-plaintext" placeholder="Search...."
                                                            type="search" />
                                                        <span className="d-sm-none mobile-search"></span>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>

                                        <li className="account ">
                                            <a href="#" onClick={() => setShow(!show)}>
                                                <i className="icon-user"></i>
                                            </a>
                                            <div className={`dropdown-menu ${show && `show`} dropdown-menu-right`}>
                                                <Link href={"/shop/auth/login"}><a href="#">Login</a></Link>
                                                <a href="#">Account</a>
                                                <Link href={"/shop/wishlist"}><a href="#">Wishlist</a></Link>
                                                <Link href={"/shop/checkout"}><a href="#">checkout</a></Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header
