const express = require('express');

const app = express();

const venues = [
    {
        id: 1,
        hu: 'Corvin Mozi',
        en: 'Corvin Cinema',
        fr: 'Cinéma Corvin',
        lon: '19.07117831951774',
        lat: '47.486200263587946'
    },
    {
        id: 2,
        hu: 'Uránia Nemzeti Filmszínház',
        lon: '19.060265',
        lat: '47.495171'
    },
    {
        id: 3,
        hu: 'Puskin Mozi',
        en: 'Puskin Cinema',
        lon: '19.052747',
        lat: '47.496925'
    },
    {
        id: 4,
        hu: 'Art+ Cinema',
        lon: '21.39072',
        lat: '47.45884'
    }
];

const seats = [
    {
        row: 1,
        side: 'LEFT',
        seatNo: 10,
        available: true
    },
    {
        row: 1,
        side: 'LEFT',
        seatNo: 11,
        available: true
    },
    {
        row: 1,
        side: 'RIGHT',
        seatNo: 10,
        available: true
    },
    {
        row: 1,
        side: 'RIGHT',
        seatNo: 11,
        available: true
    },
    {
        row: 2,
        side: 'LEFT',
        seatNo: 10,
        available: true
    },
    {
        row: 2,
        side: 'LEFT',
        seatNo: 11,
        available: true
    },
    {
        row: 2,
        side: 'RIGHT',
        seatNo: 10,
        available: true
    },
    {
        row: 2,
        side: 'RIGHT',
        seatNo: 11,
        available: true
    },
    {   row: 10,
        side: 'LEFT',
        seatNo: 10,
        available: true
    },
    {
        row: 10,
        side: 'LEFT',
        seatNo: 11,
        available: true
    },
    {
        row: 10,
        side: 'RIGHT',
        seatNo: 10,
        available: true
    },
    {
        row: 10,
        side: 'RIGHT',
        seatNo: 11,
        available: true
    }
];

const screenings = [
    {
        id: 1,
        hu: 'Különben dühbe jövünk',
        en: 'Watch Out, We\'re Mad!',
        startEpochSeconds: 1726840800,
        lengthMins: 97,
        reserved: [
            '1LEFT10',
            '1LEFT11'
        ]
    },
    {
        id: 2,
        hu: 'Kincs, ami nincs',
        en: 'Who Finds a Friend Finds a Treasure',
        startEpochSeconds: 1726844400,
        lengthMins: 102,
        reserved: [
            '1RIGHT10',
            '1RIGHT11'
        ]
    },
    {
        id: 3,
        hu: 'Kincs, ami nincs',
        en: 'Who Finds a Friend Finds a Treasure',
        startEpochSeconds: 1726848000,
        lengthMins: 102,
        reserved: [
            '1LEFT10',
            '1LEFT11',
            '1RIGHT10',
            '1RIGHT11',
            '2LEFT10',
            '2LEFT11',
            '2RIGHT10',
            '2RIGHT11',
            '10LEFT10',
            '10LEFT11',
            '10RIGHT10',
            '10RIGHT11'
        ]
    },
    {
        id: 4,
        hu: 'Kincs, ami nincs',
        en: 'Who Finds a Friend Finds a Treasure',
        startEpochSeconds: 1726851600,
        lengthMins: 102,
        reserved: [
            '2RIGHT10',
            '2RIGHT11'
        ]
    },
    {
        id: 5,
        hu: 'Kincs, ami nincs',
        en: 'Who Finds a Friend Finds a Treasure',
        startEpochSeconds: 1727197200,
        lengthMins: 102,
        reserved: [
            '10LEFT10',
            '10LEFT11'
        ]
    }
];

app.get('/api/v1/venues', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(venues);
});

app.get('/api/v1/venue/1/seats', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(seats);
});

app.get('/api/v1/venue/1/screenings', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(screenings);
});

app.post('/api/v1/venue/1/screening/1/reserve', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Reservation successful' });
});

app.options('/api/v1/venue/1/screening/1/reserve', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
});

const port = 3000;
app.listen(port, () => {
    console.log(`Mock API server is running on port ${port}`);
});