import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type PersonalData = {

    data: {
        firstName: string;
        lastName: string;
        email: string;
    },
    bodyType: string,
    driveType: string,
    paint: string,
    // setPersonalData: (payload: setPersonalDataAction) => void;
    // setBodyType: (payload: string) => void;
    // setDriveType: (payload: string) => void;
    // setPaint: (payload: string) => void;
}

type PersonalDataActions = {

    setPersonalData: (payload: setPersonalDataAction) => void;
    setBodyType: (payload: string) => void;
    setDriveType: (payload: string) => void;
    setPaint: (payload: string) => void;
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
            bodyType: '',
            driveType: '',
            paint: '',
}

export const usePersonalData = create<PersonalData & PersonalDataActions>()(
    persist(
        
        set => ({
        
            ...initialState,
            setPersonalData: (payload: setPersonalDataAction) => set({
            
                data: payload
            }),
            setBodyType: (bodyType: string) => set({bodyType}),
            setDriveType: (driveType: string) => set({driveType}),
            setPaint: (paint: string) => set({ paint }),
            placeOrder: () => set(initialState)
        }),

        {
            name: 'personalData',
            version: 1
        })
);