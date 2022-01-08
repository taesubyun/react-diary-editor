import { useRef, useState } from 'react';

const DiaryEditor = ({ onCreate }) => {
    const authorInput = useRef();
    const contentInput = useRef();
    const [state, setState] = useState({
        author: '',
        content: '',
        emotion: 1,
    });
    // Notion : 상태값은 객체로 관리. 객체 안에 빈 input,textarea
    // 그리고 emotion1 을 키로 넣어준다
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = () => {
        //focus
        if (state.author.length < 1) {
            authorInput.current.focus();
            return;
        }
        //focus
        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }
        onCreate(state.author, state.content, state.emotion);

        alert('저장 성공');
        setState({
            author: '',
            content: '',
            emotion: 1,
        });
    };

    return (
        <div className='DiaryEditor'>
            <h2>오 늘 의 일 기</h2>
            <div>
                <input
                    ref={authorInput}
                    name='author'
                    value={state.author}
                    onChange={handleChangeState}
                    // onChange={(e) => {
                    //     setState({
                    //         ...state,
                    //         author: e.target.value,
                    //     });
                    // Caution : 원래 있던 state들을 먼저 펼쳐주고 나서 내가 변경하고자 하는 state의 property를 마지막에 적어줘라
                />
            </div>
            <div>
                <textarea
                    ref={contentInput}
                    name='content'
                    value={state.content}
                    onChange={handleChangeState}
                    // onChange={(e) =>
                    //     setState({
                    //         ...state,
                    //         content: e.target.value,
                    //     })
                    // }
                />
            </div>

            <div>
                <span>오늘의 감정 점수 : </span>
                <select
                    name='emotion'
                    value={state.emotion}
                    onChange={handleChangeState}
                >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일 기 저 장 하 기 </button>
            </div>
        </div>
    );
};

export default DiaryEditor;
