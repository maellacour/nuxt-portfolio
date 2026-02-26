<template>
  <div class="border-y border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
    <UContainer class="py-5">
      <div class="flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">

        <div class="flex flex-col gap-2">
          <p class="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
            Worked with
          </p>
          <div class="flex flex-wrap gap-2">
            <UBadge
              v-for="institution in institutions"
              :key="institution"
              color="neutral"
              variant="outline"
              size="sm"
            >
              {{ institution }}
            </UBadge>
          </div>
        </div>

        <div class="flex flex-col gap-2 sm:items-end">
          <p class="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">
            Credentials
          </p>
          <div class="flex flex-wrap gap-2 sm:justify-end">
            <UBadge
              v-for="credential in credentials"
              :key="credential.label"
              :color="credential.color"
              variant="soft"
              size="sm"
            >
              <UIcon
                :name="credential.icon"
                class="size-3 mr-1 shrink-0"
              />
              {{ credential.label }}
            </UBadge>
          </div>
        </div>

      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const institutions = ['EPFL', 'UNIGE', 'HUG', 'Airbus', 'HES-SO']

const credentials = [
  {
    label: 'Unity Certified Expert: Programmer',
    icon: 'i-heroicons-check-badge',
    color: 'primary'
  },
  {
    label: 'Airbus Award for Excellence',
    icon: 'i-heroicons-trophy',
    color: 'warning'
  },
  {
    label: 'Arts et Métiers ParisTech',
    icon: 'i-heroicons-academic-cap',
    color: 'neutral'
  }
] as const
</script>
