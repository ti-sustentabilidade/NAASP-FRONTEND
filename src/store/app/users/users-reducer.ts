import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: {},
  },
  reducers: {
    setUser: (state: any, { payload }) => {
      // console.log(action.payload)
      state.name = payload
    },
  },
})

export const { setUser } = userSlice.actions
export default userSlice.reducer
