import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  let [flow, setFlow] = useState([])


const getFlow = () => {
  axios
    .get('http://localhost:8000/api/flomo')
    .then(
      (response) => setFlow(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
  }

useEffect(() => {
  getFlow()
}, [])


  return(
    <section>
      <h1>Bloody Flomo</h1>
        <div className="flomo">
          {flow.map((day) => {
            return (
              <div className="day" key={day.id}>
                <h4>Day: {day.date}</h4>
                <h5> {day.bloody ? "Bled" : null}</h5>
                <h5> {day.blood ? day.flow : null}</h5>
                <h4>Symptoms</h4>
                <h5> {day.cramps ? "Cramps" : null}</h5>
                <h5> {day.migraine ? "Migraine" : null}</h5>
                <h5> {day.bloating ? "Bloating" : null}</h5>
                <h5> {day.emo ? "Emotional" : null}</h5>
                <h5> {day.anger ? "Angry" : null}</h5>
                <h5> {day.food ? "Food cravings" : null}</h5>
                <h5> {day.sex ? "Sexual craving" : null}</h5>
                <h5> {day.nausea ? "Nausea" : null}</h5>
                <h5> {day.sore ? "Tender" : null}</h5>
                <h5> {day.fatigue ? "Fatigue" : null}</h5>
                <h5> {day.aches ? "Body aches" : null}</h5>
                <h5> {day.patriarchy ? "Under the thumb of the Patriarchy" : null}</h5>
              </div>
            )
          })}
        </div>
    </section>
  )


}

export default App;
