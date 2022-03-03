import styles from '../css/Info.module.css';

function Info({ movie }) {
    return (
        <>
            <p>Opening Year : {movie.year}</p>
            <p>Running Time : {movie.runtime}</p>
            <p>Rating : {movie.rating}</p>
            <ul>
                {/*  movie.genres.map((item, i) => (<li key={i}>{item}</li>))
                    데이터가 안들어와도 렌더링이 실행됨. 이때 undefined로 정의되어서 오류남
                    true && expression 은 실행되고, false && expression은 false로 실행됨
                    조건이 참이면 && 바로 뒤 요소가 출력되고, 거짓이면 무시하고 건너 뜀
                */}
                <p>Genre : </p>{movie.genres && movie.genres.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
        </>
    )
}

export default Info;