<template>
  <div class="mb-3">
    <h1>餐廳後台</h1>
    <router-link to="/admin/restaurants">Restaurants</router-link> |
    <router-link to="/admin/categories">Categories</router-link> |
    <router-link to="/admin/users">Users</router-link>
  </div>
</template>
<table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            1
          </th>
          <td>root@example.com</td>
          <td>admin</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
            >
              set as user
            </button>
          </td>
        </tr>
        <tr>
          <th scope="row">
            2
          </th>
          <td>user1@example.com</td>
          <td>user</td>
          <td>
            <button
              type="button"
              class="btn btn-link"
            >
              set as admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
