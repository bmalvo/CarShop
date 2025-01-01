import { useShallow } from "zustand/shallow"
import { usePersonalData } from "../store/usePersonalData"
import { useEffect } from "react"
import { useNavigate } from "@tanstack/react-router"

export const useOrderRedirect = () => {

    const { bodyType, driveType} = usePersonalData(useShallow(state => ({ bodyType: state.bodyType.name, driveType: state.driveType.name})))

    const navigate = useNavigate();
    
    const isBodyTypeFilled = () => {
        console.log(bodyType)
        return bodyType !== '';
    }
    console.log('isBody: ', isBodyTypeFilled())
    const isBodyAndDriveFilled = () => {

        return bodyType !== '' && driveType !== ''
    }
    console.log('boda and drive: ',isBodyAndDriveFilled())

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