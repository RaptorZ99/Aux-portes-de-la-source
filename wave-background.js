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
