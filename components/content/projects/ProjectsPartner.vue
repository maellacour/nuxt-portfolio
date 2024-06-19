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
    <slot />
    </p>
    <ul class="leading-loose">
      <slot name="item" />
    </ul>
  </div>
</template>
