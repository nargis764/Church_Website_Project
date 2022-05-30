import React from 'react'


const Calendar = () => {

    return (
        <div className = "px-10 lg:px-20 py-10">
            <h1 className = "text-center font-mono font-bold lg:text-3xl">Parish Calendar </h1>
            <div className = "aspect-w-1 aspect-h-1 lg:aspect-w-2 lg:aspect-h-1 lg:mx-20">
                <iframe src="https://calendar.google.com/calendar/embed?src=0abpo6kl8j35e8b4bof0kruis8%40group.calendar.google.com&ctz=America%2FLos_Angeles"
                    width="800"
                    height="600"
                    frameborder="0"
                    scrolling="no">
                </iframe>
            </div>
        </div>
    )
}

export default Calendar