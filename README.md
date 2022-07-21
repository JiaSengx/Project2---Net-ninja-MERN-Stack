# Project2---Net-ninja-MERN-Stack

Project build follow Net-ninja-MERN-Stack tutorial. However the frontend had change to Angular

Please update ```MONGO_URI``` in ```backend/.env``` with your own mongo db connection

1) Nav bar
  - Change text color to red base on selected route
  - Will display user's name and Log out button when login else display Login and Sign up

2) Sign up Page
  - Display error message when user click on input and didnt enter value.
  - Display error message when email input is not in email format
  - Display error message when email had sign up before
  - Button is disable until a valid value is enter
  - Link under Sign up button will navigate to Log in page
  - Once Sign up success, navigate to Log in page
  - Will auto extract name from email enter, seperate by ```'@'```
![image](https://user-images.githubusercontent.com/30836555/180229055-9f7f37c3-5ad3-4c75-aae4-e65da1a8f2b1.png)

3) Log in Page
  - Display error message when user click on input and didnt enter value.
  - Display error message when email input is not in email format
  - Display error message when email and password is incorrect
  - Button is disable until a valid value is enter
  - Link under Login button will navigate to Sign up page
  - Once Log in success, navigate to home page
![image](https://user-images.githubusercontent.com/30836555/180229909-0c08a8ab-f82c-43f6-86a8-0ca67838605a.png)

4) Home page
  - Workout list will fade in when first load record and add new record
  - Edit and Delete icon will have background color during hover
  - Add new Workout will slide from right to left when first load
  - Add new workout form will display error message when enter invalid input
![image](https://user-images.githubusercontent.com/30836555/180230407-09be8f11-0d43-4965-8d62-f8d8f07f76ab.png)

5) Workout Edit Page
  - Form is fade in during first load
  - Input field will have default value base on selected workout
![image](https://user-images.githubusercontent.com/30836555/180231015-4db3d9b6-14fd-49b5-8f5f-102d6dfb44c8.png)




