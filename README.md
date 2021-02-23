# 👩‍💻 Short Description

Facebook clone with **React**.

Firebase for **Hosting, Google athentication(Full Log-In) and real time Database**.

# 🚀 Build a Facebook Clone with REACT & Firebase

- React + **React HOOKS**
- React Context API -> REDUX pattern
- MATERIAL UI (Icons)
  is a library for css. One of the most popular css libraries. brings pristine icons.
  _ on terminal, install `npm install @material-ui/core` to your local repository and install `npm install @material-ui/icons`.
  _ more icons can be found [here](https://material-ui.com/components/material-icons/)
- FLEXBOX (responsive)
- [firebase](https://console.firebase.google.com/)'s Firestore realtime DB
- Firebase Hosting
- Firebase Google Authentication (Full Log-In)

#### Why firebase?

firebase lets you host all the data you want
real time database
Google's eco system on the back (`firebase`, `google authentication`) and `react` on the front :ties together

## 🔒 Hide Firebase Environment Variables

1. Create `.env` file in the root of your project & add it to `.gitignore`
2. Copy whats inside [env.example](env.example) & modify according to your firebase env variables. Make sure each variable name starting with `REACT_APP_`
3. Access the variables directly in your `firebase.js` using `process.env.REACT_APP_INSERT_VARIABLE_NAME_HERE`. Check [firebase.js](src/firebase.js)
4. <b>`ALREADY DONE ✔️`</b>  To access the environment-specific file, install the env-cmd npm package using the following command: `npm install env-cmd`
5. <b>`ALREADY DONE ✔️`</b> Change the `package.json` file `script` section to use `env-cmd` command: `"start": "env-cmd -f .env react-scripts start"`

So now, when you run the `npm start` command from the terminal, it will load the environment variables from the `.env` file.

## 📕 Facebook Widgets at

https://developers.facebook.com/docs/plugins/page-plugin/

## 📗 when need to update time

use the following code `<p>{new Data(timestamp?.toDate()).toUTCString}</p>`

## 📒 Firebase Hosting

1. `npm i -g firebase-tools`
2. `firebase login`
3. `firebase init`
4. `npm run build`
5. `firebase deploy`
