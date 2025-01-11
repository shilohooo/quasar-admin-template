/**
 * code block component boot file
 * @author shiloh
 * @date 2025/1/11 10:31
 */
import { defineBoot } from '#q-app/wrappers'
import { createVCodeBlock } from '@wdns/vue-code-block'

export default defineBoot(({ app }) => {
  const vCodeBlock = createVCodeBlock({
    // options
  })
  
  app.use(vCodeBlock)
})
