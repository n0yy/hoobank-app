import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import { styles } from "../style";
import Button from "./Button";

export default function Footer() {
  return (
    <footer className="mt-40">
      <div className="bg-black-gradient-2 rounded-xl py-10 flex flex-col md:flex-row px-10 md:px-0 items-center justify-evenly mb-20">
        <div className="space-y-3">
          <h1 className={styles.title}>Let’s try our service now!</h1>
          <p className={styles.paragraph}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="mt-7 md:mt-0">
          <Button text="Get Started" />
        </div>
      </div>

      <div className="flex flex-col ss:flex-row items-start border-b-[1px] pb-10 border-white/50">
        <div className="w-full ss:w-5/12 space-y-3">
          <img src={logo} alt="Hoo Bank" />
          <p className={`${styles.paragraph} text-sm`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex items-start justify-between w-full ss:w-7/12 mt-10 ss:mt-0">
          {footerLinks.map((footerLink) => (
            <div>
              <h3 className="text-white font-semibold mb-3">
                {footerLink.title}
              </h3>
              <ul className="space-y-2">
                {footerLink.links.map((link) => (
                  <li className="text-dimWhite text-xs">
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="text-dimWhite py-5 flex justify-between items-center">
        <span className="text-xs w-1/2">
          Copyright &copy; 2022 HooBank. All Rights Reserved.
        </span>
        <div className="flex items-center space-x-5">
          {socialMedia.map((item) => (
            <a href={item.link} key={item.id}>
              <img src={item.icon} alt={item.link} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
