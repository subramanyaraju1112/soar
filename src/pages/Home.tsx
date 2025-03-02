import { useEffect, useState } from "react"
import Honeypot from "../components/Honeypot"
import RunningContainers from "../components/RunningContainers"
import StoppedContainers from "../components/StoppedContainers"
import baseUrl from "../api/api"
import ResourceUsage from "../components/ResourceUsage"

const Home = () => {
  interface DataType {
    [key: string]: any
  }

  const [data, setData] = useState<DataType | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("ERROR", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Set up polling every 5 seconds
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  console.log("DATA", data)
  return (
    <section className="h-screen p-6">
      <div className="grid grid-cols-2 grid-rows-2 gap-6 h-full">
        <Honeypot honeypotImages={data?.Available_Honeypot_Images} />
        <ResourceUsage resourceUsage={data?.Resource_Usage} />
        <RunningContainers runningContainers={data?.Running_Containers} />
        <StoppedContainers stoppedContainers={data?.Stopped_Containers}/>
      </div>
    </section>
  )
}

export default Home