import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface FormDataState {
    title: string,
    firstName: string,
    lastName: string,
    birthDate: string,
    nationality: string,
    idCard: string,
    gender: string,
    phoneNumber: string,
    passportId: string,
    salary: number
}

const initialState: FormDataState = {
    title: '',
        firstName: '',
        lastName: '',
        birthDate: '',
        nationality: '',
        idCard: '',
        gender: '',
        phoneNumber: '',
        passportId: '',
        salary: 0
}

export const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<FormDataState>) => {
            state.title = action.payload.title
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.birthDate = action.payload.birthDate
            state.nationality = action.payload.nationality
            state.idCard = action.payload.idCard
            state.gender = action.payload.gender
            state.phoneNumber = action.payload.phoneNumber
            state.passportId = action.payload.passportId
            state.salary = action.payload.salary

            const lists = []
            lists.push(state);

            localStorage.setItem('listsData', JSON.stringify(lists))
        },
        clearData: (state) => {
            state.title = ''
            state.firstName = ''
            state.lastName = ''
            state.birthDate = ''
            state.nationality = ''
            state.idCard = ''
            state.gender = ''
            state.phoneNumber = ''
            state.passportId = ''
            state.salary = 0
        },
    },
})

export const { addData, clearData } = formDataSlice.actions

export default formDataSlice.reducer