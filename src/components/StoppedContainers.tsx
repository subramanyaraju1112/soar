import React from 'react'
import Card from './card/Card'

interface Container {
    CPU: string;
    'Image:tag': string;
    Name: string;
    Ports: {
        [key: string]: number;
    };
    RAM: string;
    Status: string;
}

interface StoppedContainersProps {
    stoppedContainers?: Container[];
}

const StoppedContainers: React.FC<StoppedContainersProps> = ({ stoppedContainers }) => {
    return (
        <Card title="Stopped Containers">
            <div className="flex flex-col gap-5">
                {(!stoppedContainers || stoppedContainers.length === 0) ? (
                    <span className="text-[#8994AA] text-sm">No containers found</span>
                ) : (
                    <div className="flex flex-wrap gap-5">
                        {stoppedContainers.map((container, index) => (
                            <div key={index} className="w-1/2 flex flex-col gap-4">
                                <span className="text-[#ECECEC] text-base font-semibold">
                                    {container.Name}
                                </span>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[#8994AA] text-sm">
                                        ({container['Image:tag']})
                                    </span>
                                    <span className="text-[#8994AA] text-sm">
                                        CPU: {container.CPU}, RAM: {container.RAM}, 
                                        Port: {Object.values(container.Ports)[0]}
                                    </span>
                                    <span className="text-[#8994AA] text-sm">
                                        Status: {container.Status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </Card>
    )
}

export default StoppedContainers