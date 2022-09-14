import {useState} from 'react'

const Edit = (props) => {
  const [day, setDay] = useState({...props.day})

  const handleChange = (event) => {
    setDay({...day, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(day)
  }


  return (
    <>
      <details>
        <summary>Edit Day</summary>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date: </label>
            <input type="date" name="date" value={day.date} onChange={handleChange} />
            <br />
            <br />
            
            <label htmlFor="bloody">Bleeding? </label>
            <input type="checkbox" name="bloody" defaultChecked={day.bloody} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="flow">Flow: </label>
            <select name="flow" onChange={handleChange}>
            <option disabled selected>Select Level of Flow</option>
            <option value="Spotting" >Spotting</option>
            <option value="Light" >Light</option>
            <option value="Medium" >Medium</option>
            <option value="Heavy" >Heavy</option>
            </select>
            <br />
            <br />
            Symptoms:
            <br />
            <br />
            <label htmlFor="cramps">Cramps: </label>
            <input type="checkbox" name="cramps" defaultChecked={day.cramps} onChange={handleChange} />
            <br />
            <br />

            <label htmlFor="migraine">Migraine/Headache: </label>
            <input type="checkbox" name="migraine" defaultChecked={day.migraine} onChange={handleChange}/>
            
            <br />
            <br />

            <label htmlFor="bloating">Bloating: </label>
            <input type="checkbox" name="bloating" defaultChecked={day.bloating} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="emo">Emotional Sensitivity: </label>
            <input type="checkbox" name="emo" defaultChecked={day.emo} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="anger">Angry: </label>
            <input type="checkbox" name="anger" defaultChecked={day.anger} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="food">Food Cravings: </label>
            <input type="checkbox" name="food" defaultChecked={day.food} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="sex">Sex Cravings: </label>
            <input type="checkbox" name="sex" defaultChecked={day.sex} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="nausea">Nauseated: </label>
            <input type="checkbox" name="nausea" defaultChecked={day.nausea} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="sore">Breast Tenderness: </label>
            <input type="checkbox" name="sore" defaultChecked={day.sore} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="fatigue">Fatigue: </label>
            <input type="checkbox" name="fatigue" defaultChecked={day.fatigue} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="aches">Body Aches: </label>
            <input type="checkbox" name="aches" defaultChecked={day.aches} onChange={handleChange}/>
            
            <br />
            <br />
            <label htmlFor="patriarchy">Under the thumb of the Patriarchy: </label>
            <input type="checkbox" name="patriarchy" defaultChecked={day.patriarchy} onChange={handleChange}/>
            
            <br />
            <br />
            <input type="submit" value="Submit Edit"/>
        </form>
      </details>
    </>
  )
}

export default Edit