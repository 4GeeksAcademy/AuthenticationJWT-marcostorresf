export const signup = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/signup", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: {
            email: payload.email,
            password: payload.password

        }
    });
    let data = await response.json();


   
       
}


export const login = async (dispatch, payload) => {
    let response = await fetch(import.meta.env.VITE_BACKEND_URL + "/login", {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: {
            email: payload.email,
            password: payload.password

        }
    });
    let data = await response.json();
    
    dispatch({
        type: "set_user",
        payload: { user: data.user, access_token: data.access_token },

    });
       
}

// export const private = async (dispatch, payload) => {

//     dispatch({
//         type: "set_agenda",
//         payload: { agenda: data.slug, contacts: data.contacts },

//     });
       
// }