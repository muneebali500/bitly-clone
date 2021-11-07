# Bitly URLShortner Clone - React & Firebase

## Introduction

This is a clone project of [bitly website](https://bitly.com) using React, Firebase and Styled Componenets.

[Link to Live Project]()

![bitly clone website](/public/)

## User Experience (UX)

### User Stories

As a user:

- I want to be provided clear & visible instructions for registering or logging in to the website.
- I don't want to provide information that is very personal to me or about any of my personal relations.
- I want to navigate easily from one page to another page.
- I want to save my sensitive data into some secure database.
- I want that no one should visit my profile page without my permission.
- I want to update my profile at my will.
- I don't want to log in, again and again, every time I visit the website.
- I want to have clear info if the data takes time to load.
- I want to have clear instructions of any errors and what should be done to overcome those errors.
- I want to have a password reset facility in case I forgot my password.
- I want the utility of logging out of my account at my will.
- I want the utility of deactivating my account.

## User Interface (UI)

### Features

- There are 5 general pages and 5 user dashboard pages.
- Home page has a Header, Hero Section, Clients section, and a Footer.
- Header has a Logo, navigation items, search box, and two user auth buttons: Sign Up and Login. Only user auth buttons are active to navigate.
- Hero section has two sides. The left side has some text content, buttons, and client list and the right side has an image. Buttons are not active.
- Clients section has a background image and some text and links over it. Links are not active and they are just for interface purposes.
- Footer has four categorized navigation items lists, social icon links, and copyright text. None of the links are active and are just for interface purposes.
- Sign-up page has an Upwork title which is if clicked will push the user to the home page. The sign-up form has the fields of name, email, and password and also a button for creating an account.
- Login page has a login form with email and password fields and a button for login. If clicked on the Upwork title, it will push the user to the home page.
- Forgot password page has an email input field and a button to submit. If clicked on the Upwork title, it will push the user to the home page.
- Dashboard page has a header, user navigations routes, and info related to the user account. Also, there is a Logout button for logout from the account.
- User navigation pages include contact info, tax info, my teams, connected services, and deactivate account page.
- Apart from the above pages mentioned there is also a 404error page that will be displayed if the user tries to navigate to an illegal route/path.

## Technologies Used

### Languages, Frameworks, Libraries & Programs

- [JSX](https://reactjs.org/docs/introducing-jsx.html) - build up layout and content of the application.
- [cssmodules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) - for adding custom styling.
- [React.js](https://reactjs.org/) - to add functionalities throughout the application.
  - Hooks used:
    - useState
    - useEffect
    - useContext
- [Firebase](https://firebase.google.com/) - for Database purposes.
- [Visual Studio Code](https://code.visualstudio.com/) - the code editor being used to build the project.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - used heavily for debugging during development process.
- [Git](https://git-scm.com/) - the Git feature in VS Code was used for version control and push to github.
- [Github](https://github.com/) - Github is used to store project's code remotely.

## Deployment

#### Development

The project was developed using VS Code editor and its integrated version control feature to commit gits, which are then pushed to GitHub in order to store the codes remotely.

#### Firebase

The project was deployed to Firebase.

#### Forking the repository

1. Log in to GitHub and navigate to this project's repository: [authentication-react-firebase](https://github.com/muneebali500/authentication-react-firebase)
2. Just above the navigation menu of the repository (above the Settings button) locate the Fork button
3. The original copy of the repository is now copied on your GitHub account which allows you to view and/or work on the codes without affecting the original work

### Credits

Online textual and video tutorials for providing the understanding of the logic & philosophy behind user authentication and authorization. Also, Upwork for being the guide for my project UI.
