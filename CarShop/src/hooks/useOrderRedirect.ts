import { useShallow } from "zustand/shallow"
import { usePersonalData } from "../store/usePersonalData"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderRedirect = () => {

    const { bodyType, driveType } = usePersonalData(useShallow(state => ({ bodyType: state.bodyType.name, driveType: state.driveType.name })))

    const navigate = useNavigate();
    
    const isBodyTypeFilled = () => {
        return bodyType.length > 0;
    }

    const isBodyAndDriveFilled = () => {

        return bodyType.length > 0 && driveType.length > 0
    }

    useEffect(() => {
        if (isBodyAndDriveFilled()) {
            
            navigate({ to: '/paint' })
            return
        }
        if (isBodyTypeFilled()) {

            navigate({ to: '/drive' })
        }
    },)
};