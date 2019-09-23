import React from 'react'
import Toolbar from '../../toolbar';
import WrapperConsumer, {ActionTypes} from '../../store';


class CargaStaff extends React.Component{

   componentDidMount() {
      console.log(this.props);
      const {parameters, dispatch } = this.props.context
      if(!parameters.length){
         dispatch({type: ActionTypes.GET_PARAMS})
      }
   }

   render(){
      const {context:{parameters, dispatch}} = this.props;
      return (
         <div>
            <Toolbar />
            <h1>parameters</h1>
            <lu>
                {parameters.map(parameter=><li>{parameter}</li>)}
            </lu>
            <button onClick={e=>dispatch({type: ActionTypes.CHANGE_NAME})}>Cambiar nombre</button>
         </div>
      )
   }
}

export default WrapperConsumer(CargaStaff)