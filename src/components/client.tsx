// Client.js
"use client"

import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import MediaCard from '@/components/MediaCard';

export default function Client() {
    const [statusProp, setStatusProp] = useState(null);

    useEffect(() => {
        async function fetchStatus() {
            try {
                const res = await fetch('/api/status');
                const data = await res.json();
                setStatusProp(data.xStatus);
            } catch (error) {
                console.error('Failed to fetch status:', error);
                setStatusProp(false);
            }
        }

        fetchStatus();
    }, []);

    if (statusProp === null) {
        return <div>Loading...</div>; // Or any loading state
    }
    if(statusProp){
        return (
            <MediaCard heading="Status Example" text="">
                <CircleIcon style={{ color: 'green' }} />
            </MediaCard>)
    }
    else{
        return (
        <MediaCard heading="Status Example" text="">
            <CircleIcon color={'error'} />
        </MediaCard>
    );
    }
}

