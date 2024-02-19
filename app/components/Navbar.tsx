"use client"
// components/Navbar.js
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal" className=' px-4 sm:px-6 lg:px-8'>
      <Menu.Item key="home">Home</Menu.Item>
      <Menu.Item key="about">About</Menu.Item>
      <Menu.Item key="contact">Contact</Menu.Item>
    </Menu>
  );
};

export default Navbar;
