import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { gd, gs, gm } from '../stores'

const PrivateRoute = observer(({ ...args }) => {
  if (gs.isLogin) {
    return (<Route {...args} />)
  } else {
    return (
      <Redirect to={{ pathname: '/login' }} />
    )
  }
})

export default PrivateRoute