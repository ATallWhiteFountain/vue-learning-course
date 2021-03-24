<template>
<section id="app">
  <header>
    <h1>My friend list</h1>
  </header>
  <new-friend
  @add-contact="addContact"
  ></new-friend>
  <ul>
      <friend-contact
      v-for="friend in friends"
      :key="friend.id"
      :id="friend.id"
      :name="friend.name"
      :phone="friend.phone"
      :email="friend.email"
      :is-favourite="friend.isFavourite"
      @toggle-favourite="toggleFavourite"
      @delete="deleteFriend"
      ></friend-contact>
  </ul>
</section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'

export default {
  name: 'App',
  components: {
    FriendContact,
    NewFriend
  },
  methods: {
    toggleFavourite(sentId) {
      const target = this.friends.find(friend => friend.id === sentId);
      target.isFavourite = !target.isFavourite;
    },
    addContact(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavourite: false
      };
      this.friends.push(newFriend);
    },
    deleteFriend(id) {
      this.friends = this.friends.filter((friend) => friend.id !== id);
    }
  },
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '012 345 678',
          email: 'manuel.lorenz@lchst.com',
          isFavourite: false
        },
        {
          id: 'angela',
          name: 'Angela Yu',
          phone: '982 312 242',
          email: 'angela.yo@localhost.com',
          isFavourite: true
        }
      ]
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li.
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app form div {
  margin: 1rem 0;
}
</style>
