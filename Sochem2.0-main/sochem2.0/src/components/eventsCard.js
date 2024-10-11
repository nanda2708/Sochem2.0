import React from 'react'

const eventsCard = (props) => {
    return (
        <div className="bg-[url('/images/3.jpg')] w-[38rem] h-[25rem] sm:w-[38rem] sm:h-[25rem] lg:w-[38rem] lg:h-[25rem] flex text-center justify-center items-center m-auto bg-cover border-4 border-black rounded-lg" >

            <h1 className="flex text-center justify-center text-4xl font-bold text-[#F7FAFF] ">{props.title}</h1>

        </div >


    )
}

export default eventsCard