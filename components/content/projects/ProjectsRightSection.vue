<template>
  <!-- Single project right section details -->
  <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
    <p
      class="font-general-medium
             text-primary-dark
             dark:text-primary-light
             text-2xl
             font-bold
             mb-7
            "
    >
      <slot name="title" />
    </p>
    <div
      class="font-general-regular
             mb-5
             text-lg text-ternary-dark
             dark:text-ternary-light
            "
    >
      <slot name="details" />
    </div>
  </div>
</template>
