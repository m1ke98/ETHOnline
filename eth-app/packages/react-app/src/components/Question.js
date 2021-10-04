import React from "react";
import { QuizBody, Title } from "./styling";
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const steps = [
  {
    question: 'Which project is not considered a DeFi application?',
    a1: 'Uniswap',
    a2: '1inch',
    a3: 'OpenSea',
    a4: 'Compound',
  },
  {
    question: 'Who developed Bitcoin?',
    a1: 'Satoshi Nakamoto',
    a2: 'Bill Gates',
    a3: 'Elon Musk',
    a4: 'Vitalik Buterin',
  },
  {
    question: 'Which project created the first NFTs on Ethereum?',
    a1: 'CryptoKitties',
    a2: 'Axie Infinity',
    a3: 'Decentraland',
    a4: 'CryptoPunks',
  },
];


export default function Question() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    return (
        <QuizBody>
            <Title>Sample Quiz</Title>
            <Box
                sx={{
                    display: 'center',
                    paddingTop: '2%',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    bgcolor: "#282c34",
                    width: 800,
                    height: 350,
                    },
                }}
            >
                <Paper elevation={3}>
                    <Box 
                        sx={{
                            height: 300,
                            float: 'left',
                            maxWidth: '70%',
                            width: '70%',
                            color: "#faf9f6",
                            p: 2,
                        }}
                    >
                        {steps[activeStep].question}
                    </Box>
                    <Box 
                        sx={{
                            height: 300,
                            float: 'right',
                            justifyContent: 'left',
                            alignItems: 'center',
                            display: 'flex',
                            maxWidth: '30%',
                            width: '30%',
                            color: "#faf9f6",
                            p: 2,
                        }}
                    >
                        <FormControl component="fieldset">
                            <RadioGroup name="radio-buttons-group">
                                <FormControlLabel value="A1" control={<Radio sx={{color: "gray",}}/>} label={steps[activeStep].a1} />
                                <FormControlLabel value="A2" control={<Radio sx={{color: "gray",}}/>} label={steps[activeStep].a2} />
                                <FormControlLabel value="A3" control={<Radio sx={{color: "gray",}}/>} label={steps[activeStep].a3} />
                                <FormControlLabel value="A4" control={<Radio sx={{color: "gray",}}/>} label={steps[activeStep].a4} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box 
                        sx={{
                            height: 50,
                            maxWidth: 800,
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            p: 2,
                        }}
                    >
                        <MobileStepper
                            variant="dots"
                            steps={maxSteps}
                            position="flex"
                            activeStep={activeStep}
                            sx={{
                                display: 'flex',
                                width: '50%',
                                background: 'none',
                            }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                    </Box>
                </Paper>
            </Box>
        </QuizBody>
    );
  }