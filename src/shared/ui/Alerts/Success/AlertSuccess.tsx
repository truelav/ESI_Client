import { Alert, AlertIcon, AlertTitle, Box, AlertDescription, CloseButton } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface AlertProps {
    isOpen: boolean
    setShowSuccessAlert: (arg: boolean) => void
}

export const AlertSuccess = ({ isOpen, setShowSuccessAlert }: AlertProps) => {
    let content 

    if(isOpen){
        content = (
            <Alert status='success'>
                <AlertIcon />
                <Box>
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>
                        The Product was added to Cart
                        <Link to="cart">Go to Cart</Link>
                    </AlertDescription>
                </Box>
                <CloseButton
                    alignSelf='flex-start'
                    position='relative'
                    right={-1}
                    top={-1}
                    onClick={() => setShowSuccessAlert(false)}
                />
            </Alert>
        )
    } else {
        content = <></>
    }
    return (<>{content}</>) 
}