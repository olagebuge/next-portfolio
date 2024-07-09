import Image from "next/image";

const Loading = () => {
  return (
    <div className="container minHight flex justify-center">
      <div className="flex">      
       <div className="loadContainer">
          <Image
            src="/loadbar.png"
            alt="Loading"
            width={6}
            height={60}
            className="loadBar1"
          />
          <Image
            src="/loadbar.png"
            alt="Loading"
            width={6}
            height={60}
            className="loadBar1"
          />
          <Image
            src="/loadbar.png"
            alt="Loading"
            width={6}
            height={60}
            className="loadBar1"
          />
        </div>
        <div className="text-orange">Loading…</div>
      </div>
    </div>
  )
}

export default Loading