import otherActions from './otherActions'
import cargaStaffActions from './cargaStaff/actions'

const ActionTypes = {
   ...cargaStaffActions,
   ...otherActions
}

export default ActionTypes