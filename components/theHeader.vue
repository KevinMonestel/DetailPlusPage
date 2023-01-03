<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6 text-white">
    <div class="flex items-center flex-no-shrink mr-6">
      <NuxtLink href="/" class="font-semibold text-xl tracking-tight">DetailPlus<span class="text-red-700">+</span></NuxtLink>
    </div>
    <div class="block lg:hidden">
      <button @click="headerIsOpen = !headerIsOpen">
        <Icon name="icomoon-free:menu" />
      </button>
    </div>
    <div class="w-full flex-grow lg:flex lg:items-center lg:w-auto" :class="headerIsOpen ? 'block' : 'hidden'">
      <div class="text-sm lg:flex-grow">
        <NuxtLink href="/services" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          Servicios
        </NuxtLink>
        <NuxtLink href="/ourwork" class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          Trabajos
        </NuxtLink>
        <NuxtLink href="/about" class="block mt-4 lg:inline-block lg:mt-0">
          Nosotros
        </NuxtLink>
      </div>
      <div>
        <a href="#" class="inline-block text-sm px-4 py-2 mt-4 lg:mt-0 leading-none border rounded text-white border-white">Agendar
          Cita</a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const headerIsOpen = useTheHeader()
</script>