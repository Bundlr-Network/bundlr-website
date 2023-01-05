import Marquee from "react-fast-marquee";
import { PolygonIcon } from "@/svg";

const useHomeTrustedBy = () => {
  return {}
}

const HomeTrustedBy = () => {
  const { } = useHomeTrustedBy()

  return (
    <>
      <h1>HomeTrustedBy</h1>
      <Marquee gradientColor={
        [
          238, 240, 246
        ]
      }>
        <div className="flex gap-10">
          <PolygonIcon />
          <PolygonIcon />
          <PolygonIcon />
          <PolygonIcon />
          <PolygonIcon />
        </div>
      </Marquee>
    </>
  )
}

export default HomeTrustedBy
