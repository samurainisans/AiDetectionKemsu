<template>
  <div class="p-6 space-y-6">
    <div class="bg-white rounded-lg shadow p-6">
      <h2 class="text-2xl font-bold mb-4 text-gray-800">Тестирование темы PrimeVue Aura</h2>

      <!-- Кнопки -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Кнопки</h3>
        <div class="flex flex-wrap gap-3">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warn" />
          <Button label="Danger" severity="danger" />
          <Button label="Help" severity="help" />
          <Button icon="pi pi-check" />
          <Button label="Icon" icon="pi pi-star" />
        </div>
      </div>

      <!-- Инпуты -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Поля ввода</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText v-model="textValue" placeholder="Обычное поле" />
          <Password v-model="passwordValue" placeholder="Пароль" feedback />
          <Calendar v-model="dateValue" placeholder="Дата" />
          <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Выберите город" />
        </div>
      </div>

      <!-- Сообщения -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Сообщения</h3>
        <div class="space-y-3">
          <Message severity="success" :closable="false">Успешное сообщение</Message>
          <Message severity="info" :closable="false">Информационное сообщение</Message>
          <Message severity="warn" :closable="false">Предупреждение</Message>
          <Message severity="error" :closable="false">Ошибка</Message>
        </div>
      </div>

      <!-- Панели -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Панели</h3>
        <Accordion :activeIndex="0">
          <AccordionTab header="Первая панель">
            <p>Содержимое первой панели с темой Aura</p>
          </AccordionTab>
          <AccordionTab header="Вторая панель">
            <p>Содержимое второй панели</p>
          </AccordionTab>
        </Accordion>
      </div>

      <!-- Таблица -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Таблица</h3>
        <DataTable :value="products" class="p-datatable-sm">
          <Column field="name" header="Название"></Column>
          <Column field="category" header="Категория"></Column>
          <Column field="price" header="Цена"></Column>
        </DataTable>
      </div>

      <!-- Прогресс -->
      <div class="mb-6">
        <h3 class="text-lg font-semibold mb-3">Прогресс</h3>
        <ProgressBar :value="50" class="mb-3"></ProgressBar>
        <ProgressSpinner />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Calendar from 'primevue/calendar'
import Dropdown from 'primevue/dropdown'
import Message from 'primevue/message'
import Accordion from 'primevue/accordion'
import AccordionTab from 'primevue/accordiontab'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ProgressBar from 'primevue/progressbar'
import ProgressSpinner from 'primevue/progressspinner'

const textValue = ref('')
const passwordValue = ref('')
const dateValue = ref(null)
const selectedCity = ref(null)

const cities = ref([
  { name: 'Москва', code: 'MSK' },
  { name: 'Санкт-Петербург', code: 'SPB' },
  { name: 'Новосибирск', code: 'NSK' }
])

const products = ref([
  { name: 'Товар 1', category: 'Электроника', price: '1000₽' },
  { name: 'Товар 2', category: 'Одежда', price: '500₽' },
  { name: 'Товар 3', category: 'Книги', price: '300₽' }
])
</script>
