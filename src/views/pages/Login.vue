<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Нэвтрэх</h1>
                  <p class="text-muted">Нэвтрэх хэсэг</p>
                  <CInput
                    placeholder="Э-майл хаяг"
                    name="email"
                    v-model="input.email"
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                  <CInput
                    placeholder="Нууц үг"
                    type="password"
                    autocomplete="curent-password"
                    name="password" 
                    v-model="input.password"
                  >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol col="6" class="text-left">
                      <CButton v-on:click="login()" color="primary" class="px-4">Нэвтрэх</CButton>
                    </CCol>
                    <CCol col="6" class="text-right">
                      <CButton color="link" class="px-0">Нууц үг шинчлэх?</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Uhaalag.mn</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Login',
  data() {
    return {
      input: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    login() {


      if (this.input.email != "" && this.input.password != "") {
        
        usersData.forEach((obj) => {
          if(this.input.email == obj.email && this.input.password == obj.password) {
            this.$router.push('/dashboard')
          }
        });
      } else {
        console.log("A username and password must be present")
      }
    }
  }
}

</script>
