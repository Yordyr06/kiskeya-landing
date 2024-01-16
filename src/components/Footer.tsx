import { FaFacebook, FaInstagram, FaYoutube, FaLink  } from "react-icons/fa6";

export const Footer = ():JSX.Element => {
  return (
    <footer className="h-auto w-auto flex flex-col mt-10 p-4 gap-10 bg-auto rounded-md">
      <div className="flex justify-center py-8">
        <img
          className="rounded-full" 
          src="https://yt3.googleusercontent.com/ytc/AIf8zZT696k3dDu6HT2DRHBX0oFZLVNO1dr_nSnUlNEA-A=s176-c-k-c0x00ffffff-no-rj"/>
      </div>
      
      <div className="flex justify-center">
        <ul className="flex">
          <li className=""><span><a href="#">
            <FaLink className="
              h-6 w-10 mx-auto
            "/></a></span></li>
          <li className=""><span><a href="#">
            <FaFacebook className="
              h-6 w-10 m-auto
            "/></a></span></li>
          <li className=""><span><a href="#">
            <FaInstagram className="
              h-6 w-10 m-auto
            "/></a></span></li>
          <li className=""><span><a href="#">
            <FaYoutube className="
              h-6 w-10 m-auto
            "/></a></span></li>
        </ul>
      </div>
  </footer>

  )
} 