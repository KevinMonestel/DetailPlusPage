export default defineNuxtRouteMiddleware((to, from) => {
  const headerIsOpen = useTheHeader()

  headerIsOpen.value = false
})