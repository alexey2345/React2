import UsersTableRow from "./usersTableRow"


function UsersTable (){
    return (
<thead>
        <tr>
        <th scope="col">#</th>
        <th scope="col">status</th>
        <th scope="col">name</th>
        <th scope="col">username</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
        <th scope="col">location</th>
      </tr>
 </thead>     
    )
    
}

export default UsersTable;