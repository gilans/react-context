import  ActionTypes  from '../ActionTypes'


export default async (state, action) => {
    console.log('Reducing CargaStaff:', action.type);
    switch (action.type) {
        case ActionTypes.GET_PARAMS:
            console.log('Aca',state)
            return { parameters: ['gilberto', 'suarez', 'sofia'] }
        default:
            null
    }
}
