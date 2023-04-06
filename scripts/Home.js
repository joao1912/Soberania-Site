(function(){

    document.getElementById("navContainer").addEventListener("click",function(event){
        const navPost = event.target.id

        const conteiners = document.getElementsByClassName("containersPrincipais")
        const containerHome = document.getElementById("containerHome")
        const containerComoUsar = document.getElementById("containerComoUsar")
        const containerCartas = document.getElementById("containerCartas")
        const containerJogar = document.getElementById("containerJogar")

        function hideContainers() {
            ;[...conteiners].forEach(function(container){
                container.style.display = "none"

            })
            
        }

        switch(navPost) {
            case "navHome":
                hideContainers()
                containerHome.style.display = "block"

                break
            case "navComoUsar":
                hideContainers()
                containerComoUsar.style.display = "block"

                break
            case "navCartas":
                hideContainers()
                containerCartas.style.display = "block"

                break
            case "navJogar":
                hideContainers()
                containerJogar.style.display = "block"

                break
            default:
        }
    })
    
    document.getElementById("conteinerPlay").addEventListener("click",function(){
        window.location.href = "../paginas/pagina-formulario.html"
    })

})()