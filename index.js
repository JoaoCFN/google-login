function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    console.log(data);

    // Capturando ids direto sem precisar de query selector
    full_name.textContent = data.name;
    sub.textContent = data.sub;
    given_name.textContent = data.given_name;
    family_name.textContent = data.family_name;
    email.textContent = data.email;
    email_verified.textContent = data.email_verified;
    picture.setAttribute("src", data.picture);
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "291492008375-cjikddr94mhpvtq229pr7len72id0hui.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    
    google.accounts.id.renderButton(
        document.getElementById("buttonGoogle"),
        { 
            type: "standard",
            size: "large",
            shape: "pill",
            theme: "filled_blue",
            text: "$ {button.text}",
            logo_alignment: "left"
        }  // customization attributes
    );

    google.accounts.id.prompt(); // also display the One Tap dialog
}