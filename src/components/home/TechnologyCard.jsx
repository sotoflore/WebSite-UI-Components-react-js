
const TechnologyCard = ( { borderColor, icon, title, textColor, bgColor } ) => {

    return (
        <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className={`border-2 ${borderColor} px-4 py-6 rounded-lg flex flex-col items-center ${bgColor}`}>
                {icon}
                <h3 className={`leading-relaxed text-xl ${textColor} font-bold pt-2`}>{title}</h3>
            </div>
        </div>
    )
}
export default TechnologyCard;