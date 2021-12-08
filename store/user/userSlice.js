import {createSlice} from '@reduxjs/toolkit'


const userSlice = createSlice({
    name: 'user',
    initialState:{
        userUid: ``
      },
      reducers:{
        setUserUid(state,action){
            state.userUid = action.payload
        }
    }
})
export const {setUserUid} = userSlice.actions

export default userSlice.reducer