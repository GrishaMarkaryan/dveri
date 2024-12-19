import { TbTruckDelivery } from "react-icons/tb";
import { GrStatusGood } from "react-icons/gr";
import { GiTakeMyMoney } from "react-icons/gi";
import Production from "./production";


export default function Main() {
    return (
        <div className="bg-stone-300">

            <Production />

            <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-10 text-xl md:text-2xl md:p-10 mb-10">
                <div className="flex flex-col justify-center items-center">
                    <GrStatusGood size={70} />
                    <div className="p-10"> Качественные материалы </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <GiTakeMyMoney size={70} />
                    <div className="p-10"> Выгодные цены </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <TbTruckDelivery size={70} />
                    <div className="p-10"> Быстрая доставка </div>
                </div>
            </div>
        </div>
    )
}