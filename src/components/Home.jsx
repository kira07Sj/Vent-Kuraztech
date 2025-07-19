import Navbar from "./Navbar"
import VentForm from "./Vent/VentForm"
import VentList from "./Vent/VentList"
import { useState } from "react"

const Home = () => {

    const [isVisible, SetIsVisible] = useState(false)
    const [refreshKey, setRefreshKey] = useState(0);

    const handleVentPosted = () => {
        setRefreshKey(prev => prev + 1); // change the key to force re-render
        SetIsVisible(false); // close the form after posting
    };

    

    return (
        <section className="w-full min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-purple-400 flex items-center flex-col">
            <Navbar/>
            <button
                onClick={() => SetIsVisible(true)}
                className="w-[40px] h-[40px] rounded-full bg-white drop-shadow-2xl text-2xl text-purple-600 mt-[5rem] flex items-center justify-center aria-[add]:"
            >
                +
            </button>
            <main className="w-[100%] md:w-[50%] p-6 mt-3">
                <VentForm
                    classname={`${isVisible ? 'flex' : 'hidden'}`}
                    onClose={()=> SetIsVisible(false)}
                    onPost={handleVentPosted}
                />
                <VentList key={refreshKey}/>
            </main>
        </section>
    )
}

export default Home