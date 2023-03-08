<template>
  <div>
    <select v-model="currentLocale">
      <option
        v-for="locale in locales"
        :key="locale.value"
        :value="locale.value"
      >
        {{ locale.name }} {{ locale.value }}
      </option>
    </select>
    <h1>Example: Date formatting</h1>
    <p>Unformatted: {{ new Date() }}</p>
    <p>
      Formatted with dayjs (template):
      {{ $dayjs(new Date()).format("DD/MM/YYYY") }}
    </p>
    <p>Formatted with dayjs (computed): {{ prettyDate }}</p>
    <p>
      Formatted with dayjs (RelativeTime): {{ $dayjs(new Date()).fromNow() }}
    </p>
    <p>
      Formatted locale : {{ $dayjs(new Date()).format('L') }}
    </p>
    <ul>
      <li v-for="month in $dayjs.months()">
        {{ month }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const locales = ref([
  { name: 'English', value: 'en' },
  { name: 'Spanish', value: 'es' },
  { name: 'Portuguese', value: 'pt' }
])
const currentLocale = ref('en')

const { $dayjs } = useNuxtApp()

const prettyDate = computed(() =>
  $dayjs(new Date()).format('dddd, MMMM D, YYYY h:mm A')
)
watch(currentLocale, (newVal) => {
  $dayjs.locale(newVal)
})
</script>
