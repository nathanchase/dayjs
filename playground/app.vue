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
    <p>UTC: {{ $dayjs.utc().format() }}</p>
    <p>Weekday: {{ $dayjs().weekday() }}</p>
    <p>Day of year: {{ $dayjs().dayOfYear() }}</p>
    <p>Duration: {{ $dayjs.duration(10000) }}</p>
    {{ $dayjs(new Date()).isBetween('2023-01-01', '2023-02-01', 'day', '[)') }}
    <p>Is Leap year? {{ $dayjs().isLeapYear() }}</p>
    <p>Is same or after 2023-04-30 ? {{ $dayjs().isSameOrAfter('2023-04-30', 'day') }}</p>
    <p>Is same or before 2023-04-30 ? {{ $dayjs().isSameOrBefore('2023-04-30', 'day') }}</p>
    <p>Start of day to Now: {{ $dayjs($dayjs().startOf('day')).toNow() }}</p>
    <div> Timezone :</div>
    <select v-model="currentTimezone">
      <option v-for="item in timezones" :value="item">
        {{ item }}
      </option>
    </select><div>  {{ $dayjs().tz(currentTimezone).format('DD/MM/YYYY HH:mm z') }}</div>
  </div>
</template>

<script setup>
const locales = ref([
  { name: 'English', value: 'en' },
  { name: 'Spanish', value: 'es' },
  { name: 'Portuguese', value: 'pt' }
])
const currentLocale = ref('en')
const currentTimezone = ref('America/New_York')

const timezones = ref(['America/New_York',
  'Asia/Taipei'
])

const { $dayjs } = useNuxtApp()

const prettyDate = computed(() =>
  $dayjs(new Date()).format('dddd, MMMM D, YYYY h:mm A')
)
watch(currentLocale, (newVal) => {
  $dayjs.locale(newVal)
})

</script>
