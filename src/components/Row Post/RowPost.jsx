
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/Constants'
import "./RowPost.css"
import Modal from 'react-modal'

import YouTube from 'react-youtube'

function RowPost(props) {
  const[movie,setMovie]=useState([])
  const [urlId,setUrlId]=useState('')
  
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      
      setMovie(response.data.results)
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0].key); // set the trailer video id
          onOpenModal(); // open the modal to show the trailer
        } else {
          alert("Trailer Not Available");
        }
      });
  };
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onOpenModal = () => {
    setModalIsOpen(true);
  }

  const onCloseModal = () => {
    setModalIsOpen(false);
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">


          {
            movie.map((obj)=>

              <img onClick={()=>handleMovie(obj.id , onOpenModal)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageUrl + obj.backdrop_path}`} alt="posters" />              
            )
          }
        </div>
        <Modal isOpen={modalIsOpen} onRequestClose={onCloseModal} style={{ content: { width: '60%', height: '60%', margin: 'auto' } }}>

        <YouTube opts={opts} videoId={urlId} />

        
        </Modal>
      </div>
  )
}

export default RowPost