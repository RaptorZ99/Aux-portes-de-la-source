
anime({
    targets: '#waveBottom2 path',
    easing: 'linear',
    duration: 35000,
    loop: true,
    d: [
        { value: [wave1, wave2] },
        { value: wave3 },
        { value: wave4 },
        { value: wave1 },
    ],
});

anime({
    targets: '#waveTop2 path',
    easing: 'linear',
    duration: 40000,
    loop: true,
    d: [
        { value: [wave9, wave10] },
        { value: wave11 },
        { value: wave12 },
        { value: wave9 },
    ],
});