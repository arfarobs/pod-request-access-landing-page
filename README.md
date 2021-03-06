# Pod request access landing page solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)


## Overview

This is the first time that I have done a Frontend Mentor project with JavaScript. Any feedback would be great, especially on the JS side.
### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![Desktop](./assets/Screenshots/Desktop.png)
![Tablet](./assets/Screenshots/Tablet.png)
![Mobile](./assets/Screenshots/Mobile.png)

### Links

- Solution URL: [https://github.com/arfarobs/pod-request-access-landing-page](https://github.com/arfarobs/pod-request-access-landing-page)
- Live Site URL: [https://arfarobs.github.io/pod-request-access-landing-page/](https://arfarobs.github.io/pod-request-access-landing-page/)

## My process
1. Write the HTML.
2. Style mobile view.
3. Style tablet view.
4. Style desktop view.
5. Add hover and focus styles.
6. Write the JS for email validation.
7. Fix Chromes stupid autofill styles.
8. Write readme.

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- JavaScript
- Mobile first development


### What I learned

How to hopefully overwrite autofill styles.


```css
input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: 0px solid #2C344B;
  -webkit-text-fill-color: #FFF;
  -webkit-box-shadow: 0 0 0px 1000px #2C344B inset;
  transition: background-color 5000s ease-in-out 0s;
}
```

### Useful resources

- [Overwriting autofill styles](https://css-tricks.com/snippets/css/change-autocomplete-styles-webkit-browsers/) - This is the code I used to overwrite the autofill styles.