
import './App.css'




function Users({ userName ,email,password,full_name}){
return(
<div>
  <h2>{userName}</h2>
  <p>{email}</p>
  <p>{password}</p>
  <p>{full_name}</p>
</div>)}

function App() {
  return (
    <div>
      <Users userName="aldorado23"
      email ="asdasdsd@dasda.com"
      password ="sdasdad46"
      full_name = "alde easdasd"
       />
      <Users/>
    </div>
  )
}

export default App
