import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Add from './components/Add'
import Login from './components/Login'
import Edit from './components/Edit'
import ReactModal from 'react-modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const App = () => {
  let [flow, setFlow] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
const getFlow = () => {
  axios
    .get('http://localhost:8000/api/flomo')
    .then(
      (response) => setFlow(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }

const handleCreate = (addDay) => {
  axios.post('http://localhost:8000/api/flomo', addDay)

    .then((response) => {
      console.log(response)
      setFlow([...flow, response.data])
    })
  }

  const handleDelete = (event) => {
    axios
      .delete('http://localhost:8000/api/flomo/' + event.target.value)
      .then((response) => {
        getFlow()
      })
  }
  
  const handleUpdate = (editDay) => {
    axios.put('http://localhost:8000/api/flomo/' + editDay.id, editDay)
    .then((response) => {
      setFlow(flow.map((day) => {
        return day.id !== editDay.id ? day : editDay
      }))
    })
  }


useEffect(() => {
  getFlow()
}, [])

  return(
    <>
    <Login />
      <section className="container">
        <h1>Bloody Flomo</h1>
        <Add handleCreate={handleCreate} />
          <div className="flomo">
            {flow.map((day) => {
              return (
                  <>
                <div className="card show-card" style={{width: "10rem;"}} key={day.id}>
                  <div className="card-body">
                  <h5 claslName="card-title">Day: {day.date}</h5>
                  <h6> {day.bloody ? "Bled" : null}</h6>
                  <p className="card-text"> {day.bloody ? day.flow : null}</p>
                  <h6 className="card-subtitle mb-2 text-muted">Symptoms</h6>
                  <ul className="list-group list-group-flush">
                  {day.cramps ?<li className="list-group-item">Cramps</li> : null}
                  {day.migraine ?<li className="list-group-item">Migraine</li> : null}
                  {day.bloating ? <li className="list-group-item">Bloating</li> : null}
                  {day.emo ? <li className="list-group-item">Emotional</li> : null}
                  {day.anger ? <li className="list-group-item">Angry</li> : null}
                  {day.food ? <li className="list-group-item">Food cravings</li> : null}
                  {day.sex ? <li className="list-group-item">Sexual craving</li> : null}
                  {day.nausea ? <li className="list-group-item">Nausea</li> : null}
                  {day.sore ? <li className="list-group-item">Tender</li> : null}
                  {day.fatigue ? <li className="list-group-item">Fatigue</li> : null}
                  {day.aches ? <li className="list-group-item">Body aches</li> : null}
                  {day.patriarchy ?<li className="list-group-item">Under the thumb of the Patriarchy</li> : null}
                  </ul>
                  </div>
                </div> 
                <Button onClick={handleOpen}>Edit Flow</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
                    <Edit handleUpdate={handleUpdate} day={day}/>
                  </Modal>
                <button className="btn btn-danger" onClick={handleDelete} value={day.id}> Delete Day</button>
                </>
              )
            })}
          </div>
      </section>
    </>
  )


}

export default App;
