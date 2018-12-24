const login_form = () => {
                   
    var container = document.createElement('div'),
        title_form = document.createElement('h1'),
        email_section = document.createElement('div'),
        email_label = document.createElement('label'),
        email_input = document.createElement('input'),
        password_section = document.createElement('div'),
        password_input = document.createElement('input'),
        password_label = document.createElement('label'),
        register_btn = document.createElement('button'),
        login_btn = document.createElement('button'),
        submits_section = document.createElement('div');
    
    main_section.appendChild(container);
                   
    container.appendChild(title_form);
                   
    container.appendChild(email_section);
    email_section.appendChild(email_label);
    email_section.appendChild(email_input);
                   
    container.appendChild(password_section);
    password_section.appendChild(password_label);
    password_section.appendChild(password_input);
                   
    container.appendChild(submits_section);
    submits_section.appendChild(login_btn);
    submits_section.appendChild(register_btn);
                   
    container.classList.add('container');
                   
    title_form.classList.add('title_login');
    title_form.innerHTML = 'Dołączy do gry!';
                   
    email_section.classList.add('email_section');
    email_label.classList.add('email_label');
    email_input.classList.add('email_input');
                   
    email_label.setAttribute('for', 'email');
    email_input.setAttribute('name', 'email');
    email_input.setAttribute('id', 'email');
                   
    email_label.innerHTML = 'E-mail'
                   
    password_section.classList.add('password_section');
    password_label.classList.add('password_label');
    password_input.classList.add('password_input');
                   
    password_label.setAttribute('for', 'password');
    password_input.setAttribute('id', 'password');
    password_input.setAttribute('type', 'password');
                   
    password_label.innerHTML = 'Hasło';
                   
    submits_section.classList.add('submits_section');
                   
    login_btn.classList.add('login_btn');
    register_btn.classList.add('register_btn');
                   
    login_btn.innerHTML = 'Zaloguj się!';
    register_btn.innerHTML = 'Zarejestruj się!';
                  
};