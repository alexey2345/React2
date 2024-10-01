import UsersTable from '../components/usersTable'
import UsersTableRow from '../components/usersTableRow'
import './App.css'


function App() {
  return (
    <table className="table table-dark table-striped">
      <UsersTable />
    <UsersTableRow />
  </table>
  )
}

export default App
