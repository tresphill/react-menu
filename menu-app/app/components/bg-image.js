import Image from "next/image"
import styles from "./page.module.css"

export default function bgImage(){
    return(
        <div>
        <Image 
        className="bgImage"
        src={"/images/Fig-collage-asset.jpg"} 
        width={500}
        height={500}
        alt="fig" />
        </div>
    )
}