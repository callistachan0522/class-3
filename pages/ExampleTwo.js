import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleTwo() {
    /** 
     * The square brakets []
     * this makes sure the effect inly runs once on page load 
     * code on pages will run two times. once to render what we want and another to render strict mode to find any common bugs 
     */
    useEffect(() => {
        console.log("run")
    }, [])
    return(
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}