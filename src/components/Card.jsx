import { forwardRef } from "react";

const Card = forwardRef(({ title, number, bgColor, top, right, textColor }, ref) => {
    return (
        <div
            ref={ref}
            className="w-[260px] sm:w-[310px] h-[140px] sm:h-[160px] flex flex-col justify-center absolute rounded-xl p-5 sm:p-[30px] gap-[5px] shadow-lg z-30"
            style={{
                backgroundColor: bgColor,
                top: top,
                right: right,
                color: textColor,
            }}
        >
            <h1 className="text-4xl sm:text-6xl font-bold">{number}%</h1>
            <p className="text-sm sm:text-base font-medium leading-tight">{title}</p>
        </div>
    );
});

Card.displayName = "Card";

export default Card;