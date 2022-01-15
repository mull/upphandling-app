import React from 'react'
import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { AppNavigator } from './screens/AppNavigator'

import { QueryClient, QueryClientProvider } from 'react-query'
import { NotifContextProvider } from './lib/notifications/NotifContext'

const queryClient = new QueryClient()
export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <NotifContextProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <QueryClientProvider client={queryClient}>
          <AppNavigator />
        </QueryClientProvider>
      </ApplicationProvider>
    </NotifContextProvider>
  </>
)
