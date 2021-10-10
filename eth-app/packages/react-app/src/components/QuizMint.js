import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { mintToken } from "./helpers/interact.js";
import { SpecialLink, QuizImage } from './styling';

import logo from "../assets/poe.png";

import { storeQuizData } from './helpers/quizStorage';

const QuizMint = (props) => {

    const imageId = '0';
    const account = props.account;
    const provider = props.provider;
    const score = props.score;
    const quiz = props.quiz;
    const [status, setStatus] = useState("");
    const [successful, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);
    const [tokenURI, setTokenURI] = useState("");
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onMintPressed = async () => {
        const metadata = await storeQuizData(quiz, account, score, imageId);
        if (metadata) {
            setTokenURI(metadata.url);
            console.log(tokenURI);
            const { success, status } = await mintToken(account, provider, tokenURI);
            setStatus(status);
            if (success) {
                setSuccess(true);
            } else {
                setSuccess(false);
            }
        }
        handleOpen();
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        boxShadow: 24,
    };

    return (
        <div>
            <Button variant="outlined" size="small" onClick={onMintPressed} disabled={successful}>Mint</Button>
            <Modal
                disableEscapeKeyDown
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                { successful 
                    ?
                    <Box sx={style}>
                        <QuizImage src={logo} />
                        <Typography id="modal-modal-title" variant="h5" align='center'>
                            {quiz} Certificate
                        </Typography>
                        <Typography variant='h6' id="modal-modal-description" align='center' sx={{ mt: 2 }}>
                            Address
                        </Typography>
                        <Typography variant='body1' id="modal-modal-description" align='center'>
                            {account}
                        </Typography>
                        <Typography variant='h6' id="modal-modal-description" align='center' sx={{ mt: 2 }}>
                            Score
                        </Typography>
                        <Typography variant='body1' id="modal-modal-description" align='center'>
                            {score}%
                        </Typography>
                        <Typography variant='body1' id="modal-modal-description" align='center' sx={{ mt: 2 }}>
                            {successful}
                        </Typography>
                        <Typography variant='body2' id="modal-modal-description" align='center' sx={{ mt: 2 }}>
                            {status}
                        </Typography>
                        <SpecialLink to="/profile" >
                            <Button variant="outlined" size="small" sx={{ mt: 2, mb: 2 }}>
                                See in Profile
                            </Button>
                        </SpecialLink>
                    </Box>
                    :
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h5" align='center' sx={{ mt: 2 }}>
                            Error
                        </Typography>
                        <Typography variant='body2' id="modal-modal-description" align='center' sx={{ mt: 2 }}>
                            {status}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button variant="outlined" size="small" sx={{ mt: 2, mb: 2 }} onClick={handleClose}>
                                Close
                            </Button>
                        </Box>
                    </Box>
                }
            </Modal>
        </div>
    )
};

export default QuizMint;