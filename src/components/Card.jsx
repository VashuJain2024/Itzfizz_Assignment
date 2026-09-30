const Card = ({ title, number, bgColor, top, right, textColor }) => {
    return (
        <div className="w-[310px] h-[160px] flex flex-col justify-center absolute rounded-xl p-[30px] gap-[5px]"
            style={{
                backgroundColor: bgColor,
                top: top,
                right: right,
                color: textColor,
            }}>
            <h1 className="text-6xl font-bold">{number}%</h1>
            <p className="text-base font-medium">{title}</p>
        </div>
    )
}

export default Card