import UsersTableRow from "./usersTableRow";

function UsersTable() {

    const user ={
        name: "alexey",
        email: "a@gmail.com",
        address: "haifa",
        bio: "fullstack developer",
        nickname: "alex"
    }
    return(
        <table className="table table-striped table-dark table hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Bio</th>
      <th scope="col">Nickname</th>
    </tr>
  </thead>
  <tbody>
<UsersTableRow name ={user.name} 
email={user.email}
address={user.address}
 bio={user.bio} 
 nickname = {user.nickname} />
 <UsersTableRow user ={user}/>

  </tbody>
</table>
    )
}

export default UsersTable;