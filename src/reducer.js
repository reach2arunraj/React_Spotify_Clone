export const initialState = {
    user : null,
    playlists: [],
    playing: false,
    item: null,
    // token: "BQCYgeUmSV75moRvOxdGcD1k-pPC66q-9mWDvej5BFFn5M9ga0p1FNkNeTAG7ZqDKmgrRXpYffKOveN28vgaNqE8pBvVqNn6ZVAd4F12szxwmLwWpI-gcKlGDLpklujQo7NqEC5ShWvherJ7IMrti0urmDz-jtUu8y18CFovAYtaQg8Z"
}

const reducer = (state, action) => {
    console.log(action)
    // Action ==> type, [payload]
    switch(action.type){
        case "SET_USER":
            return{
                ...state, user:action.user
            };
        case "SET_TOKEN":
            return {
                ...state, token : action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state, playlists : action.playlists
            }
        default:
            return state;    
    }
}

export default reducer;