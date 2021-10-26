<template>
  <div>
    <v-row>
      <v-app-bar>
        テンプレートサイト<v-spacer></v-spacer>
        <form action="/logout" method="post" ref="form">
          <input type="hidden" name="_token" :value="csrfToken" />
          <v-btn
            @click="
              logout();
              btnDisplay = false;
            "
            :disabled="!btnDisplay"
            >ログアウト</v-btn
          >
        </form></v-app-bar
      >
    </v-row>
    <v-row>
      <v-col cols="12">
        <h3>ダッシュボード</h3>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card><v-card-title>カード</v-card-title></v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnDisplay: true,
    };
  },
  props: {
    csrfToken: {
      type: String,
      required: true,
    },
  },
  mounted() {
    console.log("Component mounted.");
  },
  computed: {},
  methods: {
    logout: function () {
      this.$refs.form.submit();
    },
  },
};
</script>
