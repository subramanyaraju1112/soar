import React from 'react'
import Card from "./card/Card"

interface HoneypotProps {
    honeypotImages?: string[]  // Making it optional with ? since data might be null initially
}

const Honeypot: React.FC<HoneypotProps> = ({ honeypotImages }) => {
    return (
        <Card
            title="Available Honeypot Images">
            <div className="flex flex-wrap gap-5 items-center">
                {honeypotImages?.map((image, index) => (
                    <span 
                        key={index} 
                        className="px-6 py-2 border border-[#2E2E2E] rounded-md text-[#ECECEC] text-base font-semibold"
                    >
                        {image}
                    </span>
                ))}
            </div>
        </Card>
    )
}

export default Honeypot