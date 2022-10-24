import Link from "next/link"
import { navData, socialMediaData } from "../../config/data"


type SocialLinkProps = {
  icon: React.ReactNode
  url: string
}

const SocialLink = ({icon, url}: SocialLinkProps) => {
  return (
    <Link href={url}>
      <a className="text-xl">
        {icon}
      </a>
    </Link>
  )
}

type Props = {}

const Socials = ({}: Props) => {
  return (
    <ul className="flex space-x-6">
      { 
        socialMediaData.map((item, index) => (
          <li key={item.url} className="flex items-center justify-between">
            <SocialLink
              icon={item.icon}
              url={item.url}
              />
          </li>
        ))
      }
    </ul>
  )
}

export default Socials