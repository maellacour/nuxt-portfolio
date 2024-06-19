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
      <slot name="partnerTitle" />
    </p>
    <ul class="leading-loose">
      <slot name="partnerInfos" />
    </ul>
  </div>
</template>
