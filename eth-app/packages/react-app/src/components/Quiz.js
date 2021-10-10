import { useEffect, useState } from "react";
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

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { questions, quizAnswers } from "./helpers/quizInfo.js";

export default function Quiz() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = questions.length;
    const [choice, setChoice] = useState('');
    const [answers, setAnswers] = useState(new Array(questions.length));
    const [score, setScore] = useState(0);

    useEffect(() => {
        generateScore();
    });

    const handleChange = (e) => {
        setChoice(e.target.value);
    }
    
    const handleNext = () => {
        const newAnswers = [...answers];
        newAnswers[activeStep] = choice;
        setAnswers(newAnswers);

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        
        if (answers[activeStep + 1] !== '' || answers[activeStep + 1] !== undefined) {
            setChoice(answers[activeStep + 1]);
        } else {
            setChoice('');
        }
    };
  
    const handleBack = () => {
        const newAnswers = [...answers];
        newAnswers[activeStep] = choice;
        setAnswers(newAnswers);

        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        if (answers[activeStep - 1] !== '' || answers[activeStep - 1] !== undefined) {
            setChoice(answers[activeStep - 1]);
        } else {
            setChoice('');
        }

    };

    function generateScore() {
        var pts = 0;
        var posPts = quizAnswers.length;
        for (let i = 0; i < quizAnswers.length; i++) {
            if (quizAnswers[i] === answers[i]) {
                pts += 1;
            }
        }
        var percentage = ((100 * pts/posPts)).toFixed(0);
        setScore(percentage);
    };

    return (
        <QuizBody>
            <Title>Sample Quiz</Title>
            <Box sx={{ display: 'center', paddingTop: '2%', flexWrap: 'wrap', '& > :not(style)': { m: 1, bgcolor: "#282c34", width: 800, height: 350, }, }}>
                <Paper elevation={3}>
                    {activeStep === questions.length &&
                        <Box  sx={{ height: 300, display: 'flex', maxWidth: '100%', color: '#faf9f6', justifyContent: 'center', alignItems: 'center', p: 0}}>
                            <Card sx={{ height: '55%', width: '30%', background: 'none', justifyContent: 'center', alignItems: 'center'}}>
                                <CardContent sx={{ background: 'none', mt: 2}}>
                                    <Typography variant='h5' align='center' sx={{ color: "#faf9f6", mb: 1}}>
                                        Score
                                    </Typography>
                                    <Typography variant='body1' align='center' sx={{ color: "#faf9f6"}}>
                                        {score}%
                                    </Typography>
                                    <CardActions sx={{justifyContent: 'center', mt: 2}}>
                                        <Button variant="outlined" size="small">Mint</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Box>
                    }
                    {activeStep < questions.length &&
                        <Box  sx={{ height: 300, float: 'left', maxWidth: '70%', width: '70%', color: "#faf9f6", p: 2, }}>
                            {questions[activeStep].question}
                        </Box>
                    }
                    {activeStep < questions.length &&
                        <Box  sx={{ height: 300, float: 'right', justifyContent: 'left', alignItems: 'center', display: 'flex', maxWidth: '30%', width: '30%', color: "#faf9f6", p: 2, }}>
                            <FormControl component="fieldset">
                                <RadioGroup name="radio-buttons-group" value={choice} onChange={handleChange}>
                                    <FormControlLabel value="a1" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a1} />
                                    <FormControlLabel value="a2" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a2} />
                                    <FormControlLabel value="a3" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a3} />
                                    <FormControlLabel value="a4" control={<Radio sx={{color: "gray",}}/>} label={questions[activeStep].a4} />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                    }
                    <Box  sx={{ height: 50, maxWidth: 800, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, }}>
                        <MobileStepper variant="dots" steps={maxSteps + 1} position="flex" activeStep={activeStep} sx={{ display: 'flex', width: '50%', background: 'none', }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps}
                                >
                                    {activeStep === maxSteps - 1 ? 'Submit' : 'Next' }
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button size="small" onClick={handleBack} disabled={activeStep === 0 || activeStep === maxSteps}>
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