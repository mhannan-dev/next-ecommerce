"use client"
import React from 'react';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
const { Header } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
const Navbar = () => {
    return (
        <>
            <Header className="flex items-center justify-between bg-gray-800 p-2">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-2"></div> {/* Your logo */}
                    <span className="text-white font-semibold text-lg">Logo</span>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link href="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link href="/about">About</Link>
                    </Menu.Item>
                    {/* Add more menu items as needed */}
                </Menu>
            </Header>
        </>
    )
}

export default Navbar