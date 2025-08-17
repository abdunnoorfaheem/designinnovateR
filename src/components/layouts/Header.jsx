import React from 'react';
import "/src/App.css";
import Image from "/src/components/Image.jsx";
import Logo from "/src/assets/logo.png";
import Button from "/src/components/Button.jsx";
import Container from "/src/components/Container.jsx";
import Flex from "/src/components/Flex.jsx";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-[#FBF3F0]">
        <Container className={"py-3"}>
        <Flex className={"justify-between"}>
          <Image imgSrc={Logo} />
          <div className="">
            <ul className="flex gap-x-6 text-[18px] font-semibold text-[#29313D] font-openSans">
              <Link to={"/"}><li>Home</li></Link>
              <Link to={"/about"}><li>About</li></Link>
              <Link to={"/service"}><li>Service</li></Link>
              
              <Link to={"/portfolio"}><li>Portfolio</li></Link>
              <Link to={"/price"}><li>Price</li></Link>
              <Link to={"/blog"}><li>Blog</li></Link>
              
              
             
              
            </ul>
          </div>
          <Button className={"px-[28px] py-[14px] font-nunito"}>
            Contact Us
          </Button>
        </Flex>
      </Container>
      </div>
    </>
  )
}

export default Header
