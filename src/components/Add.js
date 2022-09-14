import React, { useState, useEffect } from 'react'

const Add = (props) => {
  let emptyDay = {bloody: 'false', date: '', flow: '', cramps: 'false', migraine: 'false', bloating: 'false', emo: 'false', anger: 'false', food: 'false', sex: 'false', nausea: 'false', sore: 'false', fatigue: 'false', aches: 'false', patriarchy: 'false'}
  const [day, setDay] = useState(emptyDay)

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
      <form className="new-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" value={day.date} onChange={handleChange}/>
        <div className="form-check">
        <label htmlFor="bloody">Bleeding?: </label>
        <input type="checkbox" name="bloody" value={day.bloody} onChange={handleChecked}/>
        </div>
        <label htmlFor="flow">Flow: </label>
        <select name="flow" onChange={handleChange}>
        <option disabled selected>Select Level of Flow</option>
        <option value="Spotting" >Spotting</option>
        <option value="Light" >Light</option>
        <option value="Medium" >Medium</option>
        <option value="Heavy" >Heavy</option>
        </select>

        <br/>
        Symptoms:
        <br/>
        <div className="form-check">
        <label htmlFor="cramps">Cramps?: </label>
        <input type="checkbox" name="cramps" value={day.cramps} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="migraine">Migraine/Headache?: </label>
        <input type="checkbox" name="migraine" value={day.migraine} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="bloating">Bloating?: </label>
        <input type="checkbox" name="bloating" value={day.bloating} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="emo">Emotionally sensitive?: </label>
        <input type="checkbox" name="emo" value={day.emo} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="anger">Angry?: </label>
        <input type="checkbox" name="anger" value={day.anger} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="food">Food cravings?: </label>
        <input type="checkbox" name="food" value={day.food} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="sex">Sexual cravings?: </label>
        <input type="checkbox" name="sex" value={day.sex} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="nausea">Nauseated?: </label>
        <input type="checkbox" name="nausea" value={day.nausea} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="sore">Breast tenderness?: </label>
        <input type="checkbox" name="sore" value={day.sore} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="fatigue">Fatigue?: </label>
        <input type="checkbox" name="fatigue" value={day.fatigue} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="aches">Body aches?: </label>
        <input type="checkbox" name="aches" value={day.aches} onChange={handleChecked}/>
        </div>
        <div className="form-check">
        <label htmlFor="patriarchy">Under the thumb of the Patriarchy? </label>
        <input type="checkbox" name="patriarchy"  value={day.patriarchy} onChange={handleChecked}/>
        </div>

        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
