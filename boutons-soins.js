document.getElementById('subtitle5').addEventListener('click', function() {
    toggleContent('subtitle5', 'content5');
});

document.getElementById('subtitle6').addEventListener('click', function() {
    toggleContent('subtitle6', 'content6');
});

document.getElementById('subtitle7').addEventListener('click', function() {
    toggleContent('subtitle7', 'content7');
});

document.getElementById('subtitle8').addEventListener('click', function() {
    toggleContent('subtitle8', 'content8');
});

function toggleContent(btnId, contentId) {
    document.querySelectorAll('.subtitle2').forEach(btn => {
        btn.classList.remove('active');
    });

    document.querySelectorAll('.content-item2').forEach(content => {
        content.classList.remove('active');
    });

    document.getElementById(btnId).classList.add('active');
    document.getElementById(contentId).classList.add('active');
}
