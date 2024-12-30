import { useShallow } from "zustand/shallow"
import { usePersonalData } from "../store/usePersonalData"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderAccess = (step: 'body-type' | 'drive' | 'paint' | 'summary' | 'success') => {

    const { bodyType, driveType} = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, driveType: state.driveType })))

    const navigate = useNavigate();
    
    const isBodyTypeFilled = () => {

        return bodyType;
    }

    const isBodyDriveFilled = () => {

        return bodyType && driveType
    }

    useEffect(() => {

        switch (step) {
            
            case 'drive': {
                
                if (!isBodyTypeFilled()) navigate({ to: '/' });
                break;
            }
                
            case 'paint': {
                
                if(!isBodyDriveFilled()) navigate({ to: '/'})
                }
        }
    },)
}