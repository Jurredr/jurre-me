import Link from 'next/link'
import MaskSvg from './MaskSvg'

interface Props {
  readonly children: React.ReactNode
  readonly href: string
  readonly color: string
  readonly iconColor: string
  readonly iconSize: string
}

const AnimatedLink: React.FC<Props> = (props) => {
  const isLinkExternal =
    props.href.startsWith('http://') ||
    props.href.startsWith('https://') ||
    props.href.startsWith('mailto:')
  return (
    <Link href={props.href}>
      <a
        className={
          'flex items-center justify-center bg-gradient-to-r bg-[length:0%_2px] bg-left-bottom bg-no-repeat p-0 transition-all hover:bg-[length:100%_2px] focus:bg-[length:100%_2px] ' +
          props.color
        }
        rel={isLinkExternal ? 'noreferrer noopener' : undefined}
        target="_blank"
      >
        <span className="">{props.children}</span>
        <span className="ml-[0.6rem] flex items-center justify-center">
          &#xfeff;
          <MaskSvg
            className={props.iconSize + ' ' + props.iconColor}
            url="/img/icons/arrow-tr.svg"
          />
        </span>
      </a>
    </Link>
  )
}

export default AnimatedLink
