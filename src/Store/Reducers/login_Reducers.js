export const login_Reduceds = (state=0, action) => {
  debugger;
    if (action.type == "MY_DATA") {
        return { ...action.payload }

    }
    else {

        return state
    }
}