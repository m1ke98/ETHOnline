import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { QuizBody } from "./styling";
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    display: "flex",
    flexFlow: "column",
    height: 250,
    justifyContent: "center",
  }));

export default function Quiz() {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <QuizBody>
            <Box
                sx={{
                    display: 'center',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                    m: 1,
                    bgcolor: "#282c34",
                    width: 800,
                    height: 300,
                    },
                }}
                >
                    <Paper elevation={3}>
                        <Grid container spacing={0} columns={20}>
                            <Grid item xs={12}>
                                <Item elevation={1}
                                    sx={{
                                        background: "none",
                                        textAlign: "left",
                                        justifyContent: "flex-start",
                                        p: 3,
                                        color: "#faf9f6",
                                    }}
                                >
                                    <p>1. What is 2x2?</p>
                                </Item>
                            </Grid>
                            <Grid item xs={8}>
                                <Item elevation={1}
                                    sx={{
                                        background: "none",
                                        p:3,
                                        alignItems: "center",
                                        color: "#faf9f6",
                                    }}
                                >
                                    <FormControl component="fieldset">
                                        <RadioGroup name="radio-buttons-group">
                                            <FormControlLabel value="A1" control={<Radio sx={{color: "gray",}}/>} label="0" />
                                            <FormControlLabel value="A2" control={<Radio sx={{color: "gray",}}/>} label="2" />
                                            <FormControlLabel value="A3" control={<Radio sx={{color: "gray",}}/>} label="4" />
                                            <FormControlLabel value="A4" control={<Radio sx={{color: "gray",}}/>} label="8" />
                                        </RadioGroup>
                                    </FormControl>
                                </Item>
                            </Grid>
                            <Grid item xs={20}>
                                <Item elevation={1}
                                    sx={{
                                        background: "none",
                                        height: 50,
                                        p: 1,
                                        alignItems: "center",
                                    }}
                                >
                                    <MobileStepper
                                        variant="dots"
                                        steps={5}
                                        position="static"
                                        activeStep={activeStep}
                                        sx={{
                                            flexGrow: 1,
                                            width: 300,
                                            background: 'none',
                                        }}
                                        nextButton={
                                            <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
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
                                </Item>
                            </Grid>
                        </Grid>
                    </Paper>
                </Box>
        </QuizBody>
    )
}