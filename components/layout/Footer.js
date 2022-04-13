import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { SiLinkedin } from "react-icons/si";
export default function Footer() {
  return (
    <div className="bg-zomato-whiteGray/30 mt-8 p-8 divide-y divide-gray-300">
      <div className="flex justify-between items-center max-width pb-4">
        <h1 className="text-4xl font-black">Food Finding</h1>
        <div className="flex space-x-2 items-center">
          <AiFillFacebook className="text-2xl cursor-pointer" />
          <AiFillTwitterSquare className="text-2xl cursor-pointer" />
          <SiLinkedin className="text-2xl cursor-pointer" />
        </div>
      </div>
      <div className="max-width pt-4">
        <p className="text-sm font-normal text-center">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2022 © Nahid. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
