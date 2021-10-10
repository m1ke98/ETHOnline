import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

export default function ProfileCard({ mainImage, title, textContent }) {

    return (
        <div>
            <Card className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image={mainImage}
                    alt="card-main-image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {textContent}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}