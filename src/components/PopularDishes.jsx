import React from 'react'
import Card from './Card'
import hotpot1 from '../assets/hotpot1.png'
import hotpot2 from '../assets/hotpot2.png'
import hotpot4 from '../assets/hotpot4.png'

const PopularDishes = () => {

    const menu = [
        {
            id:1,
            hotpot: hotpot1,
            name: "Mushrooms HotPot",
            desc: "Healthy hot pot meal with mushrooms and beef.",
            rating: 4
        },
        {
            id:2,
            hotpot: hotpot2,
            name: "Fresh HotPot",
            desc: "Hot pot, a communal culinary experience where diners cook fresh ingredients together.",
            rating: 4
        },
        {
            id:3,
            hotpot: hotpot4,
            name: "Shrimp HotPot",
            desc: "High Quality Spicy Shrimp Stew in Coconut Sauce, Delicious Food .",
            rating: 4
        },
    ]

    return (
        <div className='py-10 px-5 lg:px-0 lg:py-20 bg-gray-800' id='menu'>
            <div className='text-center max-w-7xl mx-auto'>
                <h1 className='text-3xl lg:text-4xl font-bold text-red-500'>Popular Dishes</h1>
                <p className='lg:text-xl text-sm pt-2 text-white'>Check out our most popular and highly-rated dishes.</p>
                <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 gap-7'>
                    {
                        menu.map((item)=>{
                            return <Card key={item.id} menu={item}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularDishes