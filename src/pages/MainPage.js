import { useState  } from 'react';
import Modal from 'react-modal';

import '../App.css';
// import Header from '../components/Header';
// import TrackerContainer from '../containers/TrackerContainer';
// import UserContext from '../context/UserContext';
import useToggle from '../hooks/useToggle';

const MainPage = () => {

    const [name, setName] = useState('');
    const [isModalOpen, setIsModalOpen] = useToggle(true);

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
            <Modal
                isOpen={isModalOpen}
                ariaHideApp={false}
                contentLabel="User options"
            >
                <label htmlFor='name'>Your name: </label>
                <input type="text" name="name" placeholder={name} onChange={handleNameChange} required />
                <br></br>
                <button onClick={setIsModalOpen}>OK</button>
            </Modal>

            {/* <Header name={name}/> */}

        </>
    )
}

export default MainPage;