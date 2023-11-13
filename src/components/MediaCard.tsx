import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface MediaCardProps {
    heading: string;
    text: string;
    children: React.ReactNode; // Allow any React nodes as children
}

const MediaCard: React.FC<MediaCardProps> = ({ heading, text, children }) => {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
            <div>
                {children}
            </div>
        </Card>
    );
};

export default MediaCard;
