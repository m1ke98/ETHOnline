import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';

export default function ProfileCard({ cardImage, name, description }) {

    return (
        <div>
            <Card className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image={cardImage}
                    alt="card-main-image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                </CardActions>
            </Card>
        </div>
    );
}