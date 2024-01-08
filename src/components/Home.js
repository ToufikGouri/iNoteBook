import { useContext, useEffect } from 'react';
import Logout from './Logout';
import Notes from './Notes';
import noteContext from '../context/notes/noteContext';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer'

const Home = (props) => {
  const { showAlert } = props;

  const context = useContext(noteContext);
  const { getNotes } = context;
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token')) {
      getNotes()
    }
    else {
      navigate('/logout');
    }
  }, [])

  return (
    <>
      <div className='container my-3 d-flex flex-column align-items-center'>
        <div>
          <h1 className='border-bottom'>Welcome to iNoteBook</h1>
        </div>
        <Notes showAlert={showAlert} />
        <Footer />
      </div>
    </>
  )
}

export default Home