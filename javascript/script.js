document.querySelector('.btn2').onclick = darkTheme;   

    function darkTheme() {
        var a = document.querySelector('.list')
        a.style.backgroundColor = "gray";
        var b = document.querySelector('.notearea')
        b.style.backgroundColor = "gray";
        document.querySelector(".btn2").innerHTML = 'Light Theme';
    }   