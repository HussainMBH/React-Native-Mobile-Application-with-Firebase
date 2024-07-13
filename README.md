# React Native App with Login, Signup, and Game of Thrones Characters Listing

This project is a React Native application that includes user authentication using Firebase and lists characters from the Game of Thrones series using the [Thrones API](https://thronesapi.com/). The app features login and signup pages, and authenticated user data (email and password) is stored using Firebase Authentication.

## Features

- **Login and Signup**: Users can create an account and log in using their email and password.
- **Firebase Authentication**: User credentials are securely stored and managed using Firebase Authentication.
- **List Game of Thrones Characters**: The app fetches and displays a list of characters from the Game of Thrones series using the Thrones API.
- **Voice Search**: Users can perform voice searches using the microphone, leveraging the `react-native-voice` library.

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- React Native CLI
- Firebase project configured for web and mobile
- Android Studio or Xcode for running the app on an emulator or physical device

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/HussainMBH/React-Native-Mobile-Application-with-Firebase.git
   cd react-native-login-signup-thrones
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Set up Firebase**:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Email/Password authentication in the Firebase Authentication section.
   - Download the `google-services.json` file from your Firebase project and place it in the `android/app` directory.

4. **Link Firebase SDK**:
   ```sh
   npx react-native link @react-native-firebase/app
   npx react-native link @react-native-firebase/auth
   ```

5. **Install `react-native-voice`**:
   ```sh
   npm install @react-native-community/voice
   ```

### Running the App

1. **Run on Android**:
   ```sh
   npx react-native run-android
   ```

2. **Run on iOS**:
   ```sh
   npx pod-install
   npx react-native run-ios
   ```

## Usage

### Login and Signup

- On the startup screen, you can choose to log in or sign up.
- Provide your email and password to sign up or log in.
- The authentication is handled using Firebase Authentication, and user credentials are securely stored.

### List Game of Thrones Characters

- After logging in, navigate to the screen where Game of Thrones characters are listed.
- The app fetches character data from the Thrones API and displays it in a list.

### Voice Search

- On the dashboard screen, you can use the voice search feature.
- Press the "Start Listening" button and speak your search query.
- The app will convert your speech to text and perform the search accordingly.

## Configuration

### Firebase Configuration

Ensure your Firebase configuration is correctly set up in the `android/app/google-services.json` file.

### Android Permissions

Make sure the following permissions are declared in your `AndroidManifest.xml`:

```xml
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

## Contributing

Feel free to submit issues, fork the repository and send pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Thrones API](https://thronesapi.com/) for providing Game of Thrones character data.
- [Firebase](https://firebase.google.com/) for authentication services.
- [react-native-voice](https://github.com/react-native-community/voice) for voice recognition capabilities.
```

