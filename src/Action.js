import { ADD, DELETE, EDIT} from "./actions-types"

export const add = newPost => {
    return {
        type: ADD,
        payload: newPost
    }
}

export const Delete = newPost => {
    return {
        type: DELETE,
        payload: newPost
    }
}

export const edit = newPost => {
    return {
        type: EDIT,
        payload: newPost
    }
}

