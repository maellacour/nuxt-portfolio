<template>
  <div class="mb-8">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
      <slot name="title" />
    </h3>
    <div class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
      <slot name="details" />
    </div>
  </div>
</template>
