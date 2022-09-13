import React, { useState, useEffect } from 'react'

const Add = (props) => {
  let emptyDay = {bloody: '', date: '', flow: '', cramps: '', migraine: '', bloating: '', emo: '', anger: '', food: '', sex: '', nausea: '', sore: '', fatigue: '', aches: '', patriarchy: ''}
  const [day, setDay] = useState(emptyDay)

  const handleChange = (event) => {
    setDay({ ...day, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(day)
  }




  return (
    <>
      <form className="new-form">
        <label htmlFor="date">Date: </label>
        <input type="date" name="date" />
        <div className="form-check">
        <label htmlFor="bloody">Bleeding?: </label>
        <input type="checkbox" name="bloody" />
        </div>
        <select className="form-select" htmlFor="flow">
        <option selected>Level of flow: </option>
        <option value="Spotting">Spotting</option>
        <option value="Light">Light</option>
        <option value="Medium">Medium</option>
        <option value="Heavy">Heavy</option>
        </select>
        <br/>
        Symptoms:
        <br/>
        <div className="form-check">
        <label htmlFor="cramps">Cramps?: </label>
        <input type="checkbox" name="cramps" />
        </div>
        <div className="form-check">
        <label htmlFor="migraine">Migraine/Headache?: </label>
        <input type="checkbox" name="migraine" />
        </div>
        <div className="form-check">
        <label htmlFor="bloating">Bloating?: </label>
        <input type="checkbox" name="bloating" />
        </div>
        <div className="form-check">
        <label htmlFor="emo">Emotionally sensitive?: </label>
        <input type="checkbox" name="emo" />
        </div>
        <div className="form-check">
        <label htmlFor="anger">Angry?: </label>
        <input type="checkbox" name="anger" />
        </div>
        <div className="form-check">
        <label htmlFor="food">Food cravings?: </label>
        <input type="checkbox" name="food" />
        </div>
        <div className="form-check">
        <label htmlFor="sex">Sexual cravings?: </label>
        <input type="checkbox" name="sex" />
        </div>
        <div className="form-check">
        <label htmlFor="nausea">Nauseated?: </label>
        <input type="checkbox" name="nausea" />
        </div>
        <div className="form-check">
        <label htmlFor="sore">Breast tenderness?: </label>
        <input type="checkbox" name="sore" />
        </div>
        <div className="form-check">
        <label htmlFor="fatigue">Fatigue?: </label>
        <input type="checkbox" name="fatigue" />
        </div>
        <div className="form-check">
        <label htmlFor="aches">Body aches?: </label>
        <input type="checkbox" name="aches" />
        </div>
        <div className="form-check">
        <label htmlFor="patriarchy">Under the thumb of the Patriarchy? </label>
        <input type="checkbox" name="patriarchy" checked />
        </div>

        <input type="submit"/>
      </form>
    </>
  )
}

export default Add
