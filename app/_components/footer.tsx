import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

export default function Footer() {
    return (
        <div className="flex flex-col w-full text-lg items-center bg-stone-200 h-fit py-6">
            <div className="flex flex-col md:flex-row  gap-7 md:gap-28 items-start md:items-center">

                <div className="flex items-center gap-2">
                    <MdLocationOn size={33} />
                    <div>
                        <div className="flex font-semibold"> г. Сергиев Посад </div>
                        <div className="text-lg"> ул. Дружбы, 14А, 2 этаж </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center gap-4">
                    <div className="pl-2 md:pl-0">
                        <FaPhoneAlt size={26} />
                    </div>
                    <div className="flex flex-col ">
                        <div className="font-semibold "> Контактный телефон </div>
                        <div> +7(965)394-94-82 </div>
                    </div>
                </div>
            </div>
            <div className="font-bold text-xl p-3 mt-4"> ДВЕРНАЯ ЯРМАРКА </div>

        </div>
    )
}