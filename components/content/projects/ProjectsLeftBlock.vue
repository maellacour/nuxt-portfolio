<template>
  <!-- Single project client details -->
  <div class="mb-7">
    <p
      class="
                font-general-medium
                text-2xl text-secondary-dark
                dark:text-secondary-light
                mb-2
              "
    >
      <slot name="title" />
    </p>
    <p
      class="font-general-regular text-primary-dark dark:text-ternary-light"
    >
      <slot name="details" />
    </p>
  </div>
</template>
