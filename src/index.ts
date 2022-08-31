import 'module-alias/register'
import app from '@/app'

import configs from '@configs'

const { appName, port } = configs

app.listen(port, () => {
  console.log(
    `🚀 ${new Date().toLocaleTimeString()} - ${appName} listen on port ${port}`
  )
})
