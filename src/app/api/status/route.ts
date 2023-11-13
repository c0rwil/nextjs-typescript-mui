
// src/app/api/status/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/0');
        const xStatus = response.status === 200;
        return NextResponse.json({ xStatus });
    } catch (error) {
        console.error('Error when fetching:', error);
        return NextResponse.json({ xStatus: false }, { status: 500 });
    }
}
