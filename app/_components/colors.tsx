'use client'
import React, { Dispatch, SetStateAction } from 'react'
import { FaCircle } from "react-icons/fa";

export default function Colors({ setColor, productId, productGroup }:
    {
        setColor: Dispatch<SetStateAction<string>>;
        productId: string;
        productGroup: string;
    }
) {
    return (
        <div>
            {(productId === 'bordyur_dorozhny' || productGroup === 'bloki') ?
                <FaCircle color="gray" size={35} className="cursor-pointer" onClick={() => setColor('серый')} />
                :
                <div className="flex gap-3 mt-3">
                    <FaCircle color="gray" size={35} className="cursor-pointer" onClick={() => setColor('серый')} />
                    <FaCircle color="red" size={35} className="cursor-pointer" onClick={() => setColor('красный')} />
                    <FaCircle color="brown" size={35} className="cursor-pointer" onClick={() => setColor('коричневый')} />
                </div>
            }
        </div>
    )
}