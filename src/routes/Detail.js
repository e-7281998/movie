import {
    useParams,
    useNavigate
} from 'react-router-dom';
import {
    useEffect,
    useState
} from 'react';
import Info from './Info';
import PersonInfo from './PersonInfo';
import Story from './Story';
import styles from '../css/Detail.module.css';

function Detail() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    const [state, setState] = useState('0');
    const navigate = useNavigate();

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_cast=true`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);

    const onState = (e) => {
        setState(e.target.value);
    }

    return (
        <>
            {loading ? <p className={styles.loading}>Loading...</p>
                :
                (<div className={styles.movie}>
                    <img src={movie.medium_cover_image} />
                    <div className={styles.info}>
                        <h1>{movie.title}</h1>
                        <div className={styles.button}>
                            <button className={state === '0' ? styles.on : ''} onClick={onState} value='0'>기본 정보</button>
                            <button className={state === '1' ? styles.on : ''} onClick={onState} value='1'>줄거리</button>
                            <button className={state === '2' ? styles.on : ''} onClick={onState} value='2'>출연 정보</button>
                        </div>
                        <div className={styles.text}>
                            {state === '0' ? <Info movie={movie} genre={movie.genres} /> : null}
                            {state === '1' ? <Story description={movie.description_full} /> : null}
                            {state === '2' ? (movie.cast ? <PersonInfo cast={movie.cast} /> : <p>등록된 출연 정보가 없습니다.</p>) : null}
                        </div>
                    </div>
                    <button className={styles.back} onClick={() => navigate(-1)}>뒤로가기</button>
                </div>
                )}
        </>
    );
}

export default Detail;