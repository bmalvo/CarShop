import { useShallow } from "zustand/shallow"
import { usePersonalData } from "../store/usePersonalData"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderRedirect = () => {

    const { bodyType, driveType} = usePersonalData(useShallow(state => ({ bodyType: state.bodyType, driveType: state.driveType})))

    const navigate = useNavigate();
    
    const isBodyTypeFilled = () => {

        return bodyType;
    }

    const isBodyAndDriveFilled = () => {

        return bodyType && driveType
    }

    useEffect(() => {
        if (isBodyAndDriveFilled()) {
            
            navigate({ to: '/paint' })
            return
        }
        if (isBodyTypeFilled()) {

            navigate({ to:'/drive'})
        }
    },)
}