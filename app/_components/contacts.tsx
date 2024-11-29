import { FaPhoneAlt } from "react-icons/fa";

export default function Contacts({ isMenuOpen, setIsMenuOpen }:
    {
        isMenuOpen: any,  // поменять TS тут
        setIsMenuOpen: any
    }
) {
    return (
        <div className={`hidden lg:flex lg:flex-row gap-1 lg:gap-3 xl:gap-16 lg:mr-5`}>
            <div className="flex items-center gap-2 lg:text-sm">
                <div>
                    <div className="flex font-semibold"> г. Сергиев Посад </div>
                    <div> Производственная зона, 15/1 </div>
                </div>
            </div>

            <div className="flex flex-row lg:justify-center items-center gap-4 mr-8 xl:mr-16">
                <FaPhoneAlt />
                <div className="flex flex-col lg:text-sm">
                    <div className="font-medium lg:font-semibold"> Связаться с нами </div>
                    <div> +7(496)552-21-80 </div>
                    <div> +7(903)661-06-54 </div>
                    <div> +7(906)774-65-55 </div>
                </div>
            </div>
        </div>
    )
}