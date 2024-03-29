import React from "react";
import "./Project.css";
import Project1 from "./img/biz.PNG";
import Project2 from "./img/lloyd.PNG";
import Project3 from "./img/kingdom1.PNG";
import Project4 from "./img/flexpay.PNG";
import Project5 from "./img/pets.PNG";
import Project6 from "./img/sancity.PNG";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Projects</h1>
        <p className="heading p__color">
          You may be interested in what I can offer you.
        </p>
        <p className="heading p__color">
          More services you can find below. I do everything at a high level.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project1} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Marketing</h5>
                <h4 className="project__text">BizMkononi platform</h4>
                <a href="https://www.mkononi.biz/" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project2} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Lead Generation</h5>
                <h4 className="project__text">Lloyd Constellations</h4>
                <a
                  href="https://lloydconstellations.co.ke/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project3} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Digital Marketting</h5>
                <h4 className="project__text">Kingdom Clothline</h4>
                <a
                  href="https://www.instagram.com/kingdomclothesline/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project4} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Social media marketing</h5>
                <h4 className="project__text">Flex Pay</h4>
                <a href="https://wwww.flexpay.co.ke/" className="project__btn">
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project5} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Digital Marketting</h5>
                <h4 className="project__text">Petsparadise</h4>
                <a
                  href="https://www.petsparadise.co.ke/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={Project6} alt="" className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Lead Generation</h5>
                <h4 className="project__text">Sanctity Technology</h4>
                <a
                  href="https://www.sanctitytechnology.co.ke/"
                  className="project__btn"
                >
                  View Details
                </a>
              </div>
            </div>
          </div>

          {/* <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn">View more</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
