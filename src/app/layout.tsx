import * as React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ScheduleIcon from '@mui/icons-material/Schedule';
import QueueIcon from '@mui/icons-material/Queue';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import BlurOnIcon from '@mui/icons-material/BlurOn';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportIcon from '@mui/icons-material/Support';
import LogoutIcon from '@mui/icons-material/Logout';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';

export const metadata = {
  title: 'ion test engine',
  description: 'user interface for the ion test engine',
};

const DRAWER_WIDTH = 240;

const LINKS = [
    { text: 'Home', href: '/', icon: BlurOnIcon, color: 'primary' }, // or 'error', 'action', etc.
    { text: 'Queue', href: '/queue', icon: QueueIcon, color: 'secondary' },
    { text: 'Scheduler', href: '/scheduler', icon: ScheduleIcon, color: 'success' },
    { text: 'Runner', href: '/runner', icon: DirectionsRunIcon, color: 'warning' },
];

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: SettingsIcon },
  { text: 'Support', icon: SupportIcon },
  { text: 'Logout', icon: LogoutIcon },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
      <body>
      <ThemeRegistry>
        <AppBar position="fixed" sx={{ zIndex: 2000 }}>
          <Toolbar sx={{ backgroundColor: 'background.paper' }}>
            <SmartToyIcon color ={"primary"}/>
            <Typography variant="h6" color="primary" paddingLeft={"1%"}>
              ion test engine
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant="permanent"
            anchor="left"
        >
          <Divider />
          <List>
            {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon >
                      <Icon color={"primary"}/>
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
          <Divider sx={{ mt: 'auto' }} />
          {/*<List>*/}
          {/*  {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (*/}
          {/*      <ListItem key={text} disablePadding>*/}
          {/*        <ListItemButton>*/}
          {/*          <ListItemIcon>*/}
          {/*            <Icon />*/}
          {/*          </ListItemIcon>*/}
          {/*          <ListItemText primary={text} />*/}
          {/*        </ListItemButton>*/}
          {/*      </ListItem>*/}
          {/*  ))}*/}
          {/*</List>*/}
        </Drawer>
        <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
        >
          {children}
        </Box>
      </ThemeRegistry>
      </body>
      </html>
  );
}
