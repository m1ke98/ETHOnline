import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function ProfileCard({ cardImage,imageTitle }) {

    return (
        <div>
            <Card className="card">
                <CardMedia
                    image={cardImage}
                    style={{ height: '150' + 'px' }}
                    title={imageTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        CardMedia Example
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        The CardMedia component sets a background image to cover available
                        space.
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}