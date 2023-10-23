anime({
    targets: '#waveBackground path',
    easing: 'linear',
    duration: 10000,
    loop: true,
    d: [
        { value: [wave13, wave14] },
        { value: wave14 },
        { value: wave15 },
        { value: wave13 },
    ],
});

anime({
    targets: '#waveBottom3 path',
    easing: 'linear',
    duration: 25000,
    loop: true,
    d: [
        { value: [wave9, wave10] },
        { value: wave11 },
        { value: wave12 },
        { value: wave9 },
    ],
});