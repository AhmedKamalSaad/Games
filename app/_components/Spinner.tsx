'use client'
import { RotatingLines } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="w-full h-full flex items-start">

        <RotatingLines
        visible={true}
        width="40"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  )
}

export default Spinner