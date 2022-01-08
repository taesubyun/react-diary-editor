import { useState, useEffect } from 'react';

// const Lifecycle = () => {
// const [count, setCount] = useState(0);
// const [text, setText] = useState('');

//////////////////  📌 초기 컴포넌트 생성 - MOUNT 📌 ////////////////////////

// useEffect(() => {
//     console.log('MOUNT!');
// }, []);

////////////////// 📌 컴포넌트 상태 변화 - UPDATE 📌 ////////////////////////

// useEffect(() => {
//     console.log('UPDATE!');
// });
// useEffect(() => {
//     console.log(`count is update : ${count}`);
//     if (count > 5) {
//         alert('count가 5를 넘었습니다! 1로 초기화를 진행합니다');
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

////////////////// 📌 UNMOUNT 📌 //////////////////

// 한 컴포넌트 안에 자식 컴포넌트 생성
const UnmountTest = () => {
    useEffect(() => {
        console.log('MOUNT!');

        return () => {
            console.log('UNMOUNT!');
        };
    }, []);

    return <div>UNMOUNT 테스트 컴포넌트 </div>;
};

const LifeCycle = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div>
    );
};

export default LifeCycle;
