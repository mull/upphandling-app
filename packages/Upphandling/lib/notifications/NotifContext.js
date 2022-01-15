import NotifService from './NotifService'
import React from 'react'

let notif
let defaultValue = {
  notifications: [],
  notif: notif,
  token: undefined,
  fcmRegistered: false,
}

const onRegister = function (token) {
  console.log('onRegister', { registerToken: token.token, fcmRegistered: true })
  notif.token = token.token
  notif.fcmRegistered = fcmRegistered
}

const onNotif = function (notif) {
  Alert.alert(notif.title, notif.message)
}

notif = new NotifService(onRegister.bind(notif), onNotif.bind(notif))
const NotifContext = React.createContext(notif)

const NotifContextProvider = (props) => (
  <>
    <NotifContext.Provider value={defaultValue}>
      {props.children}
    </NotifContext.Provider>
  </>
)

const NotifContextConsumer = NotifContext.Consumer

export { NotifContextProvider, NotifContextConsumer }
