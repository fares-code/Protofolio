import logo from '../assets/fm-logo.png';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
const NavBar=()=>{
    return(
<nav className=" flex items-center justify-between ">
<div className="flex flex-shrink-0">
    <img src={logo} className='w-16' alt/>
</div>
<div className='m-8 flex flex-wrap items-center cursor-pointer justify-center gap-4 text-white text-xl'>
  <a href="https://github.com/fares-code"  target="_blank"><FaGithub/></a>
  <a href="https://www.linkedin.com/in/fares-mohamed-8b3214263/"  target="_blank"><FaLinkedin/></a>
  <a href="https://www.facebook.com/profile.php?id=100010113786842"  target="_blank"><SiFacebook/></a>
  <a href="https://x.com/FaresMo47135786"  target="_blank"><FaSquareXTwitter/></a>




</div>

</nav>
    )
}
export default NavBar