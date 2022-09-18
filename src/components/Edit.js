import React from 'react';
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Checkbox from '@mui/material/Checkbox';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Edit = (props) => {
  const [day, setDay] = useState({...props.day})
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event) => {
    setDay({...day, [event.target.name]: event.target.value})
  }
  const handleChecked = (event) => {
    setDay({...day, [event.target.name]: event.target.checked})
    }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(day)
    handleClose()
  }



  return (
    <>
    <Button onClick={handleOpen}>Edit Flow</Button>
    <Modal
                  open={open}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description">
        <Box sx={style}>
              <h5 variant="h6" component="h2" id="modal-modal-title">Edit Flow:</h5>
              <div className="modal-body">
                    <form className="form-control" onSubmit={handleSubmit} >
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="date" value={day.date} onChange={handleChange} /> <br/>
                        <label htmlFor="bloody"> Had Flow? </label>
                        <Checkbox color="default" type="checkbox" name="bloody" defaultChecked={day.bloody} onChange={handleChecked} />
                        <label htmlFor="flow"></label>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="flow" onChange={handleChange}>
                          <option disabled selected>Select Level of Flow</option>
                          <option value="Spotting" >Spotting</option>
                          <option value="Light" >Light</option>
                          <option value="Medium" >Medium</option>
                          <option value="Heavy" >Heavy</option>
                          <br/><br/>
                        </select>
                        <h6>Symptoms</h6>
                        <div className="form-check">
                          <label htmlFor="cramps">Cramps: </label>
                          <Checkbox color="default" type="checkbox" name="cramps" defaultChecked={day.cramps} onChange={handleChecked} />
                        </div>
                        <div className="form-check">
                        <label htmlFor="migraine">Migraine/Headache: </label>
                        <Checkbox color="default" type="checkbox" name="migraine" defaultChecked={day.migraine} onChange={handleChecked}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="bloating">Bloating: </label>
                        <Checkbox color="default" type="checkbox" name="bloating" defaultChecked={day.bloating} onChange={handleChecked}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="emo">Emotional Sensitivity: </label>
                        <Checkbox color="default" type="checkbox" name="emo" defaultChecked={day.emo} onChange={handleChecked}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="anger">Angry: </label>
                        <Checkbox color="default" type="checkbox" name="anger" defaultChecked={day.anger} onChange={handleChecked}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="food">Food Cravings: </label>
                        <Checkbox color="default" type="checkbox" name="food" defaultChecked={day.food} onChange={handleChecked}/>
                        </div>
                        <div className="form-check">              
                        <label htmlFor="sex">Sex Cravings: </label>
                        <Checkbox color="default" type="checkbox" name="sex" defaultChecked={day.sex} onChange={handleChecked}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="nausea">Nauseated: </label>
                        <Checkbox color="default" type="checkbox" name="nausea" defaultChecked={day.nausea} onChange={handleChecked}/>
                        </div>
                        <div className="form-check">             
                        <label htmlFor="sore">Breast Tenderness: </label>
                        <Checkbox color="default" type="checkbox" name="sore" defaultChecked={day.sore} onChange={handleChecked}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="fatigue">Fatigue: </label>
                        <Checkbox color="default" type="checkbox" name="fatigue" defaultChecked={day.fatigue} onChange={handleChecked}/> 
                        </div>
                        <div className="form-check">            
                        <label htmlFor="aches">Body Aches: </label>
                        <Checkbox color="default" type="checkbox" name="aches" defaultChecked={day.aches} onChange={handleChecked}/> 
                        </div>
                        <div className="form-check">          
                        <label htmlFor="patriarchy">Under the thumb of the Patriarchy: </label>
                        <Checkbox color="default" type="checkbox" name="patriarchy" defaultChecked={day.patriarchy} onChange={handleChecked}/> 
                        </div> 
                        <div className="button-box">         
                        <input className="btn add-flow" type="submit" value="Update Flow"/>
                        <button className="btn close" onClick={handleClose}>Exit</button>
                        </div> 
                    </form>
              </div>
          </Box>
        </Modal>
    </>
  )
}

export default Edit