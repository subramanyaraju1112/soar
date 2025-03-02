import React from 'react'
import Card from './card/Card'
import cpuIcon from "../assets/icons/cpu-icon.svg";
import ramIcon from "../assets/icons/ram-icon.svg";
import serverIcon from "../assets/icons/server-icon.svg";

interface ResourceUsageProps {
    resourceUsage?: {
        CPU: string;
        RAM_Usage: string;
        Storage: string;
    }
}

const ResourceUsage: React.FC<ResourceUsageProps> = ({ resourceUsage }) => {
    // Parse RAM Usage
    const ramParts = resourceUsage?.RAM_Usage.split(' / ');
    const ramUsed = ramParts?.[0];
    const ramTotal = ramParts?.[1];

    // Parse Storage
    const storageParts = resourceUsage?.Storage.split(' / ');
    const storageUsed = storageParts?.[0];
    const storageTotal = storageParts?.[1];

    return (
        <Card title="Resource Usage">
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="w-1/2 p-4 flex flex-col gap-4 bg-[#1E1E1E] rounded-lg">
                        <div className="flex gap-2 items-center">
                            <img src={cpuIcon} alt="cpu-icon" />
                            <span className="text-[#ECECEC] text-base font-semibold">CPU Usage</span>
                        </div>
                        <span className="text-[#7599DC] text-2xl font-semibold">{resourceUsage?.CPU}</span>
                    </div>
                    <div className="w-1/2 p-4 flex flex-col gap-4 bg-[#1E1E1E] rounded-lg">
                        <div className="flex gap-2 items-center">
                            <img src={ramIcon} alt="ram-icon" />
                            <span className="text-[#ECECEC] text-base font-semibold">RAM Usage</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#7599DC] text-2xl font-semibold">{ramUsed}</span>
                            <span className="text-[#8994AA] text-base font-semibold">/ {ramTotal}</span>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 p-4 flex flex-col gap-4 bg-[#1E1E1E] rounded-lg">
                    <div className="flex gap-2 items-center">
                        <img src={serverIcon} alt="server-icon" />
                        <span className="text-[#ECECEC] text-base font-semibold">Storage</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#7599DC] text-2xl font-semibold">{storageUsed}</span>
                        <span className="text-[#8994AA] text-base font-semibold">/ {storageTotal}</span>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default ResourceUsage