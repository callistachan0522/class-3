import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useEffect, useState } from "react"

export default function ExampleFive() {
    const [count, setCount] = useState(0)

    useEffect (() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        },1000)

        return () => clearInterval(interval);
      
    }, [count])
    return(
        <>
            <div>
                <h1>Number Counter</h1>
                <h3>Example using interval</h3>
                <div>{count}</div>
            </div>
        </>
    )
}