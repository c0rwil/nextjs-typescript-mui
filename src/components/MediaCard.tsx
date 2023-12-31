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
        <Card style ={{borderRadius:"10%"}}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" align={"center"} style={{ color: 'silver' }}>
                    {heading}
                </Typography>
                <Typography variant="body2" color="text.primary" align={"center"}>
                    {children}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small" color="primary">example button 1</Button>
                <Button size="small" color="primary">example button 2</Button>
            </CardActions>
        </Card>
    );
};

export default MediaCard;
