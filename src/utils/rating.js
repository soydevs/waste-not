import { BsCircleFill } from "react-icons/bs";

export const displayRating = (n) => {
    return (
        <div className="rating__container">
            {
                [...Array(n)].map((rat, id) => (
                    <BsCircleFill key={id} className="rating_icon"/>
                ))
            }
                            {
                [...Array(5-n)].map((rat, id) => (
                    <BsCircleFill key={id} className="rating_icon_grey"/>
                ))
            }
        </div>
    )
}
