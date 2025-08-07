document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const now = new Date().toISOString();
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const data = {
            "sheet1": {
                // "Timestamp": now,
                "firstname": form.FirstName.value,
                "lastname": form.LastName.value,
                "email": form.Email.value,
                "subject": form.Subject.value,
                "message": form.Message.value
            }
        };

        fetch('https://api.sheety.co/f8a440e01fb72f6053099e20367f9791/contactResponse/sheet1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer Strawberry88!'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.ok) {
                    alert('Message sent successfully!');
                    form.reset();
                } else {
                    alert('Failed to send. Please try again.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while sending your message.');
            });
    });
});


////////////////////////////code for google scripts//////////////////////////////
// document.getElementById('contact-form').addEventListener('submit', async function (e) {
//     e.preventDefault();

//     const form = e.target;

//     const formData = {
//         FirstName: form.FirstName.value.trim(),
//         LastName: form.LastName.value.trim(),
//         Email: form.Email.value.trim(),
//         Subject: form.Subject.value.trim(),
//         Message: form.Message.value.trim()
//     };

//     try {

//         // const response = await fetch("https://script.google.com/macros/s/AKfycbxxVJ2zwEOJikyRsHldmooK5v95Cidt6xeaMMIwlDSs9f2DqP_dc-w62irtOIsTQtDI/exec", {
//         const response = await fetch("https://script.google.com/macros/s/AKfycbwF-XkO4kTW-vD-RwkD9je8moKpN_2KGLmg1BjbyCnVsT3N_v954Yg6MzftKYH6ES5S/exec", {

//             method: "POST",
//             mode: "cors",
//             redirect: "follow",
//             headers: {
//                 "Content-Type": "text/plain;charset=utf-8",
//             },
//             body: JSON.stringify(formData)
//         });

//         const result = await response.json();

//         if (result.status === "success") {
//             alert("Thank you! Your message was sent.");
//             form.reset(); // clear form fields
//         } else {
//             alert("Something went wrong: " + result.message);
//         }
//     } catch (error) {
//         // Only log error if it wasn't a silent browser CORS block
//         if (!navigator.onLine) {
//             console.warn("Offline or network issue:", error);
//         } else {
//             console.log("Likely CORS warning - form still submitted:", error);
//         }
//     }
// });
