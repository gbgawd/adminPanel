<template>
  <CRow>
      <CCol sm="9">
        <CCard>
          <CCardHeader>
            <strong>Хувийн мэдээлэл шинчлэх</strong>
          </CCardHeader>
          <CCardBody class="info-container">
           <div class="custom-card">
             <img
                src="img/avatars/6.jpg"
                class="shikhisda"
              />
           </div>
            <CForm>
              <CInput
                description="Овог нэрээ оруулна уу!"
                label="Нэр"
                horizontal
                autocomplete="name"
              />
              <CInput
                label="Хэрэглэгчийн нэр"
                value=""
                horizontal
              />
              <CInput
                label="Албан тушаал"
                placeholder="Text"
                horizontal
              />              
              <CInput
                label="Email"
                description="Please enter your email"
                placeholder="Enter your email"
                type="email"
                horizontal
                autocomplete="email"
              />
              <CInput
                label="Password"
                description="Please enter a complex password"
                placeholder="Enter your password"
                type="password"
                horizontal
                autocomplete="current-password"
              />
              
              <!-- <template v-for="(name, key) in radioNames">
                <CRow form class="form-group" :key="name">
                  <CCol sm="3">
                    {{name}}
                  </CCol>
                  <CInputRadioGroup
                    class="col-sm-9"
                    :options="options"
                    :custom="key > 1"
                    :checked="`Option ${key}`"
                    :inline="key % 2 === 1"
                  />
                </CRow>
              </template> -->
              <CInputFile
                label="Зураг оруулаx"
                horizontal
              />            
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary"><CIcon name="cil-check-circle"/> Submit</CButton>
            <CButton type="reset" size="sm" color="danger"><CIcon name="cil-ban"/> Reset</CButton>
          </CCardFooter>
        </CCard>         
      </CCol>
    </CRow>
</template>

// <script>
// import usersData from './UsersData'
// export default {
//   name: 'Users',
//   data () {
//     return {
//       items: usersData,
//       fields: [
//         { key: 'username', label: 'Name', _classes: 'font-weight-bold' },
//         { key: 'registered' },
//         { key: 'role' },
//         { key: 'status' }
//       ],
//       activePage: 1
//     }
//   },
//   watch: {
//     $route: {
//       immediate: true,
//       handler (route) {
//         if (route.query && route.query.page) {
//           this.activePage = Number(route.query.page)
//         }
//       }
//     }
//   },
//   methods: {
//     getBadge (status) {
//       switch (status) {
//         case 'Active': return 'success'
//         case 'Inactive': return 'secondary'
//         case 'Pending': return 'warning'
//         case 'Banned': return 'danger'
//         default: 'primary'
//       }
//     },
//     rowClicked (item, index) {
//       this.$router.push({path: `editCard/${index + 1}`})
//     },
//     pageChange (val) {
//       this.$router.push({ query: { page: val }})
//     }
//   }
// }
// </script>
<style scoped>
  .info-container {
    display: flex;
    flex-direction: row;
  }
  .custom-card{
    border-radius: 50%;
    margin-right: 50px;
    margin-left: 20px;
  }
  .shikhisda{
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .form-row {
    white-space: nowrap;
  }
  form {
    width: 500px;
  }

</style>