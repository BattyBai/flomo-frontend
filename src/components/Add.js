import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  color: 'darkred',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Add = (props) => {
  let emptyDay = {bloody: 'false', date: '', flow: '', cramps: 'false', migraine: 'false', bloating: 'false', emo: 'false', anger: 'false', food: 'false', sex: 'false', nausea: 'false', sore: 'false', fatigue: 'false', aches: 'false', patriarchy: 'true'}
  const [day, setDay] = useState(emptyDay)

  const [openX, setOpenX] = React.useState(false);
  const handleOpenX = () => setOpenX(true);
  const handleCloseX = () => setOpenX(false);

  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.value })
  }

  const handleChecked = (event) => {
  setDay({...day, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(day)
    handleCloseX()

  }

  return (
    <>
    <Button className="btn btn-danger add-flow" onClick={handleOpenX}>Add Flow</Button>
      <Modal open={openX} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h5" compontent="h2">
        <b>Add Flow</b>
      </Typography>
      <form className="form-control" onSubmit={handleSubmit}>
        <div className="form-check">
        <label htmlFor="bloody">Had Flow: </label>
        <Checkbox  name="bloody" value={day.bloody} onChange={handleChecked}/> </div>
        <label htmlFor="date"><b>Date of flow: </b> </label>
        <input type="date" name="date" style={{width: '18rem'}} value={day.date} onChange={handleChange}/> <br/>


        <br/>
        <div>
        <label htmlFor="flow"></label>
        <select  className="flow-select" style={{width: '18rem'}} name="flow" onChange={handleChange}>
        <option disabled selected>Select Level of Flow:</option>
        <option value="Spotting" >Spotting</option>
        <option value="Light" >Light</option>
        <option value="Medium" >Medium</option>
        <option value="Heavy" >Heavy</option>
        </select></div>
        <br/>
        <b>Symptoms:</b>
        <br/>
        <div className="form-check">
        <label htmlFor="cramps">Cramps?: </label>
        <Checkbox color="default" type="checkbox" name="cramps" value={day.cramps} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="migraine">Migraine/Headache?: </label>
        <Checkbox color="default" type="checkbox" name="migraine" value={day.migraine} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="bloating">Bloating?: </label>
        <Checkbox color="default" type="checkbox" name="bloating" value={day.bloating} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="emo">Emotionally sensitive?: </label>
        <Checkbox color="default" type="checkbox" name="emo" value={day.emo} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="anger">Angry?: </label>
        <Checkbox color="default" type="checkbox" name="anger" value={day.anger} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="food">Food cravings?: </label>
        <Checkbox color="default" type="checkbox" name="food" value={day.food} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="sex">Sexual cravings?: </label>
        <Checkbox color="default" type="checkbox" name="sex" value={day.sex} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="nausea">Nauseated?: </label>
        <Checkbox color="default" type="checkbox" name="nausea" value={day.nausea} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="sore">Breast tenderness?: </label>
        <Checkbox color="default" type="checkbox" name="sore" value={day.sore} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="fatigue">Fatigue?: </label>
        <Checkbox color="default" type="checkbox" name="fatigue" value={day.fatigue} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="aches">Body aches?: </label>
        <Checkbox color="default" type="checkbox" name="aches" value={day.aches} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="patriarchy">Under the thumb of the Patriarchy? </label>
        <Checkbox  color="default" type="checkbox" name="patriarchy"  value={day.patriarchy} checked onChange={handleChecked}/>
        </div>
        <div className="button-box">
        <input className="btn add-flow" type="submit"/>
        <button className="btn close" onClick={handleCloseX}>Exit</button>
        </div>
      </form>
      </Box>
      </Modal>
    </>
  )
}

export default Add
