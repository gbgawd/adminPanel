<template>
  <CDropdown
    inNav
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler>
      <CHeaderNavLink>
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img"
          />
        </div>
      </CHeaderNavLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" color="light">      
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem v-on:click="goEditCard()">
      <CIcon name="cil-user" /> Profile
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem v-on:click="logOut()">
      <CIcon name="cil-shield-alt" /> Lock Account
    </CDropdownItem>
    <CDropdownItem v-on:click="logOut()"> 
      <CIcon name="cil-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>

export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 

    }
  },
  methods: {
    goEditCard () {
      this.$router.push('/editCard')
    },
    logOut() {
      this.$router.push('/pages/login')
    }
  }
}

</script>

<style scoped>
  .c-icon {
    margin-right: 0.3rem;
  }
</style>