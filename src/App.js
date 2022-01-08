import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useRef, useState } from 'react';

// const dummyList = [
//     {
//         id: 1,
//         author: '윤태섭',
//         content: '대한민국',
//         emotion: 1,
//         created_date: new Date().getTime(), // 시간 객체 생성 (현재 시간 기준)
//     },
//     {
//         id: 2,
//         author: '나까무라',
//         content: '일본',
//         emotion: 3,
//         created_date: new Date().getTime(), // 시간 객체 생성 (현재 시간 기준)
//     },
//     {
//         id: 3,
//         author: '맥',
//         content: '미국',
//         emotion: 4,
//         created_date: new Date().getTime(), // 시간 객체 생성 (현재 시간 기준)
//     },
// ];
const App = () => {
    const [data, setData] = useState([]);
    const dataId = useRef(0);
    const onCreate = (author, content, emotion) => {
        const created_date = new Date().getTime();
        const newItem = {
            author,
            content,
            emotion,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    };
    return (
        <div className='App'>
            <DiaryEditor onCreate={onCreate} />
            <DiaryList diaryList={data} />
        </div>
    );
};

export default App;
