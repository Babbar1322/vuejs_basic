<template>
  <li class="list">
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}</h4>
    <div>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
        >{{ area }}</base-badge
      >
    </div>

    <div class="actions">
      <base-button mode="outline" link :to="coachContactLink">
        Contact</base-button
      >
      <base-button link :to="coachDetailsLink">View Details</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName() {
      return this.firstName + ' ' + this.lastName;
    },
    coachContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    },
    coachDetailsLink() {
      return this.$route.path + '/' + this.id;
    }
  }
};
</script>

<style>
.list {
  border: 1px solid black;
  padding: 10px 10px;
  margin-top: 10px;
  list-style: none;
  border-radius: 15px;
}
.actions {
  text-align-last: end;
  margin-bottom: 10px;
}
.actions a,
.actions a:hover {
  text-decoration: none;
}
.actions a {
  margin-bottom: 50px;
}
</style>
