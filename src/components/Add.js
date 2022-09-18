import React, { useState, useEffect } from 'react'
import Checkbox from '@mui/material/Checkbox';





const Add = (props) => {
  let emptyDay = {bloody: 'false', date: '', flow: '', cramps: 'false', migraine: 'false', bloating: 'false', emo: 'false', anger: 'false', food: 'false', sex: 'false', nausea: 'false', sore: 'false', fatigue: 'false', aches: 'false', patriarchy: 'true'}
  const [day, setDay] = useState(emptyDay)

// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.value })
  }

  const handleChecked = (event) => {
  setDay({...day, [event.target.name]: event.target.checked})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(day)

  }

  return (
    <>
    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Add Flow
    </button>
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keybaord="false" tabindex="-1" aria-labeledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">Add Flow</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
          <form className="form-control" onSubmit={handleSubmit}>
              <div className="form-check">
              <label htmlFor="bloody"><b>Flow: </b></label>
              <Checkbox color="default" name="bloody" value={day.bloody} onChange={handleChecked}/> </div> 
                <div className="">
                  <div className="select-date">
                  <label htmlFor="date"><b>Date of flow: </b> </label>
                  <input type="date" name="date" style={{width: '18rem'}} value={day.date} onChange={handleChange}/> <br/>
                  </div>
                  <div className="select-box">
                  <label htmlFor="flow"><b>Level of Flow:</b></label>
                  <select  className="flow-select" style={{width: '18rem'}} name="flow" onChange={handleChange}>
                  <option disabled selected>Select Level of Flow:</option>
                  <option value="Spotting" >Spotting</option>
                  <option value="Light" >Light</option>
                  <option value="Medium" >Medium</option>
                  <option value="Heavy" >Heavy</option>
                  </select></div> 
                </div>
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
            <div className="modal-footer button-box">
              <input className="btn add-flow" type="submit"/>
              <button type="button" className="btn" data-bs-dismiss="modal">Close</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default Add
