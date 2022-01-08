import { useRef, useState } from 'react';

const DiaryItem = ({
    onRemove,
    onEdit,
    id,
    author,
    content,
    emotion,
    created_date,
}) => {
    const localContentInput = useRef();
    const [localContent, setLocalContent] = useState(content);
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);

    const handleClickRemove = () => {
        if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
        }
    };

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(content);
    };

    const handleEdit = () => {
        if (localContent.length < 5) {
            localContentInput.current.focus();
            return;
        }

        if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) {
            onEdit(id, localContent);
            toggleIsEdit();
        }
    };

    return (
        <div className='DiaryItem'>
            <div className='info'>
                <span className='author_info'>
                    작성자 : {author} | 감정 : {emotion}
                </span>
                <br />
                <span className='date'>
                    {new Date(created_date).toLocaleDateString()}
                </span>
            </div>
            <div className='content'>
                {isEdit ? (
                    <textarea
                        ref={localContentInput}
                        value={localContent}
                        onChange={(e) => setLocalContent(e.target.value)}
                    />
                ) : (
                    content
                )}
            </div>
            {isEdit ? (
                <>
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </>
            ) : (
                <>
                    <button
                        style={{
                            background: '#FB3569',
                            border: 'none',
                            outline: 'none',
                            height: '30px',
                            borderRadius: '7px',
                            color: 'white',
                        }}
                        onClick={handleClickRemove}
                    >
                        삭제하기
                    </button>
                    <button
                        style={{
                            marginLeft: '3px',
                            background: '#2F89FC',
                            border: 'none',
                            outline: 'none',
                            height: '30px',
                            borderRadius: '7px',
                            color: 'white',
                        }}
                        onClick={toggleIsEdit}
                    >
                        수정하기
                    </button>
                </>
            )}
        </div>
    );
};
export default DiaryItem;
