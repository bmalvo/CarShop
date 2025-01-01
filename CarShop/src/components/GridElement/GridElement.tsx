import { Box, styled } from "@mui/material";
import { ReactNode } from "@tanstack/react-router"

type GridElementProps = {

    children: ReactNode;
}

const GridContainer = styled(Box)({

    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: 8
})

export const GridElement = ({children}: GridElementProps) => {

    return (
        <GridContainer >
            {children}
        </GridContainer>
    )
}