document.getElementById('subtitle1').addEventListener('click', function() {
    toggleContent('subtitle1', 'content1');
});

document.getElementById('subtitle2').addEventListener('click', function() {
    toggleContent('subtitle2', 'content2');
});

document.getElementById('subtitle3').addEventListener('click', function() {
    toggleContent('subtitle3', 'content3');
});

document.getElementById('subtitle4').addEventListener('click', function() {
    toggleContent('subtitle4', 'content4');
});

function toggleContent(btnId, contentId) {
    document.querySelectorAll('.subtitle-1').forEach(btn => {
        btn.classList.remove('active1');
    });

    document.querySelectorAll('.content-item').forEach(content => {
        content.classList.remove('active1');
    });

    document.getElementById(btnId).classList.add('active1');
    document.getElementById(contentId).classList.add('active1');
}
