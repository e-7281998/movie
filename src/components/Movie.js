import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from '../css/Movie.module.css';

function Movie({ coverImg, id, title, summary, genres }) {
    return (
        <div className={styles.movie}>
            <img className={styles.poster} src={coverImg} />
            <p className={styles.summary}>{summary.length > 250 ? `${summary.slice(0, 250)}...` : summary}</p>
            <h2>
                <NavLink to={`/movie/${id}`}>{title}</NavLink>
            </h2>
            <ul className={styles.genre}>
                {genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;