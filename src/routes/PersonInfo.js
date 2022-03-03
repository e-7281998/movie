import styles from '../css/Person.module.css';

function PersonInfo({ cast }) {
    return (
        <>
            <ul>
                {cast.map((item, i) =>
                    <li className={styles.charctor} key={i}>
                        {item.url_small_image ? <p><img src={item.url_small_image} alt={item.name} /></p> : <p className={styles.noImg} >이미지 정보 없음</p>}
                        <p>{item.character_name}<br />({item.name})</p>
                    </li>
                )}
            </ul>
        </>
    )
}

export default PersonInfo;