import React from 'react';
import { BsArrowsFullscreen, BsBell } from 'react-icons/bs';
import { CgMenuGridR, CgMenuGridO } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { GiRiceCooker } from 'react-icons/gi';
import { HiMenuAlt3 } from 'react-icons/hi';
import { RiListUnordered } from 'react-icons/ri';
import { SiFoodpanda } from 'react-icons/si';
import { TbLanguage } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const DashboardNavbar = () => {
  const navbarMiddle = [
    {
      name: '',
      link: '',
      icon: <CgMenuGridO />
    },
    {
      name: 'Order List',
      link: '/dashboard/order-list',
      icon: <RiListUnordered />
    },
    {
      name: 'Kitchen Dashboard',
      link: '/dashboard/kitchen-dashboard',
      icon: <GiRiceCooker />
    },
    {
      name: 'Counter Dashboard',
      link: '/dashboard/counter-dashboard',
      icon: <CgMenuGridR />
    }
  ];

  const navbarRight = [
    {
      icon: <BsArrowsFullscreen />,
      link: ''
    },
    {
      icon: <BsBell />,
      link: '/dashboard/notification'
    },
    {
      icon: <FiSettings />,
      link: '/dashboard/settings'
    },
    {
      icon: <TbLanguage />,
      link: '/dashboard/select-language'
    }
  ];

  return (
    <div className="navbar bg-base-100 px-4 fixed top-0 left-0 right-0 z-50">
      <div className="navbar-start">
        <div className='flex gap-x-2 items-center justify-center text-xl text-center text-gray-900 font-semibold font-mono uppercase md:hidden lg:hidden'>
          <SiFoodpanda />
          <h1><span className='text-red-500'>B</span>hojon</h1>
        </div>
      </div>

      <div className='navbar-middle'>
        <ul className="menu menu-horizontal lg:flex gap-x-2 hidden">
          {
            navbarMiddle.map(navbarItems => <li key={navbarItems.link} className='border rounded-md'>
              <Link to={navbarItems.link}>
                <span>{navbarItems?.icon}</span>
                {navbarItems.name}
              </Link>
            </li>)
          }
        </ul>
      </div>

      <div className="navbar-end">
        <ul className="menu menu-horizontal lg:flex gap-x-2 hidden">
          {
            navbarRight.map(navbarItems => <li key={navbarItems.link} className='bg-gray-200 rounded-md'><Link to={navbarItems.link}>{navbarItems.icon}</Link></li>)
          }
        </ul>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <HiMenuAlt3 className='text-2xl' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box">
            {
              navbarRight.map(navbarItems => <li key={navbarItems.link}>
                <Link to={navbarItems.link}>{navbarItems.name}</Link>
              </li>)
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;