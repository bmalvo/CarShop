import style from './style.module.scss'
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';


type StepperProps = {

    step: 'body-type' | 'drive' | 'paint' | 'summary';
}

export const Stepper = ({ step }: StepperProps) => {
    
    // const steps = ['body-type', 'drive', 'paint', 'summary']

    return <>
        <div className={style.stepper}>
            <div className={`${style.step} ${step === 'body-type' ? style.active: ''}`}>body-type</div>
            <div className={`${style.step} ${step === 'drive' ? style.active: ''}`}>drive</div>
            <div className={`${style.step} ${step === 'paint' ? style.active: ''}`}>paint</div>
            <div className={`${style.step} ${step === 'summary' ? style.active: ''}`}>summary</div>
        </div>
    </>
}