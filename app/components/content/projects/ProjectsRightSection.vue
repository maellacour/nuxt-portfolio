<template>
  <div class="w-full sm:w-2/3 mt-10 sm:mt-0">
    <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
      <slot name="title" />
    </h2>
    <div class="prose prose-gray dark:prose-invert max-w-none text-base">
      <slot name="details" />
    </div>
  </div>
</template>
