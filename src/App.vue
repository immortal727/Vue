<template>
    <!-- Если используем vuetify все должно быть
      обернуто в тэг <v-app> -->
    <v-app>
        <v-row class="fill-height">
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link to="/home">Home</router-link>
                    </v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link to="/about">About</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-row>
    </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
