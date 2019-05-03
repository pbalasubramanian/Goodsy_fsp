import React from 'react';

class Splash extends React.Component {
    render() {
        return (
            <>
                <h1 className="center-header">If it’s handcrafted, vintage, custom, or unique, it’s on Goodsy.</h1>

                <div className="center">
                    {/* <a href="/#/products"> */}
                        <div className="left">
                            <div className="in-left">
                                <h2 className="up">One-of-a-kind items for everyday moments.</h2>
                                <div className="down">Shop for new favorites ></div>
                            </div>
                            <div className="in-right">
                            </div>
                        </div>
                    {/* </a> */}

                    <a href="/" className="right-link">
                        <div className="right">
                            <div className="right-up1">
                                <div className="right-up">
                                </div>
                            </div>
                            <div className="right-down">
                                <div className="right-down-text">Get it quick with ready-to-ship-finds ></div>
                            </div>
                        </div>
                    </a>

                </div>

                <div id="splash-style">
                    <div><i className="fa fa-check"></i>Unique everything
                        <p className="splash-text">We have millions of one-of-a-kind items, so you can find whatever you need (or really, really want).</p>
                    </div>
                    <div><i className="fa fa-check"></i>Independent sellers
                        <p className="splash-text">Buy directly from someone who put their heart and soul into making something special.</p>
                    </div>
                    <div><i className="fa fa-check"></i>Secure shopping
                        <p className="splash-text">We use best-in-class technology to protect your transactions.</p>
                    </div>
                </div>

            </>
        )
    }
}

export default Splash;