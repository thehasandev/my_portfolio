import { useRef } from "react";

import Container from "../common/Container";
import Input from "../common/Input";
import Flex from "../common/Flex";
import BackToUp from "@uiw/react-back-to-top";
import { GoProjectRoadmap } from "react-icons/go";
import { PiUsersThreeLight } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";

import CountUp from "react-countup";
import { AiTwotonePhone, AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillAirplaneFill } from "react-icons/bs";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n80v8is", "template_58doal2", form.current, {
        publicKey: "zcRWr5eZJRMzTUoYT",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <section className="py-[60px]" id="contact">
        <Container>
          <h2
            className={`font-dm font-bold  mb-16 text-[30px] text-center text-secondary dark:text-white`}
          >
            Contact Me
          </h2>

          <Flex className="flex-wrap justify-between gap-y-10">
            <div className="lg:w-[40%] mx-auto xl:mx-0 ">
              <div className="flex gap-5 flex-wrap md:flex-nowrap">
                <div
                  className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center  bg-[#1D2D44] dark:bg-secondary text-white`}
                >
                  <Flex className="justify-center">
                    <GiReturnArrow size={40} />
                  </Flex>
                  <div
                    className={`font-dm font-semibold  text-2xl my-2 text-white`}
                  >
                    <CountUp start={0} end={10} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <p className={`font-dm font-semibold  text-xl text-white`}>
                    Project Pending
                  </p>
                </div>

                <div
                  className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center  bg-[#1D2D44] dark:bg-secondary text-white`}
                >
                  <Flex className="justify-center">
                    <PiUsersThreeLight size={50} />
                  </Flex>
                  <div
                    className={`font-dm font-semibold  text-2xl my-2 text-white`}
                  >
                    <CountUp start={0} end={150} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>

                  <p className={`font-dm font-semibold  text-xl text-white`}>
                    Client review
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap md:flex-nowrap md:gap-5 mt-5  md:w-full">
                <div
                  className={`'md:w-96 w-[360px]  mx-auto   py-10  rounded-[5px]  text-center bg-[#1D2D44] dark:bg-secondary text-white`}
                >
                  <Flex className="justify-center">
                    <GoProjectRoadmap size={50} />
                  </Flex>
                  <div
                    className={`font-dm font-semibold  text-2xl my-2 text-white`}
                  >
                    <CountUp start={0} end={80} delay={0}>
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} />
                        </div>
                      )}
                    </CountUp>
                  </div>
                  <p className={`font-dm font-semibold  text-xl text-white`}>
                    Complete project
                  </p>
                </div>

                <div className="md:w-96 w-[360px] mx-auto    py-10">
                  <Flex className="items-center gap-x-5">
                    <AiTwotonePhone
                      size={30}
                      className={`text-secondary dark:text-white`}
                    />
                    <p
                      className={`font-dm font-medium text-base  text-secondary dark:text-white`}
                    >
                      01764262634
                    </p>
                  </Flex>
                  <Flex className="items-center gap-x-5 my-4">
                    <AiOutlineMail
                      size={30}
                      className={`text-secondary dark:text-white`}
                    />
                    <p
                      className={`font-dm font-medium text-base  text-secondary dark:text-white`}
                    >
                      thehasandev@gmail.com
                    </p>
                  </Flex>
                  <Flex className="items-center gap-x-5">
                    <CiLocationOn
                      size={30}
                      className={`text-secondary dark:text-white`}
                    />
                    <p
                      className={`font-dm font-medium text-base  text-secondary dark:text-white`}
                    >
                      Dhaka,Narsingdi
                    </p>
                  </Flex>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="lg:w-[45%]">
              <Flex className="lg:w-full flex-wrap justify-between px-4 md:px-0">
                <div className="w-[48%] ">
                  <Input
                    text="First Name *"
                    name="user_name"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="w-[48%]">
                  <Input
                    text="Last Name *"
                    name="user_name"
                    placeholder="Enter your last name"
                  />
                </div>
                <div className="w-full my-5">
                  <Input
                    text="Email *"
                    name="user_email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full relative">
                  <h4
                    className={`font-dm font-bold text-sm   text-secondary dark:text-secondary py-1 px-5 inline absolute -top-4 left-5 bg-white`}
                  >
                    Message
                  </h4>
                  <textarea
                    placeholder="Enter your message"
                    name="message"
                    className="w-full border text-secondary dark:text-secondary dark:bg-transparent border-solid border-gray-400 rounded-[5px]  py-5 px-5 mb-2  placeholder:text-sm placeholder:font-dm bg-white"
                  ></textarea>
                </div>
                <Flex className="justify-center w-full">
                  <input
                    type="submit"
                    value="Send"
                    className={` duration-500 px-6 uppercase cursor-pointer  rounded-[5px] py-2 font-dm font-medium text-base  bg-secondary text-white hover:bg-transparent  hover:text-secondary border border-secondary 
                     `}
                  />
                </Flex>
              </Flex>
            </form>
          </Flex>
          <BackToUp>
            <BsFillAirplaneFill size={16} />
          </BackToUp>
        </Container>
      </section>
    </>
  );
}

export default Contact;
