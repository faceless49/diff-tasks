const initState = {
    isLoading: false
}

export type InitialStateType = {
    isLoading: boolean
}
export type LoadingActionType = ReturnType<typeof loadingAC>

const LOADING = 'LOADING'


export const loadingReducer = (state:InitialStateType = initState, action: LoadingActionType): InitialStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {
                ...state, isLoading: action.isLoading
            }
        }
        default: return state
    }
}

export const loadingAC = (isLoading: boolean) => ({type: LOADING, isLoading} as const) // fix any

// *** Можешь подробно объяснить что решает as const? Как я понял нельзя задать loadingAC типизацию твоим способом
// *** Что лучше использовать? В твоем способе можно ошибиться прописывая типы экшена в LoadingActionType
// *** export const loadingAC = (isLoading: boolean):LoadingActionType => ({type: LOADING, isLoading})