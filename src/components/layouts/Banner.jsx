import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Button from '../Button'

const Banner = () => {
  return (
    <>
     <div className="py-[50px] bg-[url(/src/assets/bannerT.png)]">
      <Container>
       <div className="text-center">
         <Heading text={"We are a full range design agency"} tagName={"h1"} className={"mt-[219px] w-[771px] text-[64px] font-bold font-poppins m-auto leading-[130%] capitalize"}/>
        <Heading text={"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime."} tagName={"p"} className={"w-[547px] m-auto text-[#29313D] text-[18px] font-normal font-nunito leading-[200%] mt-[24px] mb-[44px]"}/>
        <div className="mb-[297px]">
            <Flex className={"ml-[500px] gap-x-8"}>
              <Button>Contact Us</Button>
              <Button>showcase</Button>
            </Flex>
        </div>
       </div>
      </Container>
     </div>
    </>
  )
}

export default Banner
