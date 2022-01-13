import React, { Component } from "react";
import {Link,NavLink}               from "react-router-dom";

//Import Image
import logoMain             from "../../assets/images/logo.png"
import secondLogo           from "../../assets/images/logo-2.png"

class Headers extends Component {
    scrollTop()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* =============== Topbar area start =============== */}
            <div className="topbar-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 tob-contact-row">
                            <div className="topbar-contact">
                                <ul>
                                    <li>
                                        <i className="bx bxs-phone" />
                                        <a href="tel:+17632275032">+1 763-227-5032</a>
                                    </li>

                                    <li>
                                        <i className="bx bxs-envelope" />
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                            <div className="topbar-social">
                                <ul>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-instagram" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-facebook" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-twitter" /></Link>
                                    </li>
                                    <li>
                                        <Link to={"#"}><i className="bx bxl-whatsapp" /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
                            <div className="custom-select languege-select">
                                <select>
                                    <option value={0}>ENG</option>
                                    <option value={1}>BAN</option>
                                    <option value={2}>FSP</option>
                                    <option value={3}>CHI</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =============== Topbar area end =============== */}


            {/* ===============  header area start =============== */}
            <header>
                <div className="header-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                <div className="navbar-wrap">
                                    <div className="logo d-flex justify-content-between">
                                        <Link to={`${process.env.PUBLIC_URL}/`} className="navbar-brand" onClick={this.scrollTop}><img src={logoMain} alt="" /></Link>
                                    </div>
                                    <div className="navbar-icons">
                                        <div className="searchbar-open">
                                            <i className="flaticon-magnifier" />
                                        </div>
                                        <div className="user-dropdown-icon">
                                            <i className="flaticon-user" />
                                            <div className="account-dropdown">
                                                <ul>
                                                    <li className="account-el">
                                                        <i className="bx bx-user-pin" />
                                                        <Link to={"#"}>Sign in</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bxs-user-account" />
                                                        <Link to={"#"}>My Account</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-extension" />
                                                        <Link to={"#"}>Settings</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-log-in-circle" />
                                                        <Link to={"#"}>Log out</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mobile-menu d-flex ">
                                            <div className="top-search-bar m-0 d-block d-xl-none">
                                            </div>
                                            <Link to={"#"} className="hamburger d-block d-xl-none">
                                                <span className="h-top" />
                                                <span className="h-middle" />
                                                <span className="h-bottom" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                <nav className="main-nav">
                                    <div className="navber-logo-sm">
                                        <img src={secondLogo} alt="" className="img-fluid" />
                                    </div>
                                    <ul>
                                        <li className="has-child-menu">
                                            <Link to={"#"}>Pragina Inicial</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.scrollTop}>Home Page 1</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/home-page-2`} className="sub-item" onClick={this.scrollTop}>Home Page 2</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-child-menu">
                                            <Link to={"#"}>Teste</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-teste`} className="sub-item" onClick={this.scrollTop}>Lista Teste</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={"/teste"} className="sub-item" onClick={this.scrollTop}>Testes</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink  activeClassName="active" to={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >Sobre Nos</NavLink >
                                        </li>
                                        
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >Praias</NavLink>
                                        </li>
                                      
                {/* =============== Elenimar sem ter erro =============== */}
                                        <li className="has-child-menu">
                                            <Link to={"#"}>Tour Package</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/package`} className="sub-item" onClick={this.scrollTop}>package</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>package sidebar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/package-standard`} className="sub-item" onClick={this.scrollTop}>package standard</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/package-details`} className="sub-item" onClick={this.scrollTop}>package details</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-child-menu">
                                            <Link to={"#"}>Blogs</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/blog`} className="sub-item" onClick={this.scrollTop}>Blog page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/blog-sidebar`} className="sub-item" onClick={this.scrollTop}>Blog sidebar</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/blog-standard`} className="sub-item" onClick={this.scrollTop}>Blog standard</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/blog-details`} className="sub-item" onClick={this.scrollTop}>blog-details </NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-child-menu">
                                            <Link to={"#"}>Pages</Link>
                                            <i className="fl flaticon-plus">+</i>
                                            <ul className="sub-menu">
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/gallary`} className="sub-item" onClick={this.scrollTop}>gallary page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/guide`} className="sub-item" onClick={this.scrollTop}>guide page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/destination`} className="sub-item" onClick={this.scrollTop}>destination page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/404`} className="sub-item" onClick={this.scrollTop}>404 Page</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/faq`} className="sub-item" onClick={this.scrollTop}>FAQ page</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</NavLink>
                                        </li>
                                        <li>
                                            <NavLink activeClassName="active" to={`${process.env.PUBLIC_URL}/list-amilcar`} onClick={this.scrollTop} >Amilcars</NavLink>
                                        </li>
                                    </ul>
                                    <div className="navbar-icons-2">
                                        <div className="searchbar-open">
                                            <i className="flaticon-magnifier" />
                                        </div>
                                        <div className="user-dropdown-icon">
                                            <i className="flaticon-user" />
                                            <div className="account-dropdown">
                                                <ul>
                                                    <li className="account-el">
                                                        <i className="bx bx-user-pin" />
                                                        <Link to={`${process.env.PUBLIC_URL}/login`} >Sign in</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bxs-user-account" />
                                                        <Link to={`#`} >My Account</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-extension" />
                                                        <Link to={`#`} >Settings</Link>
                                                    </li>
                                                    <li className="account-el">
                                                        <i className="bx bx-log-in-circle" />
                                                        <Link to={`#`} >Log out</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sidebar-contact">
                                        <ul>
                                            <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                <Link to={`tel:+17632275032`} >+1 763-227-5032</Link>
                                            </li>
                                            <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                <Link to={`mailto:info@example.com`} >info@example.com</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>

                    <form>
                        <div className="main-searchbar">
                            <div className="searchbar-close">
                                <i className="bx bx-x" />
                            </div>
                            <input type="text" placeholder="Search Here......" />
                            <div className="searchbar-icon">
                                <i className="bx bx-search" />
                            </div>
                        </div>
                    </form>

                </div>
            </header>
            {/* ===============  header area end =============== */}
            </>
        );
    }
}

export default Headers;
