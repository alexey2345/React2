import setCounter from "./variables";
import isMin from "./variables";
import isMax from "./variables";
function handles (){
    const handleAdd = () => {
        if (isMax) {
          return;
        }
    
        setCounter((counter) => counter + 1);
      };
      const handleSub = () => {
        if (isMin) {
          return ;
        }
    
        setCounter((counter) => counter - 1);
      };
   return handleSub , handleAdd
}
export default handles