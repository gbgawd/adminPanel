<template>
  <CRow>
    <CCol sm="12" lg="12">
      <CCard> 
        <CCardHeader>
          Хүсэлт илгээсэн хэрэглэгчид
        </CCardHeader>
        <CCardBody>
          <CDataTable
            hover
            striped
            :items="items"
            :fields="fields"
            :items-per-page="10"
            :active-page="activePage"
            :pagination="{ doubleArrows: false, align: 'center'}"
            @page-change="pageChange"
          >
            <template #Approval="data">
              <td>
                <CButton v-on:click="updateTable(data)" shape="pill" variant="ghost" color="success">Зөвшөөрөх</CButton>       
                <CButton v-on:click="updateTable(data)" shape="pill" variant="ghost" color="danger">Deny</CButton>         
              </td>
            </template>
          </CDataTable>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import usersData from './UsersData'
export default {
  name: 'Users',
  data () {
    return {
      items: usersData,
      fields: [
        { key: 'username', label: 'Бүтэн нэр', _classes: 'font-weight-bold' },
        { key: 'requestDate', label: 'Хүсэлт илгээсэн огноо'},
        { key: 'email', label: 'Email Хаяг'},
        { key: 'role', label: 'Албан тушаал'},        
        { key: 'Approval', label: 'Зөвшөөрөx / Буцаах'}
      ],
      activePage: 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    updateTable (st) {
      console.log("Index being deleted is " , st.index);
      // delete usersData[st.index]
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
