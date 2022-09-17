<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <div class="col-3" v-for="user in users" :key="user.id">
        <router-link :to="{ name: 'user', params: { id: user.id } }">
          <img
            :src="user.image"
            width="140px"
            height="140px"
          >
        </router-link>
        <h2>{{user.name}}</h2>
        <span class="badge badge-secondary">追蹤人數：{{user.FollowerCount}}</span>
        <p class="mt-3">
          <button
            type="button"
            class="btn btn-danger"
            v-if="user.isFollowed"
            @click.stop.prevent="removeFollow(user)"
          >
            取消追蹤
          </button>
          <button
            type="button"
            class="btn btn-primary"
            v-else
            @click.stop.prevent="isFollowed(user)"
          >
            追蹤
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'

const dummyData = {
  "users": [
      {
          "id": 11,
          "name": "asd",
            "email": "asd@asd.asd",
            "password": "$2a$10$2IHYn01AQhm40yT65sRQmukbIBOWlc/CvSXtZoosqWbd25XQas0d2",
            "isAdmin": true,
            "image": "https://i.imgur.com/kdGsVfU.jpeg",
            "createdAt": "2022-07-19T16:40:20.000Z",
            "updatedAt": "2022-08-21T08:20:27.000Z",
            "Followers": [
                {
                    "id": 51,
                    "name": "test1",
                    "email": "test1@gmail.com",
                    "password": "$2a$10$.Exwuk/oDJ2LrxELLF92kOl.DONKNw.noQA.Oy.OLOkqt3OroKVGi",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-08-13T13:31:54.000Z",
                    "updatedAt": "2022-08-13T13:31:54.000Z",
                    "Followship": {
                        "followerId": 51,
                        "followingId": 11,
                        "createdAt": "2022-08-14T04:26:35.000Z",
                        "updatedAt": "2022-08-14T04:26:35.000Z"
                    }
                },
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$XEmPoScEWjroHwrSphg0R.pSu..BGim3fmo8dCHlKp0QwdOoeR/W6",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T07:58:49.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 11,
                        "createdAt": "2022-08-21T08:14:04.000Z",
                        "updatedAt": "2022-08-21T08:14:04.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T14:56:41.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 11,
                        "createdAt": "2022-09-11T14:16:29.000Z",
                        "updatedAt": "2022-09-11T14:16:29.000Z"
                    }
                }
            ],
            "FollowerCount": 3,
            "isFollowed": true
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$bLAJJTponKPYl0RgDGfvquEVewu22ou3VtVwtIH1ujAsidf053X8q",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-13T07:58:49.000Z",
            "updatedAt": "2022-09-02T18:23:59.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$XEmPoScEWjroHwrSphg0R.pSu..BGim3fmo8dCHlKp0QwdOoeR/W6",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T07:58:49.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 3,
                        "createdAt": "2022-08-09T14:10:17.000Z",
                        "updatedAt": "2022-08-09T14:10:17.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T14:56:41.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 3,
                        "createdAt": "2022-09-11T14:22:50.000Z",
                        "updatedAt": "2022-09-11T14:22:50.000Z"
                    }
                }
            ],
            "FollowerCount": 2,
            "isFollowed": true
        },
        {
            "id": 31,
            "name": "william",
            "email": "williamhsu88157976@gmail.com",
            "password": "$2a$10$FZOYa.l9JfiMmkpNxmaDvemCWVMzhiz2JaGNhd6SSYuE.zw0Hi4jO",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-31T13:21:06.000Z",
            "updatedAt": "2022-07-31T13:21:06.000Z",
            "Followers": [
                {
                    "id": 1,
                    "name": "root",
                    "email": "root@example.com",
                    "password": "$2a$10$XEmPoScEWjroHwrSphg0R.pSu..BGim3fmo8dCHlKp0QwdOoeR/W6",
                    "isAdmin": true,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T07:58:49.000Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 31,
                        "createdAt": "2022-08-21T08:13:09.000Z",
                        "updatedAt": "2022-08-21T08:13:09.000Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T14:56:41.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 31,
                        "createdAt": "2022-09-11T14:22:50.000Z",
                        "updatedAt": "2022-09-11T14:22:50.000Z"
                    }
                }
            ],
            "FollowerCount": 2,
            "isFollowed": true
        },
        {
            "id": 1,
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$XEmPoScEWjroHwrSphg0R.pSu..BGim3fmo8dCHlKp0QwdOoeR/W6",
            "isAdmin": true,
            "image": null,
            "createdAt": "2022-07-13T07:58:49.000Z",
            "updatedAt": "2022-07-13T07:58:49.000Z",
            "Followers": [
                {
                    "id": 11,
                    "name": "asd",
                    "email": "asd@asd.asd",
                    "password": "$2a$10$2IHYn01AQhm40yT65sRQmukbIBOWlc/CvSXtZoosqWbd25XQas0d2",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/kdGsVfU.jpeg",
                    "createdAt": "2022-07-19T16:40:20.000Z",
                    "updatedAt": "2022-08-21T08:20:27.000Z",
                    "Followship": {
                        "followerId": 11,
                        "followingId": 1,
                        "createdAt": "2022-07-19T16:41:28.000Z",
                        "updatedAt": "2022-07-19T16:41:28.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 51,
            "name": "test1",
            "email": "test1@gmail.com",
            "password": "$2a$10$.Exwuk/oDJ2LrxELLF92kOl.DONKNw.noQA.Oy.OLOkqt3OroKVGi",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-08-13T13:31:54.000Z",
            "updatedAt": "2022-08-13T13:31:54.000Z",
            "Followers": [
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
                    "isAdmin": false,
                    "image": null,
                    "createdAt": "2022-07-13T07:58:49.000Z",
                    "updatedAt": "2022-07-13T14:56:41.000Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 51,
                        "createdAt": "2022-09-11T14:22:53.000Z",
                        "updatedAt": "2022-09-11T14:22:53.000Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$.8Fh51CCtHSVL2soTn5u0O8/08a0t8fkbvtBouedlH3RHeFEKqkfe",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-13T07:58:49.000Z",
            "updatedAt": "2022-07-13T14:56:41.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 21,
            "name": "",
            "email": "",
            "password": "$2a$10$v.ol5tXOuyTdmO/tTcJ9u.EQPu4Xc1wjmXHSQJH6DgyeE3ECggHEW",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-07-23T07:23:13.000Z",
            "updatedAt": "2022-07-23T07:23:13.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 41,
            "name": "12",
            "email": "12@gc",
            "password": "$2a$10$5RF1o45vWZWuCQaNWXxQPOMq4LtXoZeGXdmVckZIoWE//jemVscie",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-08-06T08:32:40.000Z",
            "updatedAt": "2022-08-06T08:32:40.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 61,
            "name": "donkey",
            "email": "donkey@example.com",
            "password": "$2a$10$A31GdkWyUxtlTPyalUPpoenjLmnj677njLaROcbMyb11k.cGu85mO",
            "isAdmin": false,
            "image": "https://i.imgur.com/G5mxpaQ.jpeg",
            "createdAt": "2022-08-19T08:32:38.000Z",
            "updatedAt": "2022-08-21T08:23:41.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 71,
            "name": "AABBCD",
            "email": "AABBCD@123",
            "password": "$2a$10$XPAJFdXuACRQzu2/Pc6OBOPIxQl3CNM/a4cjOD26mE5oluR13mJY2",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-08-22T07:09:09.000Z",
            "updatedAt": "2022-08-22T07:09:09.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 81,
            "name": "a",
            "email": "aa@qq.com",
            "password": "$2a$10$vjut6gFsEelFUZ6pk/mSkuK0mlO7ICJ.0PqZjrz3WrjA1oS9sUkYC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-08-26T02:26:23.000Z",
            "updatedAt": "2022-08-26T02:26:23.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 91,
            "name": "阿拉尔",
            "email": "1234567@qq.com",
            "password": "$2a$10$OSiCsWep3kYFfpdt4L8TauiWus8xq6BO.pp4CvMZ265yLWtxlAKNq",
            "isAdmin": false,
            "image": null,
            "createdAt": "2022-09-01T23:29:34.000Z",
            "updatedAt": "2022-09-01T23:29:34.000Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
      },
      {
          "id": 101,
          "name": "1231",
          "email": "123@123",
          "password": "$2a$10$85s1hrY4xDX/XvBomw/Mo.45TPm2dshYQAh9b7GEzZa9MWP/21BDq",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-09-14T13:40:21.000Z",
          "updatedAt": "2022-09-14T13:40:21.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      },
      {
          "id": 111,
          "name": "test",
          "email": "test@gmail.com",
          "password": "$2a$10$nFDBPWdglZsulNpuUxi2lOot4KbqYQo9E4bFuv5NiJKdeh9Usjhsi",
          "isAdmin": false,
          "image": null,
          "createdAt": "2022-09-14T13:40:44.000Z",
          "updatedAt": "2022-09-14T13:40:44.000Z",
          "Followers": [],
          "FollowerCount": 0,
          "isFollowed": false
      }
  ],
}

export default {
  data () {
    return {
      users: [],
    }
  },
  components: {
    NavTabs
  },
  methods: {
    fetchUsers () {
      this.users = dummyData.users
    },
    isFollowed (target) {
      this.users.filter((user)=>{
        if (user.id === target.id){
          target.isFollowed = true
        }
      })
    },
    removeFollow (target) {
      this.users.filter((user)=>{
        if (user.id === target.id){
          target.isFollowed = false
        }
      })
    }
  },
  created () {
    this.fetchUsers()
  },
}
</script>