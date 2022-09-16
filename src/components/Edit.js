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
        <div >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Edit Flow:</h5>
              </div>
              <div className="modal-body">
                    <form className="form-control" onSubmit={handleSubmit}>
                        <label htmlFor="date">Date: </label>
                        <input type="date" name="date" value={day.date} onChange={handleChange} />
                        <label htmlFor="bloody">Bleeding? </label>
                        <input type="checkbox" name="bloody" defaultChecked={day.bloody} onChange={handleChange} />
                        <label htmlFor="flow">Flow: </label>
                        <select className="form-select form-select-sm" aria-label=".form-select-sm example" name="flow" onChange={handleChange}>
                          <option disabled selected>Select Level of Flow</option>
                          <option value="Spotting" >Spotting</option>
                          <option value="Light" >Light</option>
                          <option value="Medium" >Medium</option>
                          <option value="Heavy" >Heavy</option>
                        </select>
                        <h6>Symptoms</h6>
                        <div className="form-check">
                          <label htmlFor="cramps">Cramps: </label>
                          <input type="checkbox" name="cramps" defaultChecked={day.cramps} onChange={handleChange} />
                        </div>
                        <div className="form-check">
                        <label htmlFor="migraine">Migraine/Headache: </label>
                        <input type="checkbox" name="migraine" defaultChecked={day.migraine} onChange={handleChange}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="bloating">Bloating: </label>
                        <input type="checkbox" name="bloating" defaultChecked={day.bloating} onChange={handleChange}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="emo">Emotional Sensitivity: </label>
                        <input type="checkbox" name="emo" defaultChecked={day.emo} onChange={handleChange}/>
                        </div>
                        <div className="form-check">
                        <label htmlFor="anger">Angry: </label>
                        <input type="checkbox" name="anger" defaultChecked={day.anger} onChange={handleChange}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="food">Food Cravings: </label>
                        <input type="checkbox" name="food" defaultChecked={day.food} onChange={handleChange}/>
                        </div>
                        <div className="form-check">              
                        <label htmlFor="sex">Sex Cravings: </label>
                        <input type="checkbox" name="sex" defaultChecked={day.sex} onChange={handleChange}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="nausea">Nauseated: </label>
                        <input type="checkbox" name="nausea" defaultChecked={day.nausea} onChange={handleChange}/>
                        </div>
                        <div className="form-check">             
                        <label htmlFor="sore">Breast Tenderness: </label>
                        <input type="checkbox" name="sore" defaultChecked={day.sore} onChange={handleChange}/> 
                        </div>
                        <div className="form-check">         
                        <label htmlFor="fatigue">Fatigue: </label>
                        <input type="checkbox" name="fatigue" defaultChecked={day.fatigue} onChange={handleChange}/> 
                        </div>
                        <div className="form-check">            
                        <label htmlFor="aches">Body Aches: </label>
                        <input type="checkbox" name="aches" defaultChecked={day.aches} onChange={handleChange}/> 
                        </div>
                        <div className="form-check">          
                        <label htmlFor="patriarchy">Under the thumb of the Patriarchy: </label>
                        <input type="checkbox" name="patriarchy" defaultChecked={day.patriarchy} onChange={handleChange}/> 
                        </div>           
                        <input className="btn btn-success" type="submit" value="Update Flow"/>
                    </form>
              </div>
              <div className="modal-footer">
              </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Edit