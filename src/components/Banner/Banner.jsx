import React from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../constants/Constants'
import "./Banner.css"
import { useEffect,useState } from 'react'
import YouTube from 'react-youtube'
import Modal from 'react-modal'

function Banner() {
  const [movie, setMovie] = useState();
  const [urlId, setUrlId] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(
          response.data.results.sort(() => 0.5 - Math.random())[0]
        );
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          setMovie(
            response.data.results.sort(() => 0.5 - Math.random())[0]
          );
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const opts = {
    height: '448',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key);
          setModalIsOpen(true);
        } else {
          alert("Trailer Not Available");
        }
      });
  };
  

  const onOpenModal = () => {
    setModalIsOpen(true);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${
            movie ? imageUrl + movie.backdrop_path : ''
          })`,
        }}
        className='banner'
      >
        <div className='content-ban'>
          <h1 className='title'>{movie ? movie.title || movie.name : ''}</h1>
          <div className='banner_buttons'>
            <button
              onClick={() => handleMovie(movie.id)}
              className='button'
            >
              Play
            </button>
            <Modal isOpen={modalIsOpen} onRequestClose={onCloseModal} style={{ content: { width: '60%', height: '60%', margin: 'auto' } }}>
            {urlId && <YouTube videoId={urlId} opts={opts} />}
          </Modal>

            <button className='button'>My List</button>
          </div>
          <h1 className='description'>{movie ? movie.overview : ''}</h1>
        </div>
        <div className="fade_bottom-ban">
            
        </div>

    </div>

    </div>
  )
}

export default Banner
