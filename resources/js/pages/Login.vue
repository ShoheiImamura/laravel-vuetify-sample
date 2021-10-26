<template>
  <div>
    <v-row>
      <v-app-bar> ログイン<v-spacer></v-spacer> </v-app-bar>
    </v-row>
    <v-row class="d-flex justify-center align-center fill-height">
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-form>
            <form method="post" action="/login" ref="form">
              <v-card-text>
                <v-text-field
                  label="メールアドレス"
                  name="email"
                  value="user@example.com"
                ></v-text-field>
                <v-text-field
                  label="パスワード"
                  name="password"
                  value="password"
                ></v-text-field>
              </v-card-text>
              <v-card-actions class="justify-center">
                <input type="hidden" name="_token" :value="csrfToken" />
                <v-btn
                  rounded
                  block
                  @click="
                    login();
                    btnDisplay = false;
                  "
                  :disabled="!btnDisplay"
                  >ログイン</v-btn
                >
              </v-card-actions>
              <v-card-text>
                <a>パスワードを忘れた方</a>
              </v-card-text>
            </form>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    csrfToken: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      storeInfo: {},
      btnDisplay: true,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    login: function () {
      this.$refs.form.submit();
    },
  },
};
</script>
