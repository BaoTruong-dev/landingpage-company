import { Outlet, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "./layout/Header/Header";
import Social from "./layout/Social/Social";
export const DetailTemplate = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container-detail">
      <div className="header-detail">
        <Header />
      </div>
      <div className="social">
        <Social />
      </div>
      <div className="outlet">
        <div className="nav">
          <div className="navigation">
            <Link to="/detail/sell">
              <div className="back">
                <i class="fa fa-arrow-left"></i>
                <p>Back</p>
              </div>
            </Link>
            <Link to="/detail/travel">
              <div className="next">
                <p>Next</p>
                <i class="fa fa-arrow-right"></i>
              </div>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
