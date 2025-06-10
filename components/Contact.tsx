"use client";
import { GradualSpacing } from "./ui/GradualSpacing";
import MagicButton from "./ui/MagicButton";
import { ShineBorder } from "./ui/ShineBorder";
import Link from "next/link";

function Contact() {

  return (
    <div id="contact" className="container">
      <GradualSpacing text="Contact me" className="my-10" />
      <div className="flex gap-5 justify-around flex-col-reverse sm:flex-row">
        <div className="mt-5">
          <h1 className="text-xl sm:text-5xl mb-5 dark:text-white-100 font-bold tracking-tight">
            Send Us a Note and Initiate the Dialogue!
          </h1>
          <p className="text-normal text-sm sm:text-lg font-medium text-gray-600 dark:text-gray-400 mt-2">
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to connect, reach out and let’s make it happen.
          </p>

          <div className="flex items-center mt-12 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              Egypt, Cairo
            </div>
          </div>

          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              <Link
                href={
                  "https://wa.me/+201146461602"
                }
                className="hover:underline hover:text-white transition-colors"
              >
                (+20) 01146 461 602
              </Link>
            </div>
          </div>

          <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="ml-4 text-md tracking-wide font-semibold w-40">
              <Link
                href={"mailto:yahiamohmed41@gmail.com"}
                className="hover:underline hover:text-white transition-colors"
              >
               yahiamohmed41@gmail.com
              </Link>
            </div>
          </div>
        </div>
        <div
          className="p-4  w-full max-w-[600px] mx-auto"
          // color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
        <form 
  action="https://formcarry.com/s/ndUYJ6M76IX"
  method="POST"
  encType="multipart/form-data"
  className="w-full max-w-lg mx-auto"
>
  <label htmlFor="email" className="block py-2 text-lg">
    Email
  </label>
  <input
    type="email"
    name="email"
    id="email"
    placeholder="Email Address"
    className="w-full bg-black border border-[#22272c] p-2.5 rounded-lg text-white focus:outline-none focus:border-[#8750f7]"
  />

  <label htmlFor="message" className="block py-3 text-lg">
    Your Message
  </label>
  <textarea
    name="message"
    id="message"
    cols={30}
    rows={10}
    placeholder="Message"
    className="w-full bg-black border border-[#22272c] p-2.5 rounded-lg text-white focus:outline-none focus:border-[#8750f7]"
  />

  <MagicButton
    type="submit"
    title="Send Message"
    className="!w-full"
  />
</form>

        </div>
      </div>
    </div>
  );
}
export default Contact;
