NODE JS version : v6.9.2
react-native-cli: 2.0.1
react-native: 0.39.2

How to run this project on Linux Mint 18.1

1. Install dependencies

    - Node JS
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        sudo apt-get install -y nodejs

2. Clone react-native from https://github.com/facebook/react-native

   Branch : master
   Revision : 573170699f54c7136fe3b00563b4dab2df2469c8

3. cd react-native
   npm install

4. Download ANDROID SDK and Android NDK

    export ANDROID_HOME=~/Android/Sdk
    export PATH=${PATH}:${ANDROID_HOME}/tools
    export PATH=${PATH}:${ANDROID_HOME}/platform-tools

    export ANDROID_NDK=...
    export PATH=$ANDROID_NDK:$PATH

5. Clone this project
6. Cd $this_project
7. Run "react-native start" as standlone terminal
8. On another terminal, run "react-native run-android"

    Device must be Android 5.* because now React-Native requires
    a special permission -> Must request this permisison on Android 6+ (haven't request this yet)



