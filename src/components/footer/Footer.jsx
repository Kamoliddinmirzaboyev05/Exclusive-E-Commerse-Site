import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <footer>
        <div className="container">
          <div className="col">
            <h1>Exclusive</h1>
            <h2>Subscribe</h2>
            <p>Get 10% off your first order</p>
            <form action="#">
              <input type="text" placeholder="Enter your email" />
              <button>
                <img src="/icon-send.svg" alt="" />
              </button>
            </form>
          </div>
          <div className="col">
            <h2>Support</h2>
            <p>
              111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div className="col">
            <h2>Account</h2>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div className="col">
            <h2>Quick Link</h2>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="col">
            <h2>Download App</h2>
            <p>Save $3 with App New User Only</p>
            <div className="footerImgs">
              <div className="qr">
                <img src="/qr.png" alt="" />
              </div>
              <div className="downloadApp">
                <img src="/GooglePlay.svg" alt="" />
                <img src="/AppStore.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="copy">
          <div className="container">
            <p>&copy; Copyright Rimel 2022. All right reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
