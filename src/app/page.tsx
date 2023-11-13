// HomePage.js
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import MediaCard from '@/components/MediaCard';
import Client from '@/components/client';

export default function HomePage() {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <div>
                <Grid container rowSpacing={3} columnSpacing={3} justifyContent="center">
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                    <Grid xs={"auto"}>
                        <Client/>
                    </Grid>
                </Grid>
            </div>
            <Drawer
                sx={{
                    width: 320,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 320,
                        boxSizing: 'border-box',
                        top: ['48px', '56px', '64px'],
                        height: 'auto',
                        bottom: 0,
                    },
                }}
                variant="permanent"
                anchor="right"
            >
                <List sx={{ px: 2 }}>
                    <ListItem disablePadding>
                        <Typography color="silver" variant="overline" sx={{ fontWeight: 500 }}>
                            Example ABOUT THIS PAGE:<br/><br/>
                            Voluptatem expedita qui qui dolor est doloremque ducimus et. Et dolore a id esse tempore
                            voluptas. Et ut vel laboriosam illo quam quis pariatur eos. Nulla quia similique qui sunt.
                            Quo magni ipsum quasi et veniam atque sit. Cumque fuga dignissimos sed nesciunt doloribus
                            pariatur ducimus.
                        </Typography>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
}
