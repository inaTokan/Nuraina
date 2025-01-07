// Fungsi untuk toggle (menampilkan/menyembunyikan) menu hamburger di perangkat mobile
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const hamburgerIcon = document.querySelector('.hamburger-icon');

    // Jika menu sudah terlihat, sembunyikan; jika tidak, tampilkan
    menu.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');
}

// Fungsi untuk mengatur tampilan menu berdasarkan ukuran layar
function adjustNavigation() {
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');

    if (window.innerWidth <= 768) {
        // Tampilkan menu hamburger di perangkat kecil
        desktopNav.style.display = 'none';
        hamburgerNav.style.display = 'block';
    } else {
        // Tampilkan menu desktop di perangkat besar
        desktopNav.style.display = 'block';
        hamburgerNav.style.display = 'none';
    }
}

// Panggil fungsi untuk menyesuaikan tampilan saat halaman dimuat
adjustNavigation();

// Panggil fungsi untuk menyesuaikan tampilan saat ukuran layar berubah
window.addEventListener('resize', adjustNavigation);
