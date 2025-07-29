import React, { useState } from 'react'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Footer from '../Footer/Footer'

export default function Home() {

    const [counter, setCounter] = useState(0);
    const [nums, setNums] = useState([1, 2, 3, 4, 5, 6]);
    const newNums = nums.map((num) => num + 10);

    function increase(param) {
        setCounter(counter + param);
    }

    return (
        <>
            <h1>Home Page</h1>
            <h1>Counter: {counter}</h1>
            <button className='btn btn-primary' onClick={() => increase(10)}>
                Increase Counter
            </button>

            <div className={counter > 20 ? 'bg-info d-block' : 'd-none'}>
                <h2>Counter: {counter}</h2>
            </div>

            <div>
                <ul>
                    {newNums.map((num) => (
                        <li key={num} className='bg-info text-center'>
                            {num}
                        </li>
                    ))}
                </ul>
            </div>

       
            <Hero />
            <About />
            <Footer />
        </>
    );
}
