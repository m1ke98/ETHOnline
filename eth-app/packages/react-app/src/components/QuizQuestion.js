import Box from '@mui/material/Box';

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { questions } from "./helpers/quizInfo.js";

export default function QuizQuestion(props) {
    return (
        <div>
            <Box  sx={{ height: 300, float: 'left', maxWidth: '70%', width: '70%', color: "#faf9f6", p: 2, }}>
                {questions[props.activeStep].question}
            </Box>
            <Box  sx={{ height: 300, float: 'right', justifyContent: 'left', alignItems: 'center', display: 'flex', maxWidth: '30%', width: '30%', color: "#faf9f6", p: 2, }}>
                <FormControl component="fieldset">
                    <RadioGroup name="radio-buttons-group">
                        <FormControlLabel value="a1" control={<Radio sx={{color: "gray",}}/>} label={questions[props.activeStep].a1} />
                        <FormControlLabel value="a2" control={<Radio sx={{color: "gray",}}/>} label={questions[props.activeStep].a2} />
                        <FormControlLabel value="a3" control={<Radio sx={{color: "gray",}}/>} label={questions[props.activeStep].a3} />
                        <FormControlLabel value="a4" control={<Radio sx={{color: "gray",}}/>} label={questions[props.activeStep].a4} />
                    </RadioGroup>
                </FormControl>
            </Box>
        </div>
    )
}
