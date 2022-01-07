import DiaryItem from './DiaryItem';

const DiaryList = ({ diaryList }) => {
    return (
        <div className='DiaryList'>
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}의 일기 리스트가 존재합니다</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={`diaryitem_${it.id}`} {...it} />
                ))}
            </div>
        </div>
    );
};

export default DiaryList;
