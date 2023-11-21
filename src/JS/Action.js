import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "./Actiontype"





export const add_task=(newTask)=>{
    return{
        type:ADD_TASK,
        payload: newTask,
    }
}
export const delete_task=(id)=>{
    return {
        type:DELETE_TASK,
        payload:id

    }
}
export const done_task=(id)=>{
    return{
        type:DONE_TASK,
        payload:id
    }
}
export const edit_task=(id,newTask)=>{
    return{
        type: EDIT_TASK,
        payload:{id,newTask}
    }
}