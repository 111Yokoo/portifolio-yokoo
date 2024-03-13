function abrirNav(){
    const navBarMobile = document.getElementById('navBarMobile');
    if(navBarMobile.style.display ==  'none'){
        navBarMobile.style.display = 'block';
        navBarMobile.style.right = 0;
    }else {
        navBarMobile.style.display = 'none';
    }
}