import React from 'react'
import { Link, Outlet } from "react-router-dom";
import logo from "../../../../assets/img/logo.png";

export default function Header() {
  return (
    <div className='header-template'>
      					<div className="header-menu">
						<div className="menu-left">
							<Link to="/">
								<button>
									<i class="fa fa-times"></i> <span>Close</span>
								</button>
							</Link>
						</div>
						<div className="menu-right">
							<div className="header-logo">
								<Link
									rel="noopener noreferrer"
									to="/"
									className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
								>
									<img src={logo} alt="logo" />
									<p>DaiQuocVietCorp</p>
								</Link>
							</div>
						</div>
					</div>

    </div>
  )
}
