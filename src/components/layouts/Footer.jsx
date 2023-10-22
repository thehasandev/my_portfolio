import React from 'react'
import Container from '../common/Container'
import Flex from '../common/Flex'
import List from '../common/List'
import Image from '../common/Image'

import Man from "../../assets/git.png"
import { AiOutlineTwitter,AiOutlineInstagram} from "react-icons/ai"
import { FaFacebookF} from "react-icons/fa"
import { BiLogoLinkedin} from "react-icons/bi"

function Footer() {
  return (
    <section className='py-[60px] bg-[#1D2D44] px-4 xl:px-0'>
        <Container>
            <Flex className="justify-center flex-wrap gap-y-10">
                <div className='md:w-3/12 '>
                    <div className='w-[100px] mx-auto'>
                       <Image src={Man} className="rounded-full"/>
                    </div>
                       <p className='font-dm font-normal text-white text-sm text-center pt-4'>Email: thehasandev@gmail.com</p>
                     
                      <div className='flex gap-x-2 justify-center mt-4'>
                        <div className='w-8 h-8 cursor-pointer bg-secondary rounded-[2px] text-white flex items-center justify-center'>
                          <FaFacebookF size={20}/>
                        </div>
                        <div className='w-8 h-8 cursor-pointer bg-secondary rounded-[2px] text-white flex items-center justify-center'>
                          <AiOutlineInstagram size={20}/>
                        </div>
                        <div className='w-8 h-8 cursor-pointer bg-secondary rounded-[2px] text-white flex items-center justify-center'>
                          <AiOutlineTwitter size={20}/>
                        </div>
                        <div className='w-8 h-8 cursor-pointer bg-secondary rounded-[2px] text-white flex items-center justify-center'>
                          <BiLogoLinkedin size={20}/>
                        </div>
                      </div>
                </div>
               <Flex className="gap-x-10 md:gap-x-5 justify-center">

                <div className='md:w-2/12 '>
                  <h3 className='font-dm font-bold text-lg text-white mb-5 uppercase'>Menu</h3>
                  <ul>
                    <List text="Home" footer/>
                    <List text="About" footer/>
                    <List text="Service" footer/>
                    <List text="Protpolio" footer/>
                  </ul>
                </div>

                <div className='md:w-2/12 '>
                  <h3 className='font-dm font-bold text-lg text-white mb-5 uppercase'>Service</h3>
                  <ul>
                    <List text="Home" footer/>
                    <List text="About" footer/>
                    <List text="Service" footer/>
                    <List text="Protpolio" footer/>
                  </ul>
                </div>

                <div className='md:w-2/12  hidden md:block'>
                  <h3 className='font-dm font-bold text-lg text-white mb-5 uppercase'>BLOG</h3>
                  <ul>
                    <List text="Portfolio" footer/>
                    <List text="Personal Blog" footer/>
                    <List text="Photo Blogging" footer/>
                    <List text="Prasad Theme" footer/>
                  </ul>
                </div>

                <div className='md:w-2/12 '>
                  <h3 className='font-dm font-bold text-lg text-white mb-5 uppercase'>ABOUT ME</h3>
                  <ul>
                    <p className='text-white w-[100px] md:w-[auto] font-normal md:text-sm text-xs'>Software Engineer by work. Grad Student. Class of '23. Gitkraken Ambassador Nepal, 2021/22.</p>
                    
                  </ul>
                </div>
               </Flex>
                
              
                
            </Flex>
            <p className='font-dm text-white text-xs md:text-sm font-normal text-right pt-5'>Copyright © Hasan 2023- Modified by @thehasandev
</p>
        </Container>

    </section>
  )
}

export default Footer