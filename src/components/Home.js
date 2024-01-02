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
      <div>
        <h2>Welcome to iNoteBook</h2>
      </div>
      <Notes showAlert={showAlert} />
      <Footer />
    </>
  )
}

export default Home