import React from 'react';
import "/src/App.css";
import Image from "/src/components/Image.jsx";
import Logo from "/src/assets/logo.png";
import Button from "/src/components/Button.jsx";
import Container from "/src/components/Container.jsx";
import Flex from "/src/components/Flex.jsx";

const Header = () => {
  return (
    <>
      <div className="bg-[#FBF3F0]">
        <Container className={"py-3"}>
        <Flex className={"justify-between"}>
          <Image imgSrc={Logo} />
          <div className="">
            <ul className="flex gap-x-6 text-[18px] font-semibold text-[#29313D] font-openSans">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Price</li>
              <li>Blog</li>
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
