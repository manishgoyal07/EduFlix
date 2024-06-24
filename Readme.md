# Eduflix - E-Learning Platform

## Installation

To run this project locally, follow these steps:

1. Clone this repository
2. Install dependencies using `npm install`
3. Start the development server using `cd client`
4. Start the development server using `npm run dev`
5. Start the development server using `cd server`
6. Start the development server using `nodemon index`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Video Tutorial

[Click to here watch video tutorial](https://drive.google.com/file/d/1LG8GzwmS2GP_zPyIe3yTCqiGlvtQ-xtL/view?usp=sharing)

# Screenshots

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(10).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(11).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(1).png>)

<!-- ![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/Loungify/SS%20(1).jpg>) -->

<!-- ![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/Loungify/SS%20(2).jpg>) -->

<!-- ![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/Loungify/SS%20(3).jpg>) -->

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(2).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(12).png>)\

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(12).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(12).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(3).png>)

<!-- ![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/Loungify/SS%20(4).jpg>) -->

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(4).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(5).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(6).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(7).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(8).png>)

![SS Not Available at the Moment](<https://github.com/manishgoyal07/Assets/blob/master/EduFlix/SS%20(9).png>)

I am using sessions and cookies for better security purpose

Access token and Refresh tokens are used in this process.
Access Token is not stored in database while Refresh token is stored in Db

File Upload procedure:

1. using multer, I will store the file temperory in my local server
2. then using Cloudinary, I'll take that file and put it on its server

We can also do it like using multer we'll take the file and put it on Cloudinary
But in professional grade, we'll take the file temperorily on our server to re-upload in any chance
