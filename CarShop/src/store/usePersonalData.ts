import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PersonalData = {

    data: {
        firstName: string;
        lastName: string;
        email: string;
    },
    bodyType: {name: string, price: string},
    driveType: {name: string, price: string},
    paint: {name: string, price: string},
}

type PersonalDataActions = {

    setPersonalData: (payload: setPersonalDataAction) => void;
    setBodyType: (payload: {name: string, price: string}) => void;
    setDriveType: (payload: {name: string, price: string}) => void;
    setPaint: (payload: {name: string, price: string}) => void;
    placeOrder: () => void;
}

type setPersonalDataAction = {

    firstName: string;
    lastName: string;
    email: string;
};

const initialState: PersonalData = {
    data: {
                firstName: '',
                lastName: '',
                email: ''
            },
            bodyType: {name: '', price: ''},
            driveType: {name: '', price: ''},
            paint: {name: '', price: ''},
}

export const usePersonalData = create<PersonalData & PersonalDataActions>()(
    persist(
        
        set => ({
        
            ...initialState,
            setPersonalData: (payload: setPersonalDataAction) => set({
            
                data: payload
            }),
            setBodyType: (bodyType: {name: string, price: string}) => set({bodyType}),
            setDriveType: (driveType: {name: string, price: string}) => set({driveType}),
            setPaint: (paint: {name: string, price: string}) => set({ paint }),
            placeOrder: () => set(initialState)
        }),

        {
            name: 'personalData',
            version: 1
        })
);