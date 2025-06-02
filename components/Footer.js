import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer () {
    const year = new Date().getFullYear()
    
    return(
        <footer className="grid grid-col-1 md:px-8 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 lg:gap-0">
            <div>
                <p className="text-2xl text-blue-500 font-bold">Artemis </p>
                <p className="text-xs text-gray-600"> &copy; {year} Busines Management Application</p>
            </div>
            <div>
                <p className="text-md text-gray-700">Head Office</p>
                <p className="text-md text-gray-700">Along Karshi Expressway </p>
            </div>
            <div>
                <ul className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#"><FaLinkedin className="text-blue-500 text=2xl" /></Link></li>
                    <li><Link href="#"><FaFacebookF className="text-blue-500 text=2xl"/></Link></li>
                    <li><Link href="#"><FaXTwitter className="text-blue-500 text=2xl"/></Link></li>
                </ul>
                <ul  className="flex lg:justify-end items-center gap-4">
                    <li><Link href="#" className="text-sm text-gray-600">Term of Use</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600"> Glossary</Link></li>
                    <li><Link href="#" className="text-sm text-gray-600">FAQS</Link></li>
                </ul>

            </div>
        </footer>
      
        
    )
}