
export default function OurContacts() {
    return (
        <div className="flex flex-col px-[10%] py-14">
            <div className="text-3xl pb-12"> КОНТАКТЫ </div>
            <div className="pb-6">
                <div className="flex flex-col md:flex-row gap-7 md:gap-16 md:mr-5">
                    <div className="flex r gap-2">
                        <div>
                            <div className="flex font-semibold"> г. Сергиев Посад </div>
                            <div className="text-lg"> ул. Дружбы, 14А, 2 этаж </div>
                        </div>
                    </div>

                    <div className="flex flex-row md:justify-center items-center gap-4 mr-8">
                        <div className="flex flex-col md:text-lg">
                            <div className="font-medium md:font-semibold"> Связаться с нами </div>
                            <div className="text-green-600"> +7(965)394-94-82 </div>
                        </div>
                    </div>
                </div>            </div>
            <div className="relative overflow-hidden">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=38.135047%2C56.332741&mode=search&oid=1702929891&ol=biz&z=16.61" width="100%" height="400"></iframe>
            </div>
        </div>
    )
}