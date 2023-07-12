import { ref, watchEffect } from 'vue'

const LOCAL_KEY = '__theme__'

const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light')

watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
    localStorage.setItem(LOCAL_KEY, theme.value)
})

// html data-theme='dark' = > html data-theme='light'  的切换方案
// 在css全局文件中设置 html{ --red: ...}  html[data-theme='dark'] { --red: ...}

export default function useTheme() {
    return theme
}
