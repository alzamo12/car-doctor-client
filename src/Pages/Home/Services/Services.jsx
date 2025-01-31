import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services , setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setServices(data)
        })
    }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl">Our Services</h3>
                <h2 className="text-5xl font-bold">Our Service Areas</h2>
                <p>the majority have suffered alteration in some form,
                    by injected humour, or randomised <br />
                    words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-3  mt-8 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;