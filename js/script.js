

    const getData = () => {
        fetch('https://akademia108.pl/api/ajax/get-post.php')
            .then(response => response.json())
            .then((data) => {
                
                let divo = document.createElement("div");
                let IdUser = document.createElement("p");
                let justId = document.createElement("p");
                let title = document.createElement("p");
                let body = document.createElement("p");



                IdUser.innerText = data.userId;
                justId.innerText = data.id;
                title.innerText = data.title;
                body.innerText = data.body;

                divo.appendChild(IdUser);
                divo.appendChild(justId);
                divo.appendChild(title);
                divo.appendChild(body);
        
                let element = document.getElementsByTagName('body')[0];
                element.appendChild(divo);
            });
    };



    let bnt = document.getElementById('btn');
    bnt.addEventListener('click', getData);







