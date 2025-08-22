import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="py-[50px]">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <Image imgSrc={Logo} />
              <Heading
                text={
                  "Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page."
                }
                tagName={"p"}
                className={
                  "w-[449px] text-[#29313D] font-nunito text-[18px] leading-[180%] mt-[44px]"
                }
              />
              <Heading
                text={"@20201 Innovate.All rights reserved."}
                tagName={"h4"}
                className={"text-[#29313D] font-nunito text-[18px] mt-[189px]"}
              />
            </div>
            <div className="">
              <Heading
                text={"Features"}
                tagName={"h3"}
                className={
                  "text-[#29313D] text-[24px] font-semibold font-openSans"
                }
              />
              <ul className="text-[18px] font-semibold text-[#29313D] font-nunito">
                <Link to={"/"}>
                  <li className="pt-[48px] pb-[10px]">Home</li>
                </Link>
                <Link to={"/about"}>
                  <li className="py-[10px]">About</li>
                </Link>
                <Link to={"/service"}>
                  <li className="py-[10px]">Service</li>
                </Link>

                <Link to={"/portfolio"}>
                  <li className="py-[10px]">Portfolio</li>
                </Link>
                <Link to={"/price"}>
                  <li className="py-[10px]">Price</li>
                </Link>
                <Link to={"/blog"}>
                  <li className="pb-[80px] pt-[10px]">Blog</li>
                </Link>
              </ul>
            </div>
            <div className="">
              <Heading
                text={"Products"}
                tagName={"h3"}
                className={
                  "text-[#29313D] text-[24px] font-semibold font-openSans"
                }
              />
              <ul className="text-[18px] font-semibold text-[#29313D] font-nunito">
                <Link to={"/"}>
                  <li className="pt-[48px] pb-[10px]">Task Management</li>
                </Link>
                <Link to={"/"}>
                  <li className="py-[10px]">Company growth</li>
                </Link>
                <Link to={"/"}>
                  <li className="pt-[10px] mb-[220px] ">Time tracking</li>
                </Link>
              </ul>
            </div>
            <div className="">
              <Heading
                text={"Support"}
                tagName={"h3"}
                className={
                  "text-[#29313D] text-[24px] font-semibold font-openSans"
                }
              />
              <ul className="text-[18px] font-semibold text-[#29313D] font-nunito">
                <Link to={"/"}>
                  <li className="pt-[48px] pb-[10px]">Customer service</li>
                </Link>
                <Link to={"/"}>
                  <li className="py-[10px]">Accessibility</li>
                </Link>
                <Link to={"/"}>
                  <li className="pt-[10px]  ">Contact us</li>
                </Link>
              </ul>

              <Flex className={"mt-[200px]"}>
                <Heading
                  text={"Privacy policy"}
                  tagName={"h4"}
                  className={"text-[#29313D] font-nunito text-[18px] "}
                />
                <Heading
                  text={"Terms & condition"}
                  tagName={"h4"}
                  className={"text-[#29313D] font-nunito text-[18px] ml-[15px]"}
                />
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Footer;
