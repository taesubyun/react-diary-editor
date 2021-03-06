import { useState, useEffect } from 'react';

// const Lifecycle = () => {
// const [count, setCount] = useState(0);
// const [text, setText] = useState('');

//////////////////  π μ΄κΈ° μ»΄ν¬λνΈ μμ± - MOUNT π ////////////////////////

// useEffect(() => {
//     console.log('MOUNT!');
// }, []);

////////////////// π μ»΄ν¬λνΈ μν λ³ν - UPDATE π ////////////////////////

// useEffect(() => {
//     console.log('UPDATE!');
// });
// useEffect(() => {
//     console.log(`count is update : ${count}`);
//     if (count > 5) {
//         alert('countκ° 5λ₯Ό λμμ΅λλ€! 1λ‘ μ΄κΈ°νλ₯Ό μ§νν©λλ€');
//         setCount(1);
//     }
// }, [count]);

// useEffect(() => {
//     console.log(`text is update : ${text}`);
// }, [text]);

// return (
//     <div style={{ padding: 20 }}>
//         <div>
//             {count}
//             <button onClick={() => setCount(count + 1)}>+</button>
//         </div>
//         <div>
//             <input
//                 value={text}
//                 onChange={(e) => setText(e.target.value)}
//             ></input>
//         </div>
//     </div>
// );
// };

// export default Lifecycle;

////////////////// π UNMOUNT π //////////////////

// ν μ»΄ν¬λνΈ μμ μμ μ»΄ν¬λνΈ μμ±
const UnmountTest = () => {
    useEffect(() => {
        console.log('MOUNT!');

        return () => {
            console.log('UNMOUNT!');
        };
    }, []);

    return <div className='Unmounttest'> μλ¦Ό : UNMOUNT μ»΄ν¬λνΈ νμ€νΈ </div>;
};

const LifeCycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 12 }}>
            <button className='UnmountBtn' onClick={toggle}>
                ON/OFF
            </button>
            {isVisible && <UnmountTest />}
        </div>
    );
};

export default LifeCycle;
