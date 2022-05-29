import Logo from './Logo'
import MaskSvg from './MaskSvg'

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between px-8 py-8 font-euclid md:flex-row md:px-16">
      <div className="footer-left mb-6 flex flex-row items-center justify-center gap-4 md:mb-0 md:gap-12">
        <div>
          <Logo color="black" />
        </div>
        <p
          className="mt-1 text-center text-[0.8rem] text-gray-400"
          style={{ lineHeight: '1.25rem' }}
        >
          &#169; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
      <div className="footer-right flex flex-col items-center justify-center gap-8 text-black md:flex-row md:gap-11">
        <div
          className="footer-mail flex cursor-pointer items-center justify-center gap-2"
          onClick={(e) => {
            window.location.href =
              "mailto:contact@jurre.me?subject=I'd%20like%20to%20talk!"
            e.preventDefault()
          }}
        >
          <MaskSvg
            className="mt-[0.1rem] h-4 w-4 cursor-pointer"
            url="/icons/mail.svg"
          />
          <p>contact@jurre.me</p>
        </div>
        <div className="footer-media-icons flex items-center justify-center gap-5">
          <a
            href="https://www.instagram.com/jurre.053/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/instagram.svg"
            />
          </a>
          <a
            href="https://twitter.com/JurredeRuiter"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/twitter.svg"
            />
          </a>
          <a
            href="https://github.com/jurredr"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/github.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jurre-de-ruiter-2503901b4/"
            rel="noreferrer"
            target="_blank"
            className="h-5"
          >
            <MaskSvg
              className="h-5 w-5 cursor-pointer"
              url="/icons/linkedin.svg"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
