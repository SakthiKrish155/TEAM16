import React from 'react'

const Footer = () => {
  return (
<<<<<<< HEAD
    <div>Footer</div>
=======
    <>
    

    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/about-us" className="text-green-500 text-2xl ">About Us</a>
          <a href="/contact-us" className="text-green-500 text-2xl">Contact Us</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin size={32} className="text-green-500 hover:text-green-400" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FacebookIcon size={32} className="text-green-500 hover:text-green-400" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <TwitterIcon size={32} className="text-green-500 hover:text-green-400" />
          </a>
        </div>
        <div className="text-center text-2xl text-green-500">
          <p >© voidtasks.com</p>
        </div>
      </div>
    </footer>
    
    </>
>>>>>>> parent of b11d870c (footer)
  )
}

export default Footer;