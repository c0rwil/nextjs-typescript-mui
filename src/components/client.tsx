// Client.js
"use client"

import React, { useEffect, useState } from 'react';
import CircleTwoToneIcon from '@mui/icons-material/CircleTwoTone';
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

    return (
        <MediaCard heading="Status example" text="">
            <CircleTwoToneIcon color={statusProp ? 'primary' : 'secondary'} />
        </MediaCard>
    );
}

