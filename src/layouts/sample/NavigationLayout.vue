<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content @click="clickGotoLink(item.link)">
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in item.children" :key="i" link>
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>

          <v-list-item v-if="!item.children" :key="item.text" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content @click="clickGotoLink('/sample/helloworld')">
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down">Google Contacts</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <!--
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>-->
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
            alt="Vuetify"
          ></v-img
        ></v-avatar>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'NavigationLayout',

  data: () => ({
    dialog: false,
    drawer: false,
    items: [
      {
        icon: 'mdi-contacts',
        text: 'Contacts',
        link: '/sample/helloworld',
      },
      {
        icon: 'mdi-history',
        text: 'Frequently contacted',
        link: '/sample/helloworld2',
      },
      {
        icon: 'mdi-content-copy',
        text: 'Duplicates',
        link: '/sample/helloworld3',
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'Labels',
        model: false,
        link: '',
        children: [
          {
            icon: 'mdi-plus',
            text: 'Create label',
            link: '/sample/helloworld',
          },
        ],
      },
      {
        icon: 'mdi-chevron-up',
        'icon-alt': 'mdi-chevron-down',
        text: 'More',
        model: false,
        link: '',
        children: [
          { icon: 'mdi-plus', text: 'Import', link: '/sample/helloworld' },
          { icon: 'mdi-plus', text: 'Export', link: '/sample/helloworld' },
          { icon: 'mdi-plus', text: 'Print', link: '/sample/helloworld' },
          {
            icon: 'mdi-plus',
            text: 'Undo changes',
            link: '/sample/helloworld',
          },
          {
            icon: 'mdi-plus',
            text: 'Other contacts',
            link: '/sample/helloworld',
          },
        ],
      },
      { icon: 'mdi-cog', text: 'Settings', link: '/sample/helloworld' },
      {
        icon: 'mdi-message',
        text: 'Send feedback',
        link: '/sample/helloworld',
      },
      { icon: 'mdi-help-circle', text: 'Help', link: '/sample/helloworld' },
      {
        icon: 'mdi-cellphone-link',
        text: 'App downloads',
        link: '/sample/helloworld',
      },
      {
        icon: 'mdi-keyboard',
        text: 'Go to the old version',
        link: '/sample/helloworld',
      },
    ],
  }),
  methods: {
    clickGotoLink(link: string) {
      console.log('click');
      if (link !== '') {
        this.$router.push(link);
      }
    },
  },
});
</script>
