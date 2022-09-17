<template>
  <ul class="nav nav-tabs mb-4">
    <li class="nav-item">
      <router-link  :to="{name: 'root'}"  class="nav-link">首頁</router-link>
    </li>
    <li class="nav-item">
      <router-link  :to="{name: 'restaurants-feeds'}"  class="nav-link">最新動態</router-link>
    </li>
    <li class="nav-item">
      <router-link  :to="{name: 'restaurants-tops'}"  class="nav-link">TOP 10 人氣餐廳</router-link>
    </li>
    <li class="nav-item">
      <router-link  :to="{name: 'users-top'}"  class="nav-link">美食達人</router-link>
    </li>
  </ul>
</template>