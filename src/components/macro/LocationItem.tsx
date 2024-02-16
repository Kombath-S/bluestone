

export interface ILocationItem {
    country: string,
    number: string,
    email: string,
    street: string
}

export const LocationItem = ({ data }: { data: ILocationItem }) => {
    return (
        <div className="mt-8">
            <h4 className="text-white mb-4">{data.country}</h4>
            <p className="flex gap-3 mb-3">
                <span className="">
                    <img src="/public/icons/location-dark.png" alt="location" className="w-5" />
                </span>
                <span className="">
                    {data.street}
                </span>
            </p>
            <p className="flex gap-3 mb-3">
                <span className="">
                    <img src="/public/icons/call-dark.png" alt="call" className="w-5" />
                </span>
                <span className="">
                    {data.number}
                </span>
            </p>
            <p className="flex gap-3 mb-3">
                <span className="">
                    <img src="/public/icons/env-dark.png" alt="envelope" className="w-5" />
                </span>
                <span className="">
                    {data.email}
                </span>
            </p>

        </div>)
}
