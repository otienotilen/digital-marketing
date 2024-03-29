import React from "react";
import "./Service.css";
import logo from "./img/logo.png";
import aboutImg from "./img/Capture2.PNG";
import a from "./img/socialmediaadvertising.png";
import b from "./img/googleads.png";
import c from "./img/contentcreation.jpg";
import d from "./img/leadgeneration.jpg";
import e from "./img/facebook.png";
import f from "./img/instagram.webp";
import g from "./img/tiktok.jpg";
import h from "./img/youtube_003.jpg";
import i from "./img/googleseo.jpg";

function Service() {
  return (
    <div className="service component__space" id="Services">
      <div className="heading">
        <h1 className="heading">My Services</h1>
        <p className="heading p__color">
          As your sales partner, I focus solely on maximizing ROI. I use
          relevant platforms to target your customer on daily basis. Offering a
          range of digital services all of which are focused on growing your
          business.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={a} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Social media advertising</h1>
                <p className="p service__text p__color">
                  I craft engaging fecebook and instagram marketing campaigns.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={b} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Google ads</h1>
                <p className="p service__text p__color">
                  One of the most effective ways to get traffic for your
                  website.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={c} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Content creation</h1>
                <p className="p service__text p__color">
                  The quality of your content dictates the power of your
                  message.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={d} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Lead generation</h1>
                <p className="p service__text p__color">
                  Leads are the lifeline of every business. I help you generate
                  and qualify leads for optimum conversions.
                </p>
              </div>
            </div>
          </div>

          <div className="heading">
            <h1 className="heading">My Marketing Platforms</h1>
            <p className="heading p__color">
              Best Marketing Platforms information. 100% Privacy Protected! Find
              what you are looking for Here. 99% Match on Best Marketing
              Platforms.
            </p>
            <p className="heading p__color">
              These are the marketing platforms I use.
            </p>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={e} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Facebook</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={f} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Instagram</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={g} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Tiktok</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={h} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Youtube</h1>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={i} alt="" className="img"></img>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Google SEO</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
