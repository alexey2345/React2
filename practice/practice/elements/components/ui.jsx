
import handleAdd from "./variables"
import handleSub from "./variables"
import isMax from "./variables"
import isMin from "./variables"
import counter from "./variables"



function Ui (){
    
    return( 
        
         <div className="mt-3 d-flex justify-content-center">
        <button
          disabled={isMin}
          onClick={handleSub}
          className="btn btn-sm btn-danger"
        >
          -
        </button>
        <span className="mx-3">{counter}</span>
        <button
          disabled={isMax}
          onClick={handleAdd}
          className="btn btn-sm btn-success"
        >
          +
        </button>
      </div>)
      
}

export default Ui