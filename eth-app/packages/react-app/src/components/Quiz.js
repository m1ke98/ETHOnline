import { useState } from "react";
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

import { questions } from "./helpers/quizInfo.js";

export default function Quiz() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = questions.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <QuizBody>
            <Title>Sample Quiz</Title>
            <Box sx={{ display: 'center', paddingTop: '2%', flexWrap: 'wrap', '& > :not(style)': { m: 1, bgcolor: "#282c34", width: 800, height: 350, }, }}>
                <Paper elevation={3}>
                    <Box  sx={{ height: 300, float: 'left', maxWidth: '70%', width: '70%', color: "#faf9f6", p: 2, }}>
                        {questions[activeStep].question}
                    </Box>
                    <Box  sx={{ height: 300, float: 'right', justifyContent: 'left', alignItems: 'center', display: 'flex', maxWidth: '30%', width: '30%', color: "#faf9f6", p: 2, }}>
                        <FormControl component="fieldset">
                            <RadioGroup name="radio-buttons-group">
                                <FormControlLabel value="a1" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a1} />
                                <FormControlLabel value="a2" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a2} />
                                <FormControlLabel value="a3" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a3} />
                                <FormControlLabel value="a4" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a4} />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                    <Box  sx={{ height: 50, maxWidth: 800, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, }}>
                        <MobileStepper variant="dots" steps={maxSteps} position="flex" activeStep={activeStep} sx={{ display: 'flex', width: '50%', background: 'none', }}
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
    )
}