document.querySelector('.HomeBox').style.display = 'none';

        document.getElementById('registerForm').addEventListener('submit', function (event) {
            event.preventDefault();

            const lastName = document.getElementById('Name').value;
            const age = document.getElementById('age').value;
            const gender = document.getElementById('gender').value;
            const description = document.getElementById('description').value;
            const major = document.getElementById('major').value;
            const university = document.getElementById('university').value;
            const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(checkbox => checkbox.value);

            if (languages.length < 3) {
                notify('Please select at least 3 programming languages', 'error');
                return;
            }

            if ([firstName, lastName, age, gender, description, major, university].includes('')) {
                notify('Please fill all fields', 'error');
            } else {
                notify('Registration successful', 'success');

                // Display the information on the Home screen
                document.getElementById('infoLastName').innerText = Name;
                document.getElementById('infoAge').innerText = age;
                document.getElementById('infoGender').innerText = gender;
                document.getElementById('infoDescription').innerText = description;
                document.getElementById('infoMajor').innerText = major;
                document.getElementById('infoUniversity').innerText = university;
                document.getElementById('infoLanguages').innerText = languages.join(', ');

                document.querySelector('.registerBox').style.display = 'none';
                document.querySelector('.HomeBox').style.display = 'block';
            }
        });

        function notify(message, type) {
            const notification = document.createElement('div');
            notification.classList.add('notification', type);
            notification.innerText = message;
            document.body.appendChild(notification);
            setTimeout(() => notification.remove(), 3000);
        }