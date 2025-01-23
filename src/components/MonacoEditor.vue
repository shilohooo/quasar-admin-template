<!--
  * Monaco Editor
  * @author shiloh
  * @date 2025/1/23 17:29
-->
<template>
  <div ref="codeEditBox" class="code-edit-box" />
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor'

// region init

let editor: monaco.editor.IStandaloneCodeEditor
const codeEditBox = ref<HTMLDivElement | null>()

/**
 * init editor
 * @author shiloh
 * @date 2025/1/23 17:33
 */
async function initEditor() {
  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: true,
  })
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
  })

  // create editor
  editor = monaco.editor.create(codeEditBox.value!, {
    value: `interface User { name: string; }`.trim(),
    language: 'typescript',
    theme: 'vs-dark',
    minimap: { enabled: false },
  })

  // model content change callback
  editor.onDidChangeModelContent(() => {
    console.log('code changed', editor.getValue())
    // TODO return code to client by emit
  })
}

onMounted(() => {
  initEditor()
})

// endregion

// region before unmount

onBeforeUnmount(() => {
  editor?.dispose()
})

// endregion
</script>

<style scoped>
.code-edit-box {
  width: 100vw;
  height: 100vh;
}
</style>
