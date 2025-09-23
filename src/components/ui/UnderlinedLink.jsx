import { Link } from "react-router-dom"

export const UnderlinedLink = ({text}) => {
  return (
    <Link className="underline font-semibold
     text-[.8rem]">{text}</Link>
  )
}
